const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const router = require('./routes/routePerson');
const routerProduct = require('./routes/routeProduct');

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/person', router)
app.use('/api/product', routerProduct)

app.listen(process.env.PORT, () => {
    console.log('The server is lietening to the port : ', process.env.PORT)
})