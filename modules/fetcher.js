import getBaseUrl from "./baseurl";
import logger from "./logger";

/**
 * Fetch or post data to API endpoint
 *
 * @param {Object} options Fetcher's options
 * @param {string} options.headers The request's headers
 * @param {string} options.url The url
 * @param {string} options.config The config to pass to the underlying fetch implementation (isomorphic-unfetch)
 *
 * @returns {Promise}
 */
const fetcher = (url, config, headers) => {
    const startTime = Date.now();
    return fetch(getBaseUrl(headers) + url, config)
      .then(log(startTime))
      .then(checkStatus)
      .then(r => r.json())
      .catch(err => {
        logger.error(err);
      });
  },
  /**
   * Log fetcher's response status and latency
   * @param {Response} response fetcher's response
   *
   * @returns {Response}
   */
  log = startTime => response => {
    logger.info(`Called ${response.url} - ${response.status} - ${Date.now() - startTime} ms`);
    return response;
  },
  /**
   * Helper method to throw error on status not ok
   * @param {Response} response fetcher's response
   *
   * @returns {Response | Promise}
   */
  checkStatus = response => {
    if (response.ok) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  };

export default fetcher;
