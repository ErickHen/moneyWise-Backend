const Gasto = require('../models/Gasto')
const router = require('express').Router()

//CREATE
router.post('/', async (req, res) => {

    const { salario, alimentacao, saude, estudos, entretenimento, gastosFixos } = req.body

    if (!salario) {
        res.status(422).json({ error: 'O salario é obrigatorio!' })
        return
    }

    const gasto = {
        salario, alimentacao, saude, estudos, entretenimento, gastosFixos
    }

    try {

        await Gasto.create(gasto)
        res.status(201).json({ message: 'Inserido com sucesso!' })

    } catch (error) {

        res.status(500).json({ error: error })

    }
})

//READ
router.get('/', async (req, res) => {
    try {

        const gastos = await Gasto.find()
        res.status(200).json(gastos)

    } catch (error) {

        res.status(500).json({ error: error })

    }
})

//UPDATE
router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { salario, alimentacao, saude, estudos, entretenimento, gastosFixos } = req.body
    const gasto = {
        salario, alimentacao, saude, estudos, entretenimento, gastosFixos
    }

    try {

        const updatedGasto = await Gasto.updateOne({ _id: id }, gasto)
        if (updatedGasto.matchedCount === 0) {
            res.status(422).json({ error: 'Não encontrado!' })
            return
        }
        res.status(200).json(gasto)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const gasto = await Gasto.findOne({ _id: id })

    if (!gasto) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }

    try {
        await Gasto.deleteOne({ _id: id })

        res.status(200).json({ message: 'Removido com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = router
