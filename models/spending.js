const mongoose = require('mongoose')

const Spending = mongoose.model('spending', {
    food: Number,
    health: Number,
    studies: Number,
    entertainment: Number,
    fixedExpenses: Number,
})

module.exports = Spending