/* eslint-disable */
const withLess = require("@zeit/next-less");

module.exports = withLess({
  cssModules: true,
  target: "serverless"
});
