const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user/user.model');
//jwt option 
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

//inititializing passport
const initializePassport = (passport) => {
  passport.use(
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
      try {
        
        const user = await User.findOne({ _id: jwtPayload.id });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );
}

module.exports = { initializePassport }