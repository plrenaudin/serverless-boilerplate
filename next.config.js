/* eslint-disable */
const withLess = require("@zeit/next-less");
const path = require("path");

const nextConfig = {
  target: "serverless",
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["modules"] = path.join(__dirname, "modules");
    config.resolve.alias["models"] = path.join(__dirname, "models");
    return config;
  }
};

module.exports = withLess(nextConfig);
