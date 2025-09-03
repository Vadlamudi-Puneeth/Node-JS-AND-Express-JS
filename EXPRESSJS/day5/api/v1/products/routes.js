const express = require("express");
const { ProductController, getProductController} = require("./controller");
const { createProductValidator } = require("./dto");
const productRouter = express.Router();

console.log("checking for the validation and proceed further");

productRouter.get("/", getProductController );
productRouter.post("/", createProductValidator, ProductController);

module.exports = {productRouter};
