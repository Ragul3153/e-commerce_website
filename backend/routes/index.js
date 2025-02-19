const userDetailsController = require("../controller/userDetails")
const userLogout = require("../controller/userLogout")
const userSignInController = require("../controller/userSignIn")
const userSignUpController = require ("../controller/userSignUp")
const authToken = require("../middleware/authToken")
const allusers = require("../controller/allusers")
const express = require("express")

const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel
router.get("/all-users",authToken,allusers)

module.exports = router