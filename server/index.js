const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@mern-web.ipht8bz.mongodb.net/?retryWrites=true&w=majority`, {})
        console.log('Mongoose Connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()

// Đọc Data trong body với headers: 'application/json' 
app.use(express.json())

app.use('/api/auth/', authRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))