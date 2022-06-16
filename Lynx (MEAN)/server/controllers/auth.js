const bcrypt =  require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')



module.exports.login = async function(req,res) {


    try {
        email = req.body.email,
        password =  req.body.password
        const user = await  User.findOne({email: req.body.email})

        if (!user) {
            return res.status(400).json({message: `Пользователь ${email} не найден`})
        }

      
        const validPassword =  bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({message: `Введен неверный пароль`})
        }else {
            return res.status(200).json({message: 'OK!'})
        }
        //const token = generateAccessToken(10)
        //return res.json({token})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Login error'})
    }
    /*

    const candidate = User.findOne({email:req.body.email})


    if (candidate) {
      const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    
      if (passwordResult) {
       const token = jwt.sign({
            email: candidate.email,

       }, '', {expiresIn: 60 * 60})

       res.status(200).json({
        token: token
       })

      } else {
        res.status(401).json({
            message: 'Password not match!'
        })
      }
    
    
    } else {
        res.status(404).json({
            message: 'User not found!'
        })
    }


    /*res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })*/
}


module.exports.register = async function(req,res) {

    const candidate = await User.findOne({email:req.body.email})

    if (candidate) {
        res.status(409).json({
            message: 'User already exists!'
        })
    } else {

        const salt = await bcrypt.genSaltSync(10)
        const password = await req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })

        try{
            await user.save()
            res.status(201).json(user)
        } catch(e){
            console.log('Error user creating!')
        }


    }
    /* email
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(() => console.log('User created'))
    //password*/

}