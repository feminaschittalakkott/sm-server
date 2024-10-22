require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Routes/routes')
require('./Connection/db')

const smserver = express()

// configuring cors mechinism in server
smserver.use(cors())
// configuring json middleware to server to convert data from json to native
smserver.use(express.json())

// smserver.use(jwt)
// configuring routes into server
smserver.use(route)


const PORT = 3000 || process.env.PORT
smserver.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})

smserver.get('/', (req, res)=>{
    res.send("<h1>Welcome to Student Management Server</h1>")
})