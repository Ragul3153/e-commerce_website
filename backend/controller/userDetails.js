async function userDetailsController(req,res){
    try{
        const token = req.cookies?.token || req.header

        console.log("token",token)

    }catch(error){
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController