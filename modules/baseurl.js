/**
 * Helper method which returns the API base URL
 * @param {Headers} headers HTTP request headers if serveside, undefined otherwise
 *
 * @returns baseUrl
 */
const getBaseUrl = headers => (headers ? `${headers["x-forwarded-proto"] || "http"}://${headers.host}` : "");

export default getBaseUrl;
