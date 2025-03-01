const backendDomain =  "http://localhost:4000"

const SummaryApi = {
    signUP : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomain}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "get"
    },
    allusers : {
        url : `${backendDomain}/api/allusers`,
        method : "get"
    },
    updateuser : {
        url : `${backendDomain}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backendDomain}/api/upload-product`,
        method : "post"
    },
    allProduct : {
        url : `${backendDomain}/api/get-product`,
        method : "get"
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method : "post"
    },
    categoryProduct : {
        url : `${backendDomain}/api/get-categoryProduct`,
        method : "get"
    },
    categorywiseProduct : {
        url : `${backendDomain}/api/category-product`,
        method : "post"
    },
    productDetails : {
        url : `${backendDomain}/api/product-details`,
        method : "post"
    },
    addToCartProduct : {
        url : `${backendDomain}/api/addtocart`,
        method : "post"
    },
    addToCartProductCount : {
        url : `${backendDomain}/api/countAddToCartProduct`,
        method : "get"
    },
    addToCartViewProduct : {
        url : `${backendDomain}/api/view-cart-product`,
        method : "get"
    },
    updateCartProduct : {
        url : `${backendDomain}/api/update-cart-product`,
        method : "post"
    },
    deleteCartProduct : {
        url : `${backendDomain}/api/delete-cart-product`,
        method : "post"
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get'
    },
}

export default SummaryApi