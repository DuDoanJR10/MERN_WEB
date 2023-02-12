const express = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://dudoan:${encodeURIComponent('dukick0333vx###')}@mern-web.ipht8bz.mongodb.net/?retryWrites=true&w=majority`, {})
        console.log('Mongoose Connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))