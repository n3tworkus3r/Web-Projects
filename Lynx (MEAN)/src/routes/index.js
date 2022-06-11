const Router = require('express')
const Tasks = require('../models/tasks') // Подключение модели 
const router = Router()

router.set('views', './src/views')

///////////////////////////////////////
// ВЫВОД ВСЕХ ЗАДАЧ
///////////////////////////////////////

router.get('/', async (req,res) => {
    //const tasks = await Tasks.get_all() // Выборка всех эл-в из tasks.json
    const tasks = await Tasks.find() // Выборка всех элементов из БД
    res.status(200)
    res.render('index', {
        title: 'Главная',
        main: true,
        tasks // Передача объекта tasks в html файл
    })
    //res.sendFile(path.join(__dirname,'src/pages','index.html'))
})

///////////////////////////////////////
// ПЕРЕХОД К ПРОФИЛЮ
///////////////////////////////////////

router.get('/profile', async (req,res) => {
    res.render('profile', {  
        title: `Профиль`,
        profile: true
    })
})

///////////////////////////////////////
// ПЕРЕХОД К АВТОРИЗАЦИИ
///////////////////////////////////////

router.get('/login', async (req,res) => {
    res.render('login', {  
        title: `Войти`,
        login: true
    })
})


///////////////////////////////////////
// ПЕРЕХОД К ЗАДАЧЕ
///////////////////////////////////////

router.get('/:id', async (req,res) => {
    const task = await Tasks.findById(req.params.id)
    res.render('task', {  
        title: `Задача`,
        task,
        t: true
    })
})






/*
router.post('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    const task = await Tasks.get_by_id(req.params.id) 

    res.render('task-edit'), {
        title: 'Редактировать задачу',
        task
    }
})
*/



///////////////////////////////////////
// СОЗДАНИЕ ЗАДАЧИ С СОХРАНЕНИЕМ В БД
///////////////////////////////////////

router.post('/', async (req,res) => {
    console.log(req.body)
    //const task = new Tasks(req.body.text, req.body.solution, req.body.chapter, req.body.img, req.body.complexity) // Передача объекта из tasks.json
    const task = new Tasks({ // Передача объекта из MongoDB
        text: req.body.text, 
        solution: req.body.solution,
        chapter: req.body.chapter,
        img: req.body.img,
        year: req.body.year,
        complexity: req.body.complexity
    })

    try{ // Сохранение задачи в БД
        await task.save()
        res.redirect('/')
    } catch(err) {
        console.log(err)
    }
})

///////////////////////////////
// СОЗДАНИЕ ЗАДАЧИ (MSSQL)
///////////////////////////////
/*
router.post('/', async (req,res) => {
    try {
        const task = await Tasks.create({
            text: req.body.text,
            solution: req.body.solution,
            chapter: req.body.chapter,
            img: req.body.img,
            complexity: req.body.complexity,
        })
        res.status(201).json({task})
    } 
    catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
    //const task = new Tasks(req.body.text, req.body.solution, req.body.img, req.body.complexity)
    //await task.save()
    res.redirect('/')
})

*/
///////////////////////////////

module.exports = router