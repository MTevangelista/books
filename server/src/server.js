const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Settings
    // Body Parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
//  

app.get('/', (req, res) => {
    res.json('Hello World')
})

const port = 3333
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})