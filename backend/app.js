// This is the main app file
// To start server run this command in terminal: npm run server

const express = require('express')
const config = require('config')
const {mongoose} = require('./db/mongoose')
const User = require('./db/models/User')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = config.get('port') || 5000

/* SERVER START */

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()

/* ROUT HANDLERS */


app.use('/users', require('./routes/auth.routes'))
app.use('/articles', require('./routes/articles.routes'))
app.use('/tags', require('./routes/tags.routes'))
app.use('/', (req, res) => {
    res.send('Travis test')
})


