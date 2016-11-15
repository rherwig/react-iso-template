import passport from 'passport';
import Auth0Strategy from 'passport-auth0';

const strategy = new Auth0Strategy({
    domain:       'rherwig.eu.auth0.com',
    clientID:     'eb8TqCmtrHzHWDtzQBMpq59jPO25KGBW',
    clientSecret: 'vmyuAKhjg_lVN3ztpwQ22yVSo_G9b8ZQ_mlXTIUzk1cPUvIzIy_SiHEN94HcqODt',
    callbackURL:  '/callback'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
});

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;