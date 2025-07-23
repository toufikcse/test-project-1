const HttpStatus = require('../http-status');

class BaseError extends Error {
  /**
   * @param {string} message - The error message.
   * @param {number} httpCode - The HTTP status code.
   * @param {string} name - The name/type of the error.
   * @param {string} description - A detailed error description.
   * @param {any} [errors] - Optional additional error data.
   */
  constructor(message, httpCode, name, description, errors) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = name;
    this.statusCode = httpCode;
    this.isOperational = true;
    this.description = description;
    this.errors = errors || {};

    Error.captureStackTrace(this);
  }
}

module.exports = BaseError;

