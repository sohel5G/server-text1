
const express = require('express');

const app = express();

const port = 1000

app.get('/', (req, res) => {
    res.send('Hello from first server')
})

app.get('/data', (req, res) => {
    res.send('More data from first server rrrrr')
})

app.listen(port, () => {
    console.log(`My first server running on port ${port}`)
})

