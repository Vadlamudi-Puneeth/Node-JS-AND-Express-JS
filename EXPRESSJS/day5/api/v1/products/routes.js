const express = require("express");
const { ProductController, getProductController, updateProductController, deleteProductController, listProductController} = require("./controller");
const { createProductValidator, updateProductValidator } = require("./dto");
const productRouter = express.Router();

// console.log("checking for the validation and proceed further");

productRouter.get("/", getProductController );
productRouter.post("/", ProductController);
productRouter.patch("/:productId", updateProductValidator, updateProductController);
productRouter.delete("/:productId", deleteProductController);
productRouter.get("/list", listProductController);

module.exports = {productRouter};
