require("dotenv").config();
const express = require('express')
const app = express()

const print = require("./controller");

app.get('/', print);

app.getMaxListeners("/introduce", (req,res) => {
    
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})
