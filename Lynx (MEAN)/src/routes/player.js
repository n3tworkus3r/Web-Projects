const Router = require('express')
//const Tasks = require('../models/tasks') // Подключение модели 
const router = Router()

router.set('views', './src/views')

///////////////////////////////////////
// ВЫВОД ВСЕХ ЗАДАЧ
///////////////////////////////////////

router.get('/player', async (req,res) => {

    res.status(200)
    res.render('player', {
        title: 'player',
        main: true,
        //tasks // Передача объекта tasks в html файл
    })
})






module.exports = router