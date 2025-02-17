const userDetailsController = require("../controller/userDetails")
const userSignInController = require("../controller/userSignIn")
const userSignUpController = require ("../controller/userSignUp")
const express = require("express")

const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",userDetailsController)

module.exports = router