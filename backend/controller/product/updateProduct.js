const uploadProductPermission = require("../helper/permission")
const productModel = require("../models/productModel")

async function updateProductController(req,res){
    try{

    if(!uploadProductPermission(req.userId)){
        throw new Error("Permission denied")
    }

    const { _id, ...resBody } = req.body

    const updateProduct = await  productModel.findByIdAndUpdate(_id,resBody)

    res.status(200).json({
        message: "Product updated",
        error: false,
        success: true
    })

    }catch(error)
    {
         res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = updateProductController