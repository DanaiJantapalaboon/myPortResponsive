const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

const path = require('path');
app.use(express.static(path.join(__dirname, '/page/')))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/')
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log('app listening on localhost:' + PORT)
})