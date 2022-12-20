const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const cors = require('cors');
const db = require('./db');
const { SECRET } = require('./config');
const mountRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//psql session store
const store = new pgSession({
    pool: db,
});

app.use(session({
    store: store,
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } //30 days
}));

app.use(passport.authenticate('session'));

//brings in routers
mountRoutes(app);

const PORT = process.env.PORT || 80; //either runs environment variable or heroku default port

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});