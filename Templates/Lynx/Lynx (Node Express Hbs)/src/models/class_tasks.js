const Sequelize = require("sequelize");
const sequelize = require("../database/db_connect");

/*
CREATE TABLE Class_tasks  
(
	class_task_id int PRIMARY KEY NOT NULL IDENTITY,  
	class_id int NOT NULL,
	task_id int NOT NULL
);
*/

const Class_tasks = sequelize.define("Class_tasks", {
  class_subject_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "class_subject_id"
  },
  class_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    field: "class_id"
  },
  task_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    field: "task_id"
  }
});


module.exports = Class_tasks;
