const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const productSchema = new Schema({
    title:{
        type: String,
        trim: true,
        unique: true,
    },
    price:{
        type: Number,
        min: 0
    },
    quantity:{
        type: Number,
        default: 1,
    },
    description:{
        type: String,
        trim: true,
    }
},{
    timestamps: true,
    versionKey: false
});

const productModel = model("product", productSchema);

module.exports = {
    productModel
}
