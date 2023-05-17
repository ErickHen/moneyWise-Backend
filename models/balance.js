const mongoose = require('mongoose')

const Balance = mongoose.model('balance', {
    value: Number,
})

module.exports = Balance