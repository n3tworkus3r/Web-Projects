const Sequelize = require("sequelize");
//const MongoLogger = require("./../utils/mongoLogger");

// Скрипт для подключения к БД
module.exports = new Sequelize("DeliveryNode", "postgres", "us3r", {
  host: "localhost",
  dialect: "postgres",

  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
  //logging: (command) => MongoLogger.LogDatabase(command), //  Логирование
});
