const mongoose = require("mongoose")

const prodcutSchema = mongoose.Schema({
        productName : String,
        brandName : String,
        category : String,
        productImage : [],
        description : String,
        price : Number,
        sellingPrice : Number
},{
    timestaps : true
})

const productModel = mongoose.model("product",prodcutSchema)

module.exports = productModel 