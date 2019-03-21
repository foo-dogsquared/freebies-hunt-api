const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "./api/freebies.json"), "utf8");
const schema = fs.readFileSync(path.resolve(__dirname, "./api/freebies.schema.json"), "utf8");

const freebiesHuntJSON = {
  data,
  schema
};

module.exports = freebiesHuntJSON;
