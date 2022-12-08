const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

//export router to be mounted in routes/index.js
module.exports = router;

router.get('/', async(req, res) => {
    const id = req.query["id"]; //gets user id
    const { rows } = await db.query(`SELECT * FROM orders WHERE user_id = $1`, [id]);
    res.send(rows);
});

router.post('/', async(req, res) => {
    const { user_id, total } = req.body;
    const time = new Date().toISOString();
    const { rows } = await db.query(`INSERT INTO orders (user_id, total, status, created) 
        VALUES ($1, $2, 'Shipped', $3) RETURNING id`, [user_id, total, time]);
    res.send(rows);
})

router.post('/orderItems', async(req, res) => {
    const { orderId, cartItems } = req.body;
    for (const item of cartItems) {
        const {product, quantity} = item;
        const { rows } = await db.query(`INSERT INTO order_item (order_id, product_id, quantity)
        VALUES ($1, $2, $3)`, [orderId, product.id, quantity]);
    };
})



router.get('/details', async(req, res) => {
    const { order_id } = req.query["order_id"];
    const { user_id } = req.query["user_id"];
    const { rows } = await db.query(`WITH temp_table AS (
        SELECT o.*, o_i.*
        FROM "orders" o JOIN "order_item" o_i ON o_i.order_id = o.id
        WHERE o.user_id = $1 AND o.id = $2
        )`

   /* SELECT temp_table.*, p.name AS name, p.price AS price, p.image AS image
    FROM temp_table JOIN products p ON temp_table.product_id = p.id`*/, [user_id, order_id]);
    res.send(rows);
});