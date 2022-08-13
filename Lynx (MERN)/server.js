////////// USED MODULES //////////
const mongoose = require('mongoose') // пакет взаимодействия с MongoDB
const express = require('express')
const config = require('config')

//////// SERVER INSTANCES ////////
const app = express()

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
/////////////////////////////////

///// CONNECTION TO SERVER //////
const PORT = config.get('port')

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


