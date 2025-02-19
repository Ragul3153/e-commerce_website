const usermodel = require("../models/usermodel")

async function allusers(){
    try{
        console.log("userid all Users",req.userId)

        const alluser = await usermodel.find()

        res.json({
            message : "All User"
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