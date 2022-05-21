const bodyParser = require("body-parser");

const express = require("express");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;
