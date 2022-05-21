const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE users
(
  id 		serial 				    PRIMARY KEY,
  login 	character varying(20) 	UNIQUE NOT NULL,
  password	character varying(30)	NOT NULL,
  role 		smallint
);
*/

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  login: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
    field: "login",
  },
  password: {
    type: Sequelize.STRING(30),
    allowNull: true,
    field: "password",
  },
  role: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    unique: false,
    field: "role",
  },
});


module.exports = User;
