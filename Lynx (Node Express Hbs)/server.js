////////// USED MODULES //////////
const mongoose = require('mongoose') // пакет взаимодействия с MongoDB
const express_handlebars = require('express-handlebars')
const express = require('express')
const hbs_v_4_5_3 = require('handlebars')
const player_routes =  require('./src/routes/player')
const library_routes = require('./src/routes/library')
const login_routes = require('./src/routes/login')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const body_parser = require('body-parser');
//const tasks = require('./src/models/tasks')
//const sequelize = require('./src/database/db_connect')
//const fs = require('fs')
//const path = require('path') // enable for express routing
//const http = require('http')
//////////////////////////////////

//////// SERVER INSTANCES ////////
const app = express()
//const server = http.createServer((req,res) => { })
/////////////////////////////////

////// HANDLEBARS SETTING ///////
//const hbs = express_handlebars.create({
//    defaultLayout: 'main',
//    extname: 'hbs'
//})
/////////////////////////////////

/// SERVER INSTANCE CONFIGURE ///
//app.engine('hbs', hbs.engine)

app.engine('hbs', express_handlebars.engine({
    handlebars: allowInsecurePrototypeAccess(hbs_v_4_5_3),
    defaultLayout: 'main',
    extname: 'hbs'
}));


app.set('view engine', 'hbs')
//////////////////////////////////

//// INIT PUBLIC DIRECTORIES  ////
app.use(express.static('src/css'))
app.use(express.static('src/images'))
app.use(express.static('src/js'))

app.use(express.urlencoded({extended: true}))
app.use(body_parser.urlencoded({ extended: false }));
/////////////////////////////////

//////// EXPRESS ROUTING ////////
app.use('/',player_routes)
app.use('/',library_routes)
app.use('/',login_routes)
/////////////////////////////////

///// CONNECTION TO SERVER //////
const PORT = process.env.PORT || 4000

async function start() {
    try {
        //await sequelize.sync( /*{force: true}*/)
        const url = 'mongodb://127.0.0.1:27017/School'
        await mongoose.connect(url, {useNewUrlParser: true}) // Подключение к СУБД
        // Запуск сервера (express)
        app.listen(PORT,() => {
            console.log(`Server is running on port ${PORT}`)
        })
    }
    catch(err) {
        console.log(err)
    }  
}
/////////////////////////////////

start()















////// OLD EXPRESS ROUTING //////
/*
app.get('/',(req,res) => {
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true
    })
})

app.get('/',(req,res) => {
    res.status(200)
    res.render('index', {
        title: 'Main',
        main: true
    })
})

app.get('/subjects',(req,res) => {
    res.status(200)
    res.render('subjects', {
        title: 'Subjects',
        subjects: true
    })
})
*/
/////////////////////////////////

///////// HTTP ROUTING //////////
/*    switch(req.method) {
    case 'GET':
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        
        // Выбор страницы для загрузки
        switch(req.url) {
            case '/': // Main page
                fs.readFile(path.join(__dirname,'src/pages','index.html'), 'utf-8',
                (err,content) => {
                    if(err) { throw err }
                    res.end(content)
                })
            break
            case '/about': // About page
                fs.readFile(path.join(__dirname,'src/pages','about.html'), 'utf-8',
                (err,content) => {
                    if(err) { throw err }
                    res.end(content)
                })
            break
        }
    break
    case 'POST':
        //
        //
        //
    break
}
*/
/////////////////////////////////

////////// DB CONNECT ///////////
/*
const PORT = process.env.PORT || 3000  

async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Запуск сервера (express)
        app.listen(PORT,() => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
start()*/
/////////////////////////////////