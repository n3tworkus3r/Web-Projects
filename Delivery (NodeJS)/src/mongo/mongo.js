const mongoose = require('mongoose');
const MongoConfig = require('../config/mongoConfig.json');

async function connect() {
    await mongoose.connect(
        `mongodb://localhost:${MongoConfig.Port}/${MongoConfig.Collection}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = connect();