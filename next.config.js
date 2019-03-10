/* eslint-disable */
const withLess = require("@zeit/next-less");

const nextConfig = {
  target: "serverless"
};

module.exports = withLess(nextConfig);
