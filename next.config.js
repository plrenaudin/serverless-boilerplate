/* eslint-disable */
const withLess = require("@zeit/next-less");
const { parsed: localEnv } = require("dotenv").config();
const path = require("path");
const webpack = require("webpack");

const nextConfig = {
  target: "serverless",
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["modules"] = path.join(__dirname, "modules");
    config.resolve.alias["models"] = path.join(__dirname, "models");
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

module.exports = withLess(nextConfig);
