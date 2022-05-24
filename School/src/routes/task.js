const Router = require('express')
const Tasks = require('../models/tasks') // Подключение модели 
const router = Router()

router.set('views', './src/views')

///////////////////////////////////////
// УДАЛЕНИЕ ЗАДАЧИ
///////////////////////////////////////

router.post('/remove', async (req,res) => {
   try{
    await Tasks.deleteOne({
        _id:req.body.id
    })
    res.redirect('/')
   }
   catch(e) {
        console.log(e)
   }
  
})


///////////////////////////////////////
// РЕДАКТИРОВАНИЕ ЗАДАЧИ
///////////////////////////////////////

router.post('/update', async (req,res) => {
    console.log(req.body)

    try{ 
        const {id} = req.body
        delete req.body.id
        task = await Tasks.findByIdAndUpdate(id,req.body)
        res.redirect('/')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router