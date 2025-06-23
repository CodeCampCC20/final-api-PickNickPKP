const createError = (statusCode, message, field) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  err.field = field || null;

  throw err;
};

export default createError;
