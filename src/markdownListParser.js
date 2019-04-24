const Freebie = require("./freebie");
const markdownListLexer = require("./markdownListLexer");

const TOKEN_CONSTANTS = markdownListLexer.BEGINNING_TOKEN_CONSTANTS;

class MarkdownListParser {
  static parse(lexerItems, categorized = false) {
    if (!(lexerItems instanceof Array)) throw new TypeError("[input] is not an array.");

    // how to parse properly
    // input of array of token objects (properties: 'type' & 'data')
    // TYPE: the type of all upcoming items (unless a NAME token is encountered first, it'll be under "Uncategorized")
    // NAME: the indicator of an item
    // LINK: the associated value of the item

    let type = "Uncategorized";
    const Freebies = {}

    for (const token of lexerItems) {
      const tokenType = token.type;
      let tokenData = token.data;

      switch (tokenType) {
        case "TYPE":
          type = tokenData;
          if (categorized) {
            Freebies[type] = {};
            Freebies[type].children = [];
          };
          break;
        case "TYPE_METADATA":
          if (categorized) {
            for (const metadata in tokenData) 
              Object.defineProperty(Freebies[type], metadata.toLowerCase(), {value: tokenData[metadata].data, enumerable: true, configurable: true});
          }
          break;
        case "LIST":
          let name = tokenData["NAME"].data;
          if (categorized) {
            const resource = {};
  
            // enumerating through the list
            for (const part in tokenData) 
              Object.defineProperty(resource, part.toLowerCase(), {value: tokenData[part].data, enumerable: true});

            Freebies[type].children.push(resource);
          }
          else {
            if (tokenData in Freebies) name = `${name} ${type}`;
            Freebies[name] = {};
            Freebies[name].type = type;
  
            // enumerating through the list
            for (const part in tokenData) 
              Object.defineProperty(Freebies[name], part.toLowerCase(), {value: tokenData[part].data, enumerable: true});
          }
          break;
      }
    }

    return Freebies;
  }
}

module.exports = MarkdownListParser;
