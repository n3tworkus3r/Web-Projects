const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE orders
(
	id 				serial 		PRIMARY KEY,
	user_id 		integer,
	status 			character varying(30)
);
*/

const Order = sequelize.define("orders", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  user_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    field: "user_id",
  },
  status: {
    type: Sequelize.STRING(30),
    allowNull: false,
    field: "status",
  },
});

module.exports = Order;
