//สร้าง Nodejs Express Server
const express = require('express')
const app = express()
const port = 3000

const path = require('path');
app.use(express.static(path.join(__dirname, '/page/')))

app.listen(port, () => {
    console.log('app listening on localhost:' + port)
})