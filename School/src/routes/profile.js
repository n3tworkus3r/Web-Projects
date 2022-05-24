const Router = require('express')
const Tasks = require('../models/tasks') // Подключение модели 
//const Users = require('../models/users')
//const User_infos = require('../models/user_infos')
const router = Router()

router.set('views', './src/views')

router.get('/profile', async (req,res) => {
    
    res.status(200)
    res.render('profile', {
        title: 'Профиль',
        main: true
    })
})


module.exports = router