const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

const gastosRoutes = require('./routes/gastosRoutes')

app.use('/gasto', gastosRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Funcionando!' })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD =  process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kkjwoby.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log(("Conectado ao mongoDB!"));
        app.listen(3000)
    })
    .catch((err) => console.log(err))
