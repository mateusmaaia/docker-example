const httpResponseHandler = require('../lib/httpResponseHandler');
const { OK } = require('../lib/httpCodes');

const healthcheck = async (data) => {
  try {
    let time = Date();
    time = time.toString();
    const classroom = data.class ? data.class : "4ECS";
    const message = {
      status: "alive",
      classroom,
      time,
    };

    return httpResponseHandler(message, OK);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = healthcheck;
