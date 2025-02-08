const express = require ("express")

const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const router = require("./routes")

const app = express()
app.use(cors())
app.use("./api",router)

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log("Connected to DB")
        console.log("Server Started ...")
    })
})
