const usermodel = require("../models/usermodel")
const bcrypt = require('bcryptjs');



async function userSignUpController(req,res) {
    try{
        const { email, password,  fname, lname } = req.body
        
        const user = await usermodel.findOne({email})

        if(user){
            throw new Error("Already user exits")
        }

        if(!email){
            throw new Error ("Please Provide Email")
        }

        if(!password){
            throw new Error ("Please Provide Password")
        }

        if(!fname){
            throw new Error ("Please Provide fname")
        }

        if(!lname){
            throw new Error ("Please Provide lname")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error ("Something is Wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new usermodel(payload)
        const saveUser = userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully"
        })

    }catch(error){
        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })
    }
    
}

module.exports = userSignUpController