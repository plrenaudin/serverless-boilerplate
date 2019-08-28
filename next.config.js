/* eslint-disable */
const withLess = require("@zeit/next-less");
const { parsed: localEnv } = require("dotenv").config();
const path = require("path");
const webpack = require("webpack");

const nextConfig = {
  target: "serverless",
  webpack(config, options) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

module.exports = withLess(nextConfig);
