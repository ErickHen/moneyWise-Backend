const express = require('express');
const app = express();
const mongoose = require('mongoose');

const spendingRoutes = require('./routes/spendingRoutes')
const balanceRoutes = require('./routes/balanceRoutes')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

require('dotenv').config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/spending', spendingRoutes)
app.use('/balance', balanceRoutes)

app.get('/', (_, res) => { res.json({ message: 'it is working correctly!' }) })

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kkjwoby.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("connected DB!");
        app.listen(3000)
    })
    .catch((err) => console.log(err))
