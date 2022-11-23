const Router = require('express-promise-router');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../db');

passport.use(new LocalStrategy(async(username, password, done) => {
        const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [username]);
        if(!rows[0]) {
            return done(null, false, {message: `Incorrect email or password.`});
        }
        let match = await bcrypt.compare(password, rows[0].password);
        if (!match) {
            return done(null,false, {message: 'Incorrect email or password.'});
        }
        const user = rows[0];
        return done(null, user);
    }));

passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { id: user.id, email: user.email });
    });
});

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});

const router = new Router();

//export router for use in routes/index
module.exports = router;

router.post('/login/password', passport.authenticate('local', {failureMessage: true }), (req, res) => {
    res.send(req.user);
});

router.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.get('/signup', (req, res, next) => {
    res.send('user added.');
});

router.post('/signup', async(req, res) => {
        const { email, password, first_name, last_name } = req.body;
        const { rows } = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
        if (rows[0] === undefined) {
            const salt = await bcrypt.genSalt(10); //should be env variable?
            const hashedPassword =  await bcrypt.hash(password, salt);
            const newUser = await db.query(`INSERT INTO users (email, password, first_name, last_name)
                                             VALUES ($1, $2, $3, $4)`,
                            [email, hashedPassword, first_name, last_name]);
            res.send (200); //may need to be changed.
        }  else {
            res.send('User already Exists!');
        }});