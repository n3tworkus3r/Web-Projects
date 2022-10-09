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
        return res.status(400).json({message: 'Login error'})
    }
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
            return res.status(201).json(user)
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