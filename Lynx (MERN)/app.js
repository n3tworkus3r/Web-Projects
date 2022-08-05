////////// USED MODULES //////////
const mongoose = require('mongoose') // пакет взаимодействия с MongoDB
const express = require('express')
const config = require('config')
const body_parser = require('body-parser');


//////// SERVER INSTANCES ////////
const app = express()

app.use('/api/auth', require('./routes/auth.routes'))
/////////////////////////////////

///// CONNECTION TO SERVER //////
const PORT = process.env.PORT || 4000

async function start() {
    try {
        const url = 'mongodb://127.0.0.1:27017/LynxDB'
        await mongoose.connect(url, {useNewUrlParser: true}) // Подключение к СУБД
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


