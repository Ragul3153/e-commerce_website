const  addToCartModel = require("../../models/cardProduct")

const deleteAddToCartProduct = async(req,res)=>{
    try{

    const currentUserId  = req.userId
    const addToCartProductView = req.body._id

    const deleteProduct = await addToCartModel.deleteOne({ _id : addToCartProductView })

    res.json({
        message : "Product Deleted  From Cart",
        error : false,
        success : true,
        data : deleteProduct
    })

    }catch(error)
    {
        res.json({
            message : error?.message || error,
            error : true,
            success : false
        })
    }
}
module.exports  = deleteAddToCartProduct