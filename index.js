const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./api/freebies.json"), "utf8"));
const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./api/freebies.schema.json"), "utf8"));
const categorizedData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./api/freebies.categorized.json"), "utf8"));
const categorizedDataSchema = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./api/freebies.categorized.schema.json"), "utf8"));

const freebiesHuntJSON = {
  data,
  schema,
  categorizedData,
  categorizedDataSchema,
};

module.exports = freebiesHuntJSON;
