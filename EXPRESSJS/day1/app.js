const express = require("express");
const { myReadFile, mySaveFile } = require("./files/file_helper");
const { v4: uuidv4 } = require('uuid');

const app = express();

const FILE_PATH = "./products.json";

app.use(express.json()) // once print object keys then the json things wont come there after doing this line body will also come

app.use((req,res,next)=>{
    console.log("-->", new Date(), req.url, req.method);
    next();
})


app.post("/api/products" , async(req,res,next) => {
    // open the file -- read the content -- add our new data -- store data
    const products = await myReadFile(FILE_PATH);
    // console.log(products);
    const data = req.body;
    let newId = 1;
    if(products.length > 0){
        newId = products[products.length-1].id + 1;
    }

    data.id = newId;
    products.push(data)
    await mySaveFile(FILE_PATH,products);

    res.json({
        isSucess: true,
        newProducts: data
    })
})

app.get("/api/viewProducts" , async(req,res,next)=>{
    const data = await myReadFile(FILE_PATH);
    
    // res.json(data);
    res.json({
        isSucess : true,
        products: {
            data
        }
    })
})

app.patch("/api/products/:productId", async(req,res)=>{
    // console.log(req.params);
    const { productId } = req.params;
    console.log(productId);

    const data = req.body;

    // getodlArr
    const products = await myReadFile(FILE_PATH);

    // find if there any product with given id
    // findIndex in the array

    const idx = products.findIndex((elem)=>{
        return elem.id == productId;
    })

    if(idx === -1){
        return res.status(400).json({
            isSucess: false,
            message: "Invalid Product Id"
        })
    }

    // change the old obj and replace its property
    // updated object save it in array 

    const oldObj = products[idx];
    products[idx] = {...oldObj, ...data};

    // updated array save it in a file 

    await mySaveFile(FILE_PATH,products);

    return res.json({
        isSucess: true,
        updatedProduct: products[idx]
    });

} )

app.delete("/api/products/:productId", async(req,res)=>{
    // console.log(req.params);
    const { productId } = req.params;
   
    const products = await myReadFile(FILE_PATH);

    // find if there any product with given id
    // findIndex in the array

    const idx = products.findIndex((elem)=>{
        return elem.id == productId;
    })

    if(idx === -1){
        return res.status(400).json({
            isSucess: false,
            message: "Invalid Product Id"
        })
    }

    products.splice(idx , 1);

    await mySaveFile(FILE_PATH,products);

    return res.json({
        isSucess: true,
        updatedProduct: products[idx]
    });

} )


app.listen(3333, "localhost", (req,res) => {
    console.log("-----------Server started---------------")
})
