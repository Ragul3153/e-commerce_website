const userSignInController = require("../controller/userSignIn")
const userSignUpController = require ("../controller/userSignUp")
const express = require("express")

const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)

module.exports = router
