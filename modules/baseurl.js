/**
 * Helper method which returns the API base URL
 * @param {Request} req HTTP request if serveside, undefined otherwise
 */
const getBaseUrl = req => {
  const protocol = (req && req.headers["x-forwarded-proto"]) || "http";
  return req ? `${protocol}://${req.headers.host}` : "";
};

export default getBaseUrl;
