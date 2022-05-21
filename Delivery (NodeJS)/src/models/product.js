const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE products
(
	id 			serial		PRIMARY KEY,
	name 		text
);
*/

const Product = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    field: "name",
  },
});

module.exports = Product;
