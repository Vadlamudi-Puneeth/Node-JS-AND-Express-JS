const validateProductCreation = (req, res, next) =>{
    try{
        
        const data = req.body;
        const {title, price, quantity} = data;

        if(!title || title.length < 5 ){
            return res.status(400).json({
                isSuccess: false,
                message: "Bad request"
            })
        }

        if(!price || price <= 0 ){
            return res.status(400).json({
                isSuccess: false,
                message: "Bad request"
            })
        }

        if(!quantity || quantity <= 0 ){
            return res.status(400).json({
                isSuccess: false,
                message: "Bad request"
            })
        }

        res.body = {title: title.trim(), price, quantity}
        next();

    }catch(err){
        console.log(err);
        res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    validateProductCreation
}