const express = require("express");
const data = require('./data');

const app = express();
const PORT = 5000;

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});