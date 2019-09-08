const { OK } = require('./httpCodes');

const httpResponseHandler = (body = null, statusCode = OK) => ({
  body,
  statusCode,
});

module.exports = httpResponseHandler;
