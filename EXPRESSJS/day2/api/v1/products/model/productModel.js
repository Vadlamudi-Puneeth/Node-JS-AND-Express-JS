const path = require("path");
const { mySaveFile, myReadFile } = require("../../../../utils/file_helper");
const { error } = require("console");

const PRODUCTS_FILE_PATH = path.join(__dirname, "products.json");

const saveProduct = async(data) => {
    const products = await myReadFile(PRODUCTS_FILE_PATH);

    const idx = products.findIndex((elem) => {
        if(elem.title === data.title){
            return true;
        }else{
            return false;
        }
    })

    if(idx !== -1){
        throw new error("products with given title already exist");
    }

    let newId = 1;
    if(products.length > 0){
        newId = products[products.length - 1].id + 1;
    }
    data.id = newId;
    products.push(data);
    await mySaveFile(PRODUCTS_FILE_PATH,products)
}

const readProduct = async() => {
    const products = await myReadFile(PRODUCTS_FILE_PATH);
    return products;
}

const updateProduct = async(data, productId) =>{

    const products = await readProduct();

    const idx = products.findIndex((elem) => {
        return elem.id == productId;
    })

    if(idx === -1){
        return null;
    }

    const oldObj = products[idx];
    products[idx] = {...oldObj, ...data};

    await mySaveFile(PRODUCTS_FILE_PATH, products);

    return products[idx];

}

const deleteProduct = async (productId) => {
    const id = Number(productId);
    const products = await readProduct();

    const idx = products.findIndex((elem) => elem.id == id);

    if (idx === -1) {
        return null; // nothing found
    }

    const deletedProduct = products[idx];

    products.splice(idx, 1);

    await mySaveFile(PRODUCTS_FILE_PATH, products);

    return deletedProduct;
};

module.exports = {saveProduct, readProduct, updateProduct, deleteProduct, PRODUCTS_FILE_PATH }
