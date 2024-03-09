const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs');
const { db } = require('./db/datab');
const { route } = require('./routes/transactions');
const app = express() 

require('dotenv').config()

const PORT = process.env.PORT

//Middleware
app.use(express.json())
app.use(cors())

//Routes
readdirSync('./routes').map((route) => app.use('/api/v1' , require('./routes/' + route)))


app.get('/', (req,res) => {
    res.send("Hello")
})

const server = () => {
        db();
        app.listen(PORT, () => {
            console.log('listening:' , PORT)
        })
    }
server();