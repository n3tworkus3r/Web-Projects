
const {Schema, model} = require('mongoose');
const { stringify } = require('uuid');

const tasks = new Schema({
  text: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  chapter: {
    type: String
  },
  img: {
    type: String
  },
  year: {
    type: String,
  },
  complexity: {
    type: Number
  }
})

module.exports = model('Tasks', tasks)








/////////////////////////////////////////////
////// МЕТОДЫ ДЛЯ РАБОТЫ С TASKS.JSON ///////
/////////////////////////////////////////////
/*
class Tasks {
  constructor(text,solution,img,year,chapter,complexity){
    this.id = uuid.v4(),
    this.text = text,
    this.solution = solution,
    this.img = img,
    this.year = year,
    this.chapter = chapter,
    this.complexity = complexity
  }

  // Функция, преобразующая данные из html в формат JSON
  to_json() {
    return {
      id: this.id,
      text: this.text,
      solution: this.solution,
      img: this.img,
      year: this.year,
      complexity: this.complexity
    }
  }

  static async update() {
    const tasks = await Tasks.get_all()
    const index = tasks.findIndex( t => t.id === task.id)
    tasks[index] = task

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'database', 'tasks.json'),
        JSON.stringify(tasks),
        (err) => {
          if(err) {
            reject(err)
          }else{
            resolve()
          }
        }
      )
    })
  }

  async save() { // Функция, сохраняющая в файл tasks.json добавленную задачу
    const tasks = await Tasks.get_all()
    //console.log('Tasks', tasks)
    tasks.push(this.to_json())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'database', 'tasks.json'),
        JSON.stringify(tasks),
        (err) => {
          if(err) {
            reject(err)
          }else{
            resolve()
          }
        }
      )
    })
  }

  // Функция, получающая задачи из файла
  static get_all() {
    return new Promise((resolve,reject) => {
      fs.readFile(
        path.join(__dirname,'..','database','tasks.json'),
        'utf-8',
        (err,content) => {
          if (err) { 
            reject(err)
          }
          else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }

  static async get_by_id(id) {
    const tasks = await Tasks.get_all()
    return tasks.find(t => t.id === id)
  }
}
*/
/////////////////////////////////////////////
//////////// MSSQL SERVER MODEL /////////////
/////////////////////////////////////////////
//const Sequelize = require('sequelize');
//const sequelize = require('../database/db_connect');
//const uuid = require('uuid');
//const path = require('path');

/*
CREATE TABLE Tasks  
(
	task_id int PRIMARY KEY NOT NULL IDENTITY,  
	text varchar(255) NOT NULL,
	solution varchar(255) NOT NULL,
	img varchar(100),
	complexity float
);
*/
/*
const Tasks = sequelize.define("Tasks", {
  task_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "task_id"
  },
  text: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: false,
    field: "text"
  },
  solution: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: false,
    field: "solution"
  },
  chapter: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "chapter"
  },
  img: {
    type: Sequelize.STRING(100),
    allowNull: true,
    unique: false,
    field: "img"
  },
  complexity: {
    type: Sequelize.FLOAT,
    allowNull: true,
    unique: false,
    field: "complexity"
  }
})

// ЭКСПОРТ МОДЕЛИ MSSQL
module.exports = Tasks
*/
/////////////////////////////////////////////
/////////////////////////////////////////////

