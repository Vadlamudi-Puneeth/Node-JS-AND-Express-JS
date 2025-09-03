const fsPromise = require("fs/promises")

const myReadFile = async(filePath) =>{
    try{
        const data = await fsPromise.readFile(filePath,"utf-8");
        return JSON.parse(data)
        // string to obj
    }catch(err){
        console.log(err);
        return [];
    }
}

const mySaveFile = async(filePath, data) => {
    try{
        const str = JSON.stringify(data, null, 4);
        //obj to str
        await fsPromise.writeFile(filePath, str)

    }catch(err){
        console.log(err);
        return [];
    }
}

module.exports = { myReadFile, mySaveFile };
