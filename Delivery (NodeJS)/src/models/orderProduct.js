const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE order_products
(
	id 				serial 		PRIMARY KEY,
	product_id 		integer,
  order_id 		integer,
);
*/

const OrderProduct = sequelize.define("order_products", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  product_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    field: "product_id",
  },
  order_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    field: "order_id",
  },
});

module.exports = OrderProduct;
