const markdownListLexer = require('./markdownListLexer');
const markdownListParser = require("./markdownListParser");
const Freebie = require("./freebie");
const fs = require('fs');
const path = require('path');
const jaysonDB = require("jayson-db");

const mdFile = fs.readFileSync(path.resolve(__dirname, "./list.md"), "utf8");
const mdFileParser = new markdownListLexer(mdFile);
const lexerItems = mdFileParser.analyze();

/* Just uncomment this if you want to study the results of the Markdown list lexer */
// fs.writeFileSync(path.resolve(__dirname, "./lexerTokens.json"), JSON.stringify(lexerItems, null, 4), {encoding: "utf8"});

const freebies = markdownListParser.parse(lexerItems);

/* Just uncomment this if you want to study how the parser parses through the lexer tokens */
// fs.writeFileSync(path.resolve(__dirname, "./parsingResults.json"), JSON.stringify(freebies, null, 4), {encoding: "utf8"});

const jdbInstance = jaysonDB.getDB(path.resolve(__dirname, "../api/freebies.json"));
let index = 0;

jdbInstance.delete(() => true);

for (const name in freebies) {
  const freebie = freebies[name];
  const freebieInstance = new Freebie(index, name, freebie.link, freebie.type, freebie.description, freebie.personal_rating);

  jdbInstance.create(freebieInstance, name);

  index++;
}

jdbInstance.export();
console.log("All of the links has been exported to the JSON file.")
