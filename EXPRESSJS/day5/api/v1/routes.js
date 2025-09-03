const express = require("express");
const { productRouter } = require("./products/routes");
const apiRouter = express.Router();

console.log("Inside apiRouter");
apiRouter.use("/products", productRouter);

module.exports = {apiRouter};
