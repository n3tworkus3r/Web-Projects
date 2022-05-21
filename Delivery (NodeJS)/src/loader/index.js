const Express = require("./express");
const Routing = require("../routes/index");
// const ErrorHandler = require("../middleware/errorHandler");
const Swagger = require("./swagger");

const swaggerUI = require("swagger-ui-express");
const express = require("express");
const router = express.Router();

router.use("/api-docs", swaggerUI.serve, Swagger);

router.use(Express);

router.use(Routing);
// router.use(ErrorHandler);

module.exports = router;
