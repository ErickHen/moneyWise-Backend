const Balance = require('../models/balance')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        await Balance.create(req.body)
        res.status(201).json({ message: 'Inserted successfully!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/', async (_, res) => {
    try {
        const balance = await Balance.find()
        res.status(200).json(balance)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.patch('/', async (req, res) => {
    try {
        const updatedBalance = await Balance.updateOne(req.body)

        if (updatedBalance.matchedCount === 0) {
            res.status(422).json({ error: 'Not found!' })

            return
        }
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router
