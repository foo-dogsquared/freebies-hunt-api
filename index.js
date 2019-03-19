const fs = require("fs");
const path = require("path");

const freebiesHuntJSON = fs.readFileSync(path.resolve(__dirname, "./api/freebies.json"), "utf8");

module.exports = freebiesHuntJSON;
