import getBaseUrl from "./baseurl";
import logger from "./logger";

/**
 * Fetch or post data to API endpoint
 *
 * @param {Object} options Fetcher's options
 * @param {string} options.req The request
 * @param {string} options.url The url
 *
 * @returns {Promise}
 */
const fetcher = ({ req, url }) => {
  const startTime = Date.now();
  return fetch(getBaseUrl(req) + url)
    .then(log(startTime))
    .then(checkStatus)
    .then(r => r.json())
    .catch(err => {
      logger.error(err);
    });
};

/**
 * Log fetcher's response status and latency
 * @param {Response} response fetcher's response
 *
 * @returns {Response}
 */
const log = startTime => response => {
  logger.info(`Called ${response.url} - ${response.status} - ${Date.now() - startTime} ms`);
  return response;
};

/**
 * Helper method to throw error on status not ok
 * @param {Response} response fetcher's response
 *
 * @returns {Response | Promise}
 */
const checkStatus = response => {
  if (response.ok) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
};

export default fetcher;
