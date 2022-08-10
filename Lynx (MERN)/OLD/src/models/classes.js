const Sequelize = require("sequelize");
const sequelize = require("../database/db_connect");

/*
CREATE TABLE Classes  
(
	class_id int PRIMARY KEY NOT NULL IDENTITY,  
	name varchar(10) NOT NULL,   
	subject_id int NOT NULL,
	teacher_id int NOT NULL,
	student_quantity int, 
	middle_rate float
);
*/

const Classes = sequelize.define("Classes", {
  class_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "class_id"
  },
  subject_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "subject_id"
  },
  teacher_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "teacher_id"
  },
  student_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "student_quantity"
  },
  middle_rate: {
    type: Sequelize.FLOAT,
    allowNull: true,
    unique: false,
    field: "middle_rate"
  }
})


module.exports = Classes
