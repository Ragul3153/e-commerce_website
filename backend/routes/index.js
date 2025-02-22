const userDetailsController = require("../controller/userDetails")
const userLogout = require("../controller/userLogout")
const userSignInController = require("../controller/userSignIn")
const userSignUpController = require ("../controller/userSignUp")
const authToken = require("../middleware/authToken")
const allusers = require("../controller/allusers")
const express = require("express")
const uploadProductController = require("../controller/uploadProduct")
const getProductController = require("../controller/getProduct")
const updateProductController = require("../controller/updateProduct")
const updateuser = require("../controller/updateuser")
const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin panel
router.get("/all-users",authToken,allusers)
router.post("/update-user",authToken,updateuser)

//product
router.post("/upload-product",authToken,uploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)


module.exports = router