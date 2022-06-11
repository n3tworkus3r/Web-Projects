const express = require('express');
const router = express.Router();
var keys = require('../config/keys');
var SpotifyApi = require('node-spotify-api');
var spotify = new SpotifyApi(keys);

router.post('/search', (req, res) => {
  const { search } = req.body;
  const params = { type: 'artist', query: search, limit: 10 };

  if (search) {
    spotify.search(params, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      res.json(data.artists.items);
    });
  }
});

router.post('/artist', (req, res) => {
  const { artistId } = req.body;

  spotify
    .request(`https://api.spotify.com/v1/artists/${artistId}`)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post('/albums', (req, res) => {
  const { artistId } = req.body;

  if (artistId) {
    spotify
      .request(`https://api.spotify.com/v1/artists/${artistId}/albums`)
      .then(data => {
        res.json(data.items);
      })
      .catch(err => {
        console.log(err);
      });
  }
});

router.post('/album', (req, res) => {
  const { albumId } = req.body;

  if (albumId) {
    spotify
      .request(`https://api.spotify.com/v1/albums/${albumId}`)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json('ERROR');
      });
  }
});

module.exports = router;
