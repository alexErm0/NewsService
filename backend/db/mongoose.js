// This file will handle connection logic to MongoDB database

const mongoose = require('mongoose')
const config = require('config')

async function connectDB() {
    try {
        mongoose.connect(config.get("mongoURI"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Database connected successfully...")
    } catch (e) {
        console.log("Database connection failed: ", e.message)
    }
}

connectDB()

module.exports = mongoose