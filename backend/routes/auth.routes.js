const {Router} = require('express')
const router = Router()

router.post('/register', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: "Something go wrong, try again"})
    }
})

router.post('/login', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({message: "Something go wrong, try again"})
    }
})

module.exports = router