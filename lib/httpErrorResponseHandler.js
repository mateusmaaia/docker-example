const { INTERNAL_SERVER_ERROR } = require('./httpCodes');

const httpErrorResponseHandler = (message = null, statusCode = INTERNAL_SERVER_ERROR) => ({
  body: { error: statusCode, message },
  statusCode,
});

module.exports = httpErrorResponseHandler;
