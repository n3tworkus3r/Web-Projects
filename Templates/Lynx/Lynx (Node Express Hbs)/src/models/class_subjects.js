const Sequelize = require("sequelize");
const sequelize = require("../database/db_connect");

/*
CREATE TABLE Class_subjects  
(
	class_subject_id int PRIMARY KEY NOT NULL IDENTITY,
	class_id int NOT NULL,
	subject_id int NOT NULL
);
*/

const Class_subjects = sequelize.define("Class_subjects", {
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
  subject_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    field: "subject_id"
  }
});


module.exports = Class_subjects;
