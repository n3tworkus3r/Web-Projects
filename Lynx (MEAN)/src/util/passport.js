const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('bearer');
  opts.secretOrKey = 'secretkey';
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);

      User.find({ _id: jwt_payload.data._id })
        .populate('savedSongs')
        .then(user => {
          const userObj = {
            _id: user[0]._id,
            username: user[0].username,
            email: user[0].email,
            playlists: user[0].savedSongs
          };
          return done(null, userObj);
        })
        .catch(() => {
          return done(null, false);
        });
    })
  );
};
