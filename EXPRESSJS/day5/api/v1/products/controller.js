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

const updateProductController = async(req, res) =>{
    try{
        const data = req.body;
        const {productId} = req.params;

        const updatedProducts = await productModel.findByIdAndUpdate(productId, data, {
            new: true,
            runValidators: true // Is we check updatevalidators then it is no need 
        }).lean();

        if(updatedProducts == null){
            return res.status(404).json({
                isSuccess: false
            })
        }

        res.status(200).json({
            isSuccess: true,
            data: {updatedProducts}
        })

    }catch(err){
        res.status(400).json({
            isSuccess: false
        })
        console.log(err);
    }
}

const deleteProductController = async(req, res) =>{
 try{
        const {productId} = req.params;

        const deleteProducts = await productModel.findByIdAndDelete(productId);

        if(!deleteProducts){
            return res.status(404).json({
                isSuccess: false,
                message: "Id not match"
            })
        }

        return res.status(200).json({
            isSuccess: true,
            data: deleteProducts
        })

    }catch(err){
        res.status(500).json({
            isSuccess: false
        })
        console.log(err);
    }
}

const listProductController = async(req, res) =>{
    console.log("list product controller");
    try{
        // const limit = 5;
        const { limit = 5, page = 1, select = "title price quantity",q = "", maxPrice, minPrice} = req.query;

        const searchRegex = new RegExp(q, "i");

        const selectedItem = select.split(",").join(" ");
        const limitNum = parseInt(limit);
        const pageNum = parseInt(page);
        // const page = 1;
        const skip = (page - 1) * limit;
        const query = productModel.find();

        query.skip(skip);    
        query.limit(limitNum);
        query.select(selectedItem);
        query.or([{title: searchRegex},{description: searchRegex}]) 
        
        if(maxPrice && !Number.isNaN(Number(maxPrice))){
            products.where("price").lte(maxPrice);
        }

        if(minPrice && !Number.isNaN(Number(minPrice))){
            products.where("price").gte(minPrice);
        }

        const queryCopy = query.clone();
        
        const totalDocs = await queryCopy.countDocuments();
        const totalPage = Math.ceil(totalDocs/limitNum);
        const products = await query;
        
        return res.status(200).json({ 
            isSuccess: true,
            currentPage: pageNum,
            limit: Math.min(limitNum, products.length),
            totalPage: totalPage,
            totalDocs: totalDocs,
            data:{
                products
            }
        })
    }catch(err){
        res.status(500).json({
            isSuccess: false,
            message: "Not able to list the products"
        })
    }
}

module.exports = {
    getProductController,
    ProductController,
    updateProductController,
    deleteProductController,
    listProductController
}