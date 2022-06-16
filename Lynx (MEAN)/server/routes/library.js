const Router = require('express')
//const Users = require('../models/users')
//const User_infos = require('../models/user_infos')
const router = Router()


router.get('/library', async (req,res) => {
    
    res.status(200)
    res.render('library', {
        title: 'Войти'//,
        //main: true
    })
})

module.exports = router