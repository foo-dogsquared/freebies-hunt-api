// extracting the freebies from my personal freebies list with a little list parser
// https://github.com/foo-dogsquared/freebies-resource-list
// I think it's an overkill but LET'S TRY IT, BOI! :D

// adapted from Zaydek's live markdown rendering editor & Rob Pike's Lexical Analysis
// https://codepen.io/zaydek/pen/gERNJb?editors=1000
// https://www.youtube.com/watch?v=HxaD_trXwRE
class MarkdownListLexer {
  // PATTERN:
  // ## TYPE
  // - [ NAME ]( LINK ) | ((**(PERSONAL RATING)**)? DESCRIPTION)?
  // The only optional tokens to appear here are the personal rating and description that are indicated by the em-dash HTML entity
  // Also, we have to make sure the pattern is considered as a Markdown list item (with the dash in the front)

  // OTHER SPECIFICATIONS:
  // - the list item and the headers (and subheaders) should have less than 4 spaces
  //  since it is considered now as a code block
  // - name and link should be right after each other enclosed in their appropriate indicators, no other conditions
  // - personal ratings can be anything until the closing end element/keyword is encountered
  // - description can be anything until a newline is encountered

  /** 
  *** TOKENS:
  *** TYPE - indicated by the markdown subheader (##) token and it'll be used as the type of freebie that'll be parsed until the parser encountered another one, it also has a default value which is "Uncategorized"
  *** NAME - indicated by a pair of square brackets
  *** LINK - indicated by a pair of parenthesis and should be followed right after the NAME
  *** PERSONAL_RATING - indicated in the first sentence and two pairs of asterisks and a pair of parenthesis and should be followed after the &mdash; separator
  *** DESCRIPTION - followed after the personal rating, can be anything until a newline has been encountered
  **/

  // tokens that should be located at the very start of the input (at least right after the newline)
  static get BEGINNING_TOKEN_CONSTANTS() {
    return {
      TYPE: {
        tag: "## ",
        syntax: "<ALL>",
        newline: true
      },
      LIST: {
        tag: "- ",
        composition: "fixed",
        newline: true,
        syntax: {
          NAME: {
            opening: "[",
            closing: "]"
          },
          LINK: {
            opening: "(",
            closing: ")",
            after: "NAME"
          },
          PIPE_SEPARATOR: {
            value: "|",
            after: "LINK",
            optional: true
          },
          PERSONAL_RATING: {
            opening: "**(",
            closing: ")**",
            after: "PIPE_SEPARATOR",
            optional: true
          },
          DESCRIPTION: {
            all: true,
            after: "PIPE_SEPARATOR",
            before: "NEWLINE",
            optional: true
          }
        }
      }
    }
  }

  constructor(input) {
    // read-only properties
    Object.defineProperty(this, 'input', {value: input, configurable: true, enumerable: true});

    this.start = 0;
    this.pos = 0;
    this.items = [];

    return this;
  }

  // the cursor will go to the next character and returns it
  next() {
    // checking if the cursor is at the end of the input to declare it's EOF
    if (this.pos >= this.input.length) return this.EOF;

    // otherwise, just advance to the next character
    this.pos += 1;
    const char = this.input[this.pos];
    return char;
  }

  // the cursor will go back one character and return it
  previous() {
    // checking if the cursor is at the beginning of the input
    if (this.pos <= 0) return this.BOF; // ;p

    this.pos -= 1;
    const char = this.input[this.pos];
    return char;
  }

  // returns the current character
  get current() {
    return this.input[this.pos];
  }

  // returns the next character
  peek() {
    return this.input[this.pos + 1];
  }

  // returns the previous character
  lookbehind() {
    return this.input[this.pos - 1];
  }

  // takes a peek from current +/- 1 to (current +/- n)th character
  slice(size = 0, includeCurrentCharacter = false) {
    if (typeof size !== 'number') throw new TypeError("[size] is not a number.");

    // this is when the current character counts
    const includesCurrent = (includeCurrentCharacter) ? 1 : 0;

    // even if it doesn't include current character, it'll be a zero anyways so no additional value there
    const cursorAdditionalPosition = (size > 0) ? -includesCurrent : includesCurrent;

    const string = [];

    this.seek(size + cursorAdditionalPosition);

    for (let index = 0, length = Math.abs(size) - includesCurrent; index < length; index++) {
      if (size > 0) {
        string.unshift(this.current);
        this.previous();
      }
      else {
        string.push(this.current);
        this.next();
      }
    }

    if (includesCurrent) {
      if (size > 0) string.unshift(this.current);
      else string.push(this.current);
    }

    return string.join("");
  }

  // set the cursor to nth position relative to its current position
  seek(length = 0) {
    this.pos += length;
  }

  // set the starting cursor in the current position of the traversal cursor
  ignore() {
    this.start = this.pos;
  }

  // basically combination of seek and ignore
  skip(length = 1) {
    this.seek(length);
    this.ignore();
  }

  // emit a lex item and set the cursor
  emit(type) {
    // get the item
    const data = this.input.slice(this.start, this.pos);
    this.items.push({type, data});
    this.ignore();
  }

  // analyzing the markdown syntax and the list types and items
  // returns an array that contains the lexer items
  analyze() {
    let state = "";
    const whitespaceCharacters = /[\t\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]/ // except for the newline

    // while it is not EOF
    while (this.current) {
      // if it's a newline or the start of the input, make it as the start of the selection cursor
      if (this.lookbehind() === '\n' || !this.lookbehind()) {
        if (whitespaceCharacters.test(this.current)) this.skip();

        for (const name in MarkdownListLexer.BEGINNING_TOKEN_CONSTANTS) {
          const tokenConstants = MarkdownListLexer.BEGINNING_TOKEN_CONSTANTS[name];
          const newlineElement = this.slice(tokenConstants.tag.length, true);
          if (newlineElement === tokenConstants.tag) {
            state = name;
            this.seek(tokenConstants.tag.length);
            break;
          }
        }

        this.ignore();
      }

      // if there's a detected state
      if (state in MarkdownListLexer.BEGINNING_TOKEN_CONSTANTS) {
        const token = MarkdownListLexer.BEGINNING_TOKEN_CONSTANTS[state];
        if (token.syntax === "<ALL>") {
          while (this.current !== '\n') this.next();
          this.emit(state);
        }
        // if the composition is fixed (which means it has a fixed pattern and cannot be cut off with a newline), we'll enumerate it
        else if (token.syntax instanceof Object && token.composition === "fixed") {
          // the syntax here will be executed in order
          const syntaxStates = {};
          for (const tag in token.syntax) {
            syntaxStates[tag] = false;
          }

          for (const tag in token.syntax) {
            const syntax = token.syntax[tag];
            if (syntax.after && !syntaxStates[syntax.after] && !syntax.optional) throw new Error("There's a lexical error in the list.");
            else if (syntax.optional && syntax.after && !syntaxStates[syntax.after]) continue;

            // if the syntax wraps around the text
            if (syntax.opening && syntax.closing) {
              if (typeof syntax.opening !== 'string' && typeof syntax.closing !== 'string') throw new TypeError("Opening and closing tags of the syntax is not a string.")

              if (whitespaceCharacters.test(this.current)) this.skip();

              if (this.slice(syntax.opening.length, true) !== syntax.opening && syntax.optional) continue;
              else this.skip(syntax.opening.length);

              while (this.slice(syntax.closing.length, true) !== syntax.closing) this.next();
              this.emit(tag);
              this.seek(syntax.closing.length);
            }
            // if the syntax is simply a value
            else if (syntax.value) {
              if (typeof syntax.value !== "string") throw new TypeError("Syntax value is not a string.");

              if (whitespaceCharacters.test(this.current)) this.skip();

              if (this.slice(syntax.value.length, true) !== syntax.value && syntax.optional) continue;
              else this.skip(syntax.value.length);

              this.emit(tag);
            }
            // if the syntax is the rest of the line (<ALL>)
            else if (syntax.all) {
              if (this.current === '\n') continue;

              if (whitespaceCharacters.test(this.current)) this.skip();

              while (this.current !== '\n') this.next();
              this.emit(tag);
            }

            syntaxStates[tag] = true;
            this.ignore();
          }
        }
      }

      if (this.current === '\n') {
        if (state && MarkdownListLexer.BEGINNING_TOKEN_CONSTANTS[state].newline) this.emit("NEWLINE");
        state = "";
      }

      this.next();
    }

    return this.items;
  }
}

module.exports = MarkdownListLexer;
