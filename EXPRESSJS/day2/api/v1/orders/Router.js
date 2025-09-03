const express = require("express");

const ordersRouter = express.Router();

ordersRouter.get("/",(req,res)=>{
    res.status(200).send("(GET) Dummy end points created");
})

ordersRouter.post("/",(req,res)=>{
    res.status(200).send("(POST) Dummy end points created");
})

ordersRouter.patch("/",(req,res)=>{
    res.status(200).send("(PATCH) Dummy end points created");
})

ordersRouter.delete("/",(req,res)=>{
    res.status(200).send("(delete) Dummy end points created");
})

module.exports = {
    ordersRouter
}