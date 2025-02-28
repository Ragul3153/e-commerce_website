const userDetailsController = require("../controller/user/userDetails")
const userLogout = require("../controller/user/userLogout")
const userSignInController = require("../controller/user/userSignIn")
const userSignUpController = require ("../controller/user/userSignUp")
const authToken = require("../middleware/authToken")
const allusers = require("../controller/user/allusers")
const express = require("express")
const uploadProductController = require("../controller//product/uploadProduct")
const getProductController = require("../controller/product/getProduct")
const updateProductController = require("../controller//product/updateProduct")
const updateuser = require("../controller//user/updateuser")
const getCategoryProduct = require("../controller/product/getCategoryProductOne")
const getCategorywiseProduct = require("../controller/product/getCategorywiseProduct")
const getProductDetails = require("../controller/product/getProductDetails")
const addToCartController = require("../controller/user/addToCartController")
const countAddToCardProduct = require("../controller/user/countAddToCardProduct")
const addToCartViewProduct = require("../controller/user/addToCartViewProduct")
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
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategorywiseProduct)
router.post("/product-details",getProductDetails)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCardProduct",authToken,countAddToCardProduct)
router.get("/view-cart-product",authToken,addToCartViewProduct)

module.exports = router