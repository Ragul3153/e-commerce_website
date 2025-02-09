const express = require ("express")

const cors = require("cors")
const cookieParser = require('cookie-parser')
require("dotenv").config()
const connectDB = require("./config/db")
const router = require("./routes")

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(cookieParser()) 
app.use("/api",router)

connectDB().then(()=>{
    app.listen(4000,()=>{
        console.log("Connected to DB")
        console.log("Server Started ...")
    })
})
