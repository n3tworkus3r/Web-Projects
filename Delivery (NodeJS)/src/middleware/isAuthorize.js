const passport = require("../loader/passport");

module.exports = passport.authenticate("jwt", { session: false });
