const mongoose = require('mongoose');
const errorScheme = require("../schemes/errorScheme");

const Error = mongoose.model("Error", errorScheme);

module.exports = Error;