export function success(message, data) {
  const response = {
    success: true,
    message: message,
    result: '' ,
  };
  response.result = data ? { data } : data;
  return response;
}

export const failure = (message, error = {}) => {
  return {
    success: false,
    message: message,
    errors: error,
  };
};
