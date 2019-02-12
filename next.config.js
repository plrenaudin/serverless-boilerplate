/* eslint-disable */
const withLess = require("@zeit/next-less");

const nextConfig = {
  cssModules: true,
  target: "serverless"
};

module.exports = withLess(nextConfig);
