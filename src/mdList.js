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
const categorizedFreebies = markdownListParser.parse(lexerItems, true);

/* Just uncomment this if you want to study how the parser parses through the lexer tokens */
// fs.writeFileSync(path.resolve(__dirname, "./parsingUncategorizedResults.json"), JSON.stringify(freebies, null, 4), {encoding: "utf8"});
// fs.writeFileSync(path.resolve(__dirname, "./parsingCategorizedResults.json"), JSON.stringify(categorizedFreebies, null, 4), {encoding: "utf8"});

// writing the freebies in their own object
const freebiesJdbInstance = jaysonDB.getDB(path.resolve(__dirname, "../api/freebies.json"));
let index = 0;

freebiesJdbInstance.delete(() => true);

for (const name in freebies) {
  const freebie = freebies[name];
  const freebieInstance = new Freebie.Freebie(index, name, freebie.link, freebie.type, freebie.description, freebie.personal_rating);

  freebiesJdbInstance.create(freebieInstance, name);

  index++;
}

freebiesJdbInstance.export();
console.log("All of the freebies (uncategorized) has been exported to the JSON file.")


const categorizedFreebiesJdbInstance = jaysonDB.getDB(path.resolve(__dirname, "../api/freebies.categorized.json"));
let secondIndex = 0;

categorizedFreebiesJdbInstance.delete(() => true);

for (const name in categorizedFreebies) {
  const category = categorizedFreebies[name];
  const categoryInstance = new Freebie.Category(category.description, category.icon_name, category.main_color, category.children);

  categorizedFreebiesJdbInstance.create(categoryInstance, name);

  secondIndex++;
}

categorizedFreebiesJdbInstance.export();
console.log("All of the freebies (in each of their respective categories) has been exported to the JSON file.");
