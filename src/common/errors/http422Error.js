import BaseError from './baseError';
import HttpStatus from '@common/http-status';
import { ErrorName } from '@common/constants';
class RequestValidationError extends BaseError {
  constructor(message, errors) {
    super(
      message,
      HttpStatus.UNPROCESSABLE_ENTITY,
      ErrorName.BAD_REQUEST,
      message,
      errors,
    );
  }
}
export default RequestValidationError;
