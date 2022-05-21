const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const errorScheme = new Schema({
    date: Date,
    text: String,
    code: Number,
    route: String,
});

module.exports = errorScheme;