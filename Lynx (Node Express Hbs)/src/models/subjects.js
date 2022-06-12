const Sequelize = require("sequelize");
const sequelize = require("../database/db_connect");

/*
CREATE TABLE Subjects  
(
	subject_id int PRIMARY KEY NOT NULL IDENTITY,  
	name varchar(15) NOT NULL,   
	task_id int NOT NULL,
	task_quantity int
);
*/

const Subjects = sequelize.define("Subjects", {
  subject_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "subject_id"
  },
  name: {
    type: Sequelize.STRING(15),
    allowNull: false,
    unique: false,
    field: "name"
  },
  task_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "task_id"
  },
  task_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    autoIncrement: true,
    field: "task_quantity"
  }
});


module.exports = Subjects;
