const httpFactoryController =  require('../lib/httpFactoryController');
const healthcheck = require('../controllers/healthcheck');

const routes = (router) => {
  router.get('/healthcheck', httpFactoryController(healthcheck));
};

module.exports = routes;
  