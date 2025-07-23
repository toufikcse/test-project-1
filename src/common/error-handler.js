const { failure } = require('./common-response');
const HttpStatus = require('./http-status');
const Messages = require('./messages');

/**
 * @param {Object} err
 * @param {string} err.name
 * @param {number} err.statusCode
 * @param {boolean} err.isOperational
 * @param {string} err.description
 * @param {any} err.errors
 */
const errorHandler = (err, req, res, next) => {
  console.error(err?.description || JSON.stringify(err));

  const errors = err.errors || {};
  const httpStatusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = err.description || Messages.ServerError;

  return res.status(httpStatusCode).send(failure(message, errors));
};

module.exports = errorHandler;
