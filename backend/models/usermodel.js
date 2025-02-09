const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : String
},{
    timestamps : true
})

const usermodel = mongoose.model("user",userSchema)

module.exports = usermodel