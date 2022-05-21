const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE suppliers
(	id 			serial		 PRIMARY KEY,
	name 		text,
	rate 		float,
	description text NULL,
  user_id     integer
);
*/

const Supplier = sequelize.define("suppliers", {
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
  rate: {
    type: Sequelize.FLOAT,
    allowNull: true,
    field: "rate",
  },
  description: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "description",
  },
  user_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true,
    field: "user_id",
  },
});

module.exports = Supplier;
