require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

// Settings
    // Body Parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
// Mongo
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(`Connection error: ${err}`);
})

app.get('/', (req, res) => {
    res.json('Hello World')
})

const port = 3333
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})