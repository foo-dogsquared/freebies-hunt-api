const Freebie = require("./freebie");
const markdownListLexer = require("./markdownListLexer");

const TOKEN_CONSTANTS = markdownListLexer.BEGINNING_TOKEN_CONSTANTS;

class MarkdownListParser {
  static parse(lexerItems) {
    if (!(lexerItems instanceof Array)) throw new TypeError("[input] is not an array.");

    // how to parse properly
    // input of array of token objects (properties: 'type' & 'data')
    // TYPE: the type of all upcoming items (unless a NAME token is encountered first, it'll be under "Uncategorized")
    // NAME: the indicator of an item
    // LINK: the associated value of the item

    let type = "Uncategorized";
    let item = "";
    const Freebies = {}

    for (const token of lexerItems) {
      const tokenType = token.type;
      let tokenData = token.data;

      switch (tokenType) {
        case "TYPE":
          type = tokenData;
          break;
        case "NAME":
          if (tokenData in Freebies) item = `${tokenData} ${type}`;
          else item = tokenData;
          Freebies[item] = {};
          Freebies[item].type = type;
          break;
        case "DESCRIPTION":
        case "LINK":
        case "PERSONAL_RATING":
          Freebies[item][tokenType.toLowerCase()] = tokenData;
          break;
      }
    }

    return Freebies;
  }
}

module.exports = MarkdownListParser;
