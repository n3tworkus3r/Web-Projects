const mongoose = require('mongoose');
const databaseScheme = require("../schemes/databaseScheme");

const Database = mongoose.model("Database", databaseScheme);

module.exports = Database;