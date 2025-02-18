const userDetailsController = require("../controller/userDetails")
const userSignInController = require("../controller/userSignIn")
const userSignUpController = require ("../controller/userSignUp")
const authToken = require("../middleware/authToken")
const express = require("express")

const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)

module.exports = router