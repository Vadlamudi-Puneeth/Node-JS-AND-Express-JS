const express = require("express");
const morgan = require("morgan");
const {apiRouter} = require("./api/v1/routes");

const app = express();

app.use(morgan("dev")); // app level middleware

app.use(express.json()); // please read the file in body

app.get("/",(req, res)=>{
    res.status(200).json({
        isSucess: true,
        message: "Server is Running fine"
    })
})

// middleware "/api/v1"
app.use("/api/v1", apiRouter);

app.listen(3333, "localhost", ()=>{
    console.log("============= Server Started =============");
})
