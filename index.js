const express = require('express');
const app = express();
const mongoose = require('mongoose');
const gastosRoutes = require('./routes/gastosRoutes')
const DB_USER = process.env.DB_USER
const DB_PASSWORD =  process.env.DB_PASSWORD

require('dotenv').config();

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use('/gasto', gastosRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Funcionando!' })
})

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kkjwoby.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao mongoDB!");
        app.listen(3000)
    })
    .catch((err) => console.log(err))
