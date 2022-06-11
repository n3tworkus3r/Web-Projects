const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SongSchema = new Schema({
  spotifyId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  preview: {
    type: String
  },
  img: {
    type: String
  }
});

const Song = (module.exports = mongoose.model('Song', SongSchema));

// module.exports.saveSong = function(songObj) {
//   return new Promise((resolve, reject) => {
//     songObj
//       .save()
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// };
