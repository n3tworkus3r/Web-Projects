const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Song = require('../models/songs');

// Registers a user
router.post('/register', (req, res, next) => {
  // sets up the data
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  // attempts to create the user
  User.addUser(newUser, (err, user) => {
    // sends err if there is one
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      // creates a token to send back to the client
      const token = jwt.sign({ data: user }, 'secretkey', {
        expiresIn: 604800 // 1 week
      });

      res.json({
        success: true,
        msg: 'User registered',
        token,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email
        }
      });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: user }, 'secretkey', {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token,
          user: {
            _id: user._id,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});

// Profile
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    // console.log('req.user', req.user);
    res.json(req.user);
  }
);

router.delete('/delete-song/:userId/:songId', (req, res) => {
  console.log(req.params);
  User.update(
    { _id: req.params.userId },
    { $pull: { savedSongs: { $in: [req.params.songId] } } }
  )
    .then(result => {
      res.json({ success: 'Song removed' });
    })
    .catch(err => {
      res.json({ error: 'Failed to remove song' });
    });
});

//TODO: refactor to Song.update with an upsert property. This will reduce a ton of code

router.post('/save', (req, res) => {
  const { userId, song } = req.body;
  // const SongToSave = new Song(song);

  // checks if the song has been saved by anyone or not
  // the Song collection stores 1 song per spotifyId, saved by anyone
  Song.find({ spotifyId: song.spotifyId })
    .then(result => {
      if (result.length) {
        // adds the objectId to the user songsArray to associate songs to users
        User.update(
          { _id: userId },
          { $addToSet: { savedSongs: result[0]._id } },
          { new: true }
        )
          // if nModifed is 1, then the song was added to the user. if it was 0, then the song was already saved to the user
          .then(savedRes => {
            if (savedRes.nModified === 1) res.json({ success: 'Song saved' });
            else res.json({ success: 'Song already saved' });
          })
          // error handling if unable to save
          .catch(err => {
            console.log('user-routes 102:', error);
            res.json({ error: 'An error occured' });
          });
      } else {
        // if the song is not saved, then
        Song.create(song)
          .then(result => {
            User.update(
              { _id: userId },
              { $addToSet: { savedSongs: result._id } },
              { new: true }
            )
              .then(savedRes => {
                if (savedRes.nModified === 1)
                  res.json({ success: 'Song saved' });
                else res.json({ success: 'Song already saved' });
              })
              .catch(err => {
                console.log('user-routes 116:', err);
                res.json({ error: 'An error occured' });
              });
          })
          .catch(err => {
            console.log('user-routes 120:', err);
            res.json({ error: 'An error occured' });
          });
      }
    })
    .catch(err => {
      console.log('user-routes 127:', err);
      res.json({ error: 'An error occured' });
    });
});

module.exports = router;
