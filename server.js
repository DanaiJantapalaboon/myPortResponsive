const express = require('express');
const server = express();
const port = 3000;
const path = require('path');

server.use(express.static(path.join(__dirname, '/page/')));

//server.get('/', (req, res) => {})
server.listen(port, () => {})