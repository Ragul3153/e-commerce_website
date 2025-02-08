const mongoose = require("mongoose")

const userSchema = neww.mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : String
},{
    timestamps : true
})