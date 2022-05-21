const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE user_info 
(  id					serial 				PRIMARY KEY,
  email 				character varying(255),
  address 				text,
  user_id              integer
);
*/

const UserInfo = sequelize.define("user_infos", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
    field: "email",
  },
  address: {
    type: Sequelize.STRING(30),
    allowNull: true,
    field: "address",
  },
  user_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    unique: true,
    field: "user_id",
  },
});

module.exports = UserInfo;
