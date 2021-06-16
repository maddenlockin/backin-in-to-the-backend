const backends = require('./data.js');
const cors = require('cors');
const express = require('express');
const app = express();

app.get('/backends', (req, res) => {
    
    res.json(backends)
})

app.get('/backends/:id', (req, res) => {
    
    const id = Number(req.params.id);

    const butts = backends.data.find((singleButt) => singleButt.id === id)

    res.json(butts)
})

module.exports = app;