const Router = require('express')
//const Users = require('../models/users')
//const User_infos = require('../models/user_infos')
const router = Router()

router.set('views', './src/views')

router.get('/login', async (req,res) => {
    
    res.status(200)
    res.render('login', {
        title: 'LogIn',
        //main: true
    })
})

module.exports = router