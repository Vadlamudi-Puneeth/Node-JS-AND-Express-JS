const express = require("express");
const { createProductController, readProductController, editController, deleteController } = require("./controller");
const { validateProductCreation } = require("./dto");

const productRoutes = express.Router();

productRoutes.get("/", readProductController);

productRoutes.post("/", validateProductCreation ,createProductController); //middleware chaining

productRoutes.patch("/:productId", editController ); //middleware chaining

productRoutes.delete("/:productId", deleteController); //middleware chaining

module.exports = {
    productRoutes
}