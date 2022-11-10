const express = require("express");
const data = require('./data');

const app = express();
const PORT = 5000;

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const intId = parseInt(id);
    const product = data.products.find(product => product.id == intId);
    if (product) {
        res.send(product);
    } else {
        console.log(product)
        console.log(intId);
        res.status(404).send({msg: "Product Not Found."});
    }
})


app.get("/api/products", (req, res) => {
    res.send(data.products);
});


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});