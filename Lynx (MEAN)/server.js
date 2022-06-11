require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/user-routes');
const api = require('./routes/api-routes');

const app = express();
const PORT = process.env.PORT || 8080;

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ngspotify';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./util/passport')(passport);

app.use('/users', users);
app.use('/api', api);

// Index Route
// app.get('/', (req, res) => {
//   res.send('invaild endpoint');
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
