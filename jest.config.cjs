// @ts-check
const fs = require("node:fs");
const process = require("node:process");

const config = JSON.parse(fs.readFileSync(`${process.cwd()}/.swcrc`, "utf-8"));
delete config.exclude;

/**
 * @type { import("jest").Config }
 */
module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", config],
  },
  rootDir: __dirname,
  roots: ["<rootDir>/src"],
  testRegex: "(test|spec).tsx?$",
};
