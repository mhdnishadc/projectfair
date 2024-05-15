require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
const multer = require('multer')
require('./DB/connection')
// Creates an Express application
const pfServer = express()
// Use Cors in Exprees server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`Project fair Server at PORT:${PORT}`);
})

pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Project Fair Server And Waiting for client request!!!</h1>`)
})

