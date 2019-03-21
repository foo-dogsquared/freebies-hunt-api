const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./api/freebies.json"), "utf8"));
const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./api/freebies.schema.json"), "utf8"));

const freebiesHuntJSON = {
  data,
  schema
};

module.exports = freebiesHuntJSON;
