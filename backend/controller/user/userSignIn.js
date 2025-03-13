const bcrypt = require("bcryptjs")
const usermodel = require("../../models/usermodel")
const jwt = require('jsonwebtoken');

async function userSignInController(req,res) {
    try{
        const {email,password} = req.body

        if(!email){
            throw new Error ("Please Provide Email")
        }

        if(!password){
            throw new Error ("Please Provide Password")
        }

        const user = await usermodel.findOne({email})

        if(!user){
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password,user.password)

        console.log("Checkpasssword",checkPassword)

        if(checkPassword){
                const tokenData = {
                     _id : user._id,
                     email : user.email,    
                }
                
                const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});
                console.log(token)
                const tokenOption = {
                    httpOnly : true,
                    secure : true,
                    sameSite : "None",
                    maxAge : 8 * 60 * 60 * 1000
                }
                
                res.cookie("token",token,tokenOption).status(200).json({
                    message : "Login Successfully",
                    data : token,
                    success : true,
                    error : false
                })

        }else{
            throw new Error("Please Check Password")
        }

    }catch(error){
        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignInController
