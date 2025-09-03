const { saveProduct, readProduct, PRODUCTS_FILE_PATH, updateProduct, deleteProduct } = require("./model/productModel");

const createProductController = async(req, res) => {
    // ... Business logic
    try{
        const data = req.body;
        await saveProduct(data); // data
        res.status(201).json({
            isSuccess: true,
            message: "Product created"
        })

    }catch(err){
        console.log("Error in createProductController");
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error"
        })
    }
}

const readProductController = async(req, res) => {
    try{
        const data = await readProduct();

        res.status(200).json({
            isSuccess: true,
            products: {
                data
            }
        })
    }catch(err){
        console.log("error reading");
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error"
        })
    }
}

const editController = async (req, res) => {
    try {
        const { productId } = req.params;
        const data = req.body;

        const updatedProduct = await updateProduct(data, productId);

        if (!updatedProduct) {
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid Product Id",
            });
        }

        return res.status(200).json({
            isSuccess: true,
            message: "Product updated successfully",
            updatedProduct,
        });

    } catch (err) {
        console.log("Error in editController:", err.message);
        return res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
        });
    }
};


const deleteController = async (req, res) => {
    try {
        const { productId } = req.params;

        const deletedProduct = await deleteProduct(productId);

        if (!deletedProduct) {
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid Product Id",
            });
        }

        return res.status(200).json({
            isSuccess: true,
            message: "Product deleted successfully",
            deletedProduct,
        });

    } catch (err) {
        console.log("Error in deleteController:", err.message);
        return res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
        });
    }
};


module.exports = {
    createProductController, readProductController, editController, deleteController
}
