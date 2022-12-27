const users = require('./users');
const cart = require('./cart');
const orders = require('./orders');
const products = require('./products');
const auth = require('./auth');

//export takes in a variable, app, which is passed in from the main index.js file.
module.exports = app => {
    app.use('/api/users', users);
    app.use('/api/cart', cart);
    app.use('/api/orders', orders);
    app.use('/api/products', products);
    app.use('/api/', auth);
};