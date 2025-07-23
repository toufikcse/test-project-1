const { ErrorName } = require('@common/constants');
const HttpStatus = require('@common/http-status');
const BaseError = require('./baseError');

class BadGateway extends BaseError {
  constructor(message) {
    super(message, HttpStatus.BAD_GATEWAY, ErrorName.BAD_GATEWAY, message);
  }
}

module.exports = BadGateway;
