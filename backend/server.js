const express = require("express");
const data = require('./data');

const app = express();
const PORT = 5000;

app.get("api/products/:id", (req, res) => {
    const { id } = req.params;
    const product = data.products.find(product => product.id === id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({msg: "Product Not Found."});
    }
})


app.get("/api/products", (req, res) => {
    res.send(data.products);
});


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});