const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

//export router to be mounted in routes/index.js
module.exports = router;

router.get('/', async(req, res) => {
    const { id } = req.body; //gets user id
    const { rows } = await db.query(`SELECT * FROM orders WHERE user_id = $1`, [id]);
    res.send(rows);
});

router.post('/', async(req, res) => {
    const { user_id, total } = req.body;
    const time = new Date.toISOstring();
    const { rows } = await db.query(`INSERT INTO orders (user_id, total, status, created) 
        VALUES $1, $2, 'Shipped', $3`, [user_id, total, time]);
    res.send(rows);
})

router.post('/:orderItems', async(req, res) => {
    const { id, productId, quantity} = req.body;
    const { rows } = await db.query(`INSERT INTO order_item (order_id, product_id, quantity)
        VALUES $1, $2, $3`, [id, productId, quantity]);
    res.send(rows);
})

router.get('/:orderId', async(req, res) => {
    const { orderId }  = req.params
    const { user_id } = req.body;
    const { rows } = await db.query(`WITH temp_table AS (
        SELECT o.*, o_i.*
        FROM "orders" o JOIN "order_item" o_i ON o_i.order_id = o.id
        WHERE o.user_id = $1 AND o.id = $2
        )

    SELECT temp_table.*, p.name AS name, p.price AS price, p.image AS image
    FROM temp_table JOIN products ON temp_table.product_id = products.id`, [user_id, orderId]);
    res.send(rows[0]);
});