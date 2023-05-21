const Spending = require('../models/spending')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        await Spending.create(req.body)
        res.status(201).json({ message: 'Inserted successfully!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/', async (_, res) => {
    try {
        const spending = await Spending.find()
        
        res.status(200).json({
            food: spending[0].food,
            health: spending[0].health,
            studies: spending[0].studies,
            entertainment: spending[0].entertainment,
            fixedExpenses: spending[0].fixedExpenses   ,
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.patch('/', async (req, res) => {

    try {
        const updatedSpend = await Spending.updateOne(req.body)

        if (updatedSpend.matchedCount === 0) {
            res.status(422).json({ error: 'Not found!' })
            return
        }

        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/', async (req, res) => {
    const spending = await Spending.find()
    if (!spending) {
        res.status(422).json({ message: 'User not found!' })
        return
    }
    try {
        await Spending.deleteOne()

        res.status(200).json({ message: 'successfully removed!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

module.exports = router
