const express = require("express");
const { ordersRouter } = require("./orders/Router");
const { productRoutes } = require("./products/Router");

const apiRouter = express.Router();

apiRouter.use((req,res, next)=>{
    console.log("---> API router invoked");
    next();
}) // router level middleware

apiRouter.use("/orders",ordersRouter)

apiRouter.use("/products",productRoutes)

module.exports = {
    apiRouter
}