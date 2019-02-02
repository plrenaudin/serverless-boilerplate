/**
 *
 * @param {Object} options Logger's options
 * @param {string} options.level log level (info, warn, error ...)
 * @param {string} options.input string to write
 *
 * @returns {void}
 */
const logger = ({ level, input }) => {
  console.log(level, input);
};

export default {
  error: input => logger({ level: "error", input }),
  warn: input => logger({ level: "warn", input }),
  info: input => logger({ level: "info", input })
};
