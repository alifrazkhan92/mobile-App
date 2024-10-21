const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv/config");

const api = process.env.API_URL;

app.use(express.json());
app.use(morgan("tiny"));

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: 1,
    name: "Red Shoes",
    image: "image-url",
  };
  res.send(products);
});

app.post(`${api}/products`, (req, res) => {
  const newProducts = req.body;
  console.log(newProducts);
  res.send(newProducts);
});

app.listen(3000, () => {
  console.log(api);
  console.log("Server is running on http://localhost:3000");
});
