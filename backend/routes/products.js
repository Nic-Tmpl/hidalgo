const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

//export router to be mounted in routes/index.js
module.exports = router;

router.get('/', async(req, res) => {
    const { rows } = await db.query(`SELECT p.*, c.name as category, c.id as category_id 
                                    FROM "products" p JOIN "categories" c ON p.category = c.id`);
    res.send(rows);
});

router.post('/', async(req, res) => {
    const { name, image, description, category, price } = req.body;
    const { rows } = await db.query(`INSERT INTO products(name, image, description, category, price, rating, numreviews)
    VALUES( $1, $2, $3, $4, $5, 0, 0)`, [name, image, description, category, price]);
    res.send(rows);
})

router.put('/', async(req, res) => {
    const { id, name, image, description, category, price } = req.body;
    const { rows } = await db.query(`UPDATE products SET
                                    name = $1,
                                    image = $2, 
                                    description = $3,
                                    category = $4,
                                    price = $5 
                                    WHERE id = $6`,
            [name, image, description, category, price, id]);
    res.send(rows);
})

router.delete('/', async(req, res) => {
    const { id } = req.body;
    const { rows } = await db.query(`DELETE FROM products WHERE id = $1`, [id]);
    res.send(rows);
})

router.get('/categories', async(req, res) => {
    const { rows } = await db.query('SELECT * FROM categories');
    res.send(rows);
});

router.get('/categories/:category', async(req, res) => {
    const { category } = req.params;
    const { rows } = await db.query(`SELECT c.id, c.name AS category, p.* 
                                    FROM "categories" c JOIN "products" p ON c.id = p.category 
                                    WHERE c.id = $1`, [category]);
    res.send(rows);
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const { rows } = await db.query(`SELECT p.*, c.name AS category 
                                    FROM "products" p JOIN "categories" c ON p.category = c.id 
                                    WHERE p.id = $1`, [id]);
    res.send(rows[0]);
});
