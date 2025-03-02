const usermodel = require("../../models/usermodel")

const allusers = async (req,res) => {
    try{
        console.log("userid all Users",req.userId)

        const alluser = await usermodel.find()

        res.json({
            message : "All User",
            data : alluser,
            success : true,
            error : false
        })

    }catch(error){
         res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = allusers