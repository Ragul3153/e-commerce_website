const addToCartController = (req,res)=>{
    try{

    const ( productId ) = req?.body
    const currentUser = req.userId

    const isProductAvailable = await addToCartModel.find({ productId })

    if(isProductAvailable){
        return res.json({
            message : "Already exits in Add to Cart",
            success : false,
            error : true
    })
    }

    const payload = {
        productId : productId,
        quantity : 1,
        userId : currentUser
    }

    const newAddToCart = new addToCartModel(payload)
    const saveProduct = await newAddToCart.save()

    return res.json({
        data : saveProduct,
        message : "Product Added into Cart",
        success : true,
        error : false
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

module.exports = addToCartController