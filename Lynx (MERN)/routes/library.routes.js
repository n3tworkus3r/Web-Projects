const Router = require('express')
const router = Router()
const Tracks = require('../models/tracks')


/////////////////////////////////////////
//////// CONTENT GENERATION
/////////////////////////////////////////

router.get('/library', async (req,res) => {
 
})



/////////////////////////////////////////
//////// TRACK EXECUTION
/////////////////////////////////////////

router.get('/library:id', async (req,res) => {
  //const task = await Tracks.findById(req.params.id)
  res.status(201).json({message : 'Ok!'})
})



module.exports = router