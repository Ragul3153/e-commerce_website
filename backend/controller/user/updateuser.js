const usermodel = require("../../models/usermodel")

const updateuserrole = async(req,res) => {
    try{

    const sessionuser = req.userId

    const { userId, email, name, role } = req.body

    const payload = {
        ...(email && { email : email}),
        ...(name && { name : name}),
        ...(role && { role : role}),
    }

    const user = await usermodel.findById(sessionuser)

    const updateuser = await usermodel.findByIdAndUpdate(userId,payload)

    res.json({
        data : updateuser,
        message : "user-updated",
        success : true,
        message : false
    })

    }catch(error){
         res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = updateuserrole