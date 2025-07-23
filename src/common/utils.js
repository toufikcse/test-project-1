class UtilsHandler {
  customValidationError(message, param, location) {
    return [
      {
        value: '',
        msg: message,
        param: param,
        location: location,
      },
    ];
  }
}

export default new UtilsHandler();
