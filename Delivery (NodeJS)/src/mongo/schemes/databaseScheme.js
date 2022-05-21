const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const databaseScheme = new Schema({
    date: Date,
    command: String
});

module.exports = databaseScheme;