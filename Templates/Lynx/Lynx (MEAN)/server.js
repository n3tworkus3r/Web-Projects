const express = require('express')
const path = require('path')
const mongoose = require('mongoose')


const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/LynxDB', (err) => {
  console.log('Connected to the database!')
  if (err) {
   
    console.log(err)
  } else { 
    app.use(express.static(path.join(__dirname, 'dist')))

   
    app.use('/', function (req, res, next) {
      
      console.log('Time:', Date.now())
      next()
    })
    
    app.use(express.json())
    //app.use('/api/example', require('./server/routes/example-route'))
    app.use('/', require('./server/routes/auth'))
    

    app.get('/', (req, res) => {
      res.send({
        message: 'Endpoint not found',
        type: 'error'
      })
    })

    app.get('*', (req, res) => {
      console.log(req.url)
      res.sendFile(path.join(__dirname, 'dist/index.html'))
    })

    const PORT = 3000
    app.listen(PORT, () => console.log(`Application started successfully on port: ${PORT}!`))

  }
})
