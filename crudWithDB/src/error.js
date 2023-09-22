class ErrorHandler extends Error {
  constructor(statusCode, message, success) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.success = success;
  }
}

const handleError = (err, res) => {
  console.log("Error is:", JSON.stringify(err));
  const { statusCode, message, success } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    success,
  });
};

module.exports = { ErrorHandler, handleError };
