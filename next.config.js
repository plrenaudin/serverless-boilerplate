/* eslint-disable */
const nextConfig = {
  cssModules: true,
  target: "serverless"
};

const { PHASE_PRODUCTION_SERVER } = process.env.NODE_ENV === "development" ? {} : require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Production config
    return nextConfig;
  }
  const withLess = require("@zeit/next-less");
  return withLess(nextConfig);
};
