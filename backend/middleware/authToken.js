const jwt = require("jsonwebtoken")

async function authToken(req,res,next){
    try{
        const token =req.cookies?.token || req.header

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
        console.log(error)
        console.log("decoded",decoded)
        });

        console.log("token    ",token)

    }catch(error){
        res.status(400).json{(
            message : error.message || error,
            data : [],
            error : true,
            success : false
        )}
    }
}

module.exports = authToken