const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

module.exports = swaggerUI.setup(swaggerDocument);