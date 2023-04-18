const mongoose = require('mongoose')

const Gasto = mongoose.model('Gasto', {
    salario: Number,
    alimentacao: Number,
    saude: Number,
    estudos: Number,
    entretenimento: Number,
    gastosFixos: Number,
})

module.exports = Gasto