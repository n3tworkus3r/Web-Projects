const Sequelize = require("sequelize");
const sequelize = require("../config/databaseConfig");

/*
CREATE TABLE reviews 
(
	id 			serial 	PRIMARY KEY,
	user_id 	integer,
	supplier_id	integer,
	text 		text
);
*/

const Review = sequelize.define("reviews", {
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
  supplier_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    field: "supplier_id",
  },
  text: {
    type: Sequelize.STRING(255),
    field: "text",
  },
});

module.exports = Review;
