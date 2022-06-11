const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // stores an array of saved songs for each user
  savedSongs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Song'
    }
  ]
});

const User = (module.exports = mongoose.model('User', UserSchema));

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByEmail = function(email, callback) {
  const query = { email };
  User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

module.exports.saveSongToUser = function(songId) {};
