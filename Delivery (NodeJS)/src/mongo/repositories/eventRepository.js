const mongoose = require('mongoose');
const eventScheme = require("../schemes/eventScheme");

const Event = mongoose.model("Event", eventScheme);

module.exports = Event;