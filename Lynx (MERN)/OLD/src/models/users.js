const {Schema, model} = require('mongoose');

const users = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number
  }
})

module.exports = model('Users', users)

















/*
CREATE TABLE Users  
(
	user_id int PRIMARY KEY NOT NULL IDENTITY,  
	login varchar(30) NOT NULL,  
	password varchar(30) NOT NULL,  
	role int NOT NULL
); 


const Sequelize = require("sequelize");
const sequelize = require("../database/db_connect");


const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "user_id"
  },
  login: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: false,
    field: "login"
  },
  password: {
    type: Sequelize.STRING(30),
    allowNull: true,
    field: "password"
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique: false,
    field: "role"
  },
});


module.exports = Users;
*/