const userModel = require("../models/usermodel")

const uploadProductPermission = async(userId) => {
    const user = usermodel.findbyId(userId)

    if(user.role !== "ADMIN"){
        return false
    }

    return false
}

module.exports = uploadProductPermission