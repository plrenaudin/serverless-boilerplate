/**
 * Helper method which returns the API base URL
 * @param {Request} req HTTP request if serveside, undefined otherwise
 *
 * @returns baseUrl
 */
const getBaseUrl = req => (req ? `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}` : "");

export default getBaseUrl;
