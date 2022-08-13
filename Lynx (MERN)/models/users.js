const {Schema, model} = require('mongoose');

const users = new Schema({
  email: {
    type: String,
    //required: true
  },
  password: {
    type: String,
    //required: true
  },
  //role: {
  //  type: Number
  //}
})

module.exports = model('Users', users)







