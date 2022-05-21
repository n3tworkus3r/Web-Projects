const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE products_suppliers
(	
  id 			    serial		 PRIMARY KEY,
  product_id      integer
  supplier_id     integer
	price 		    float,
);
*/

const ProductSupplier = sequelize.define("product_suppliers", {
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
  supplier_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    field: "supplier_id",
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    field: "price",
  },
});

module.exports = ProductSupplier;
