const { productModel } = require("../../../models/productSchema");

const ProductController = async(req, res) =>{

    console.log("------------ Inside product controller ----------------")
    try{
        const body = req.body;
        const newProduct = await productModel.create(body);

        res.status(201).json({
            isSuccess: true,
            message: "product created successfully",
            data: {product: newProduct}
        })

    }catch(err){
        console.log(err.code);
        console.log(err.name);
        if(err.name == "ValidationError" || err.code == 11000){
            return res.status(400).json({
                isSuccess: false,
                message: err.message
            })
        }

        res.status(500).json({
            isSuccess: false,
            message: "Error in create product controller"
        })
    }

}

const getProductController = async(req, res) =>{
    const data = await productModel.find();

    return res.status(200).json({
        isSuccess: true,
        data:{
            data
        }
    })
}

module.exports = {
    getProductController,
    ProductController
}