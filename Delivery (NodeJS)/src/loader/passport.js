const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const AuthConfig = require("../config/authConfig.json");
const UserRepository = require("../repository/userRepository");

let options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: AuthConfig.SecretKey,
};

passport.use(
  new JWTStrategy(options, async function (jwt_payload, done) {
    try {
      const user = await UserRepository.getById(jwt_payload.userId);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
