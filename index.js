const express = require('express');
const backends = require('./data.js');
const cors = require('cors');
const app = express();
const port = 3000

app.get('/backends', (req, res) => {
    
    res.json(backends)
})

app.get('/backends/:id', (req, res) => {
    
    const id = Number(req.params.id);

    const butts = backends.data.find((singleButt) => singleButt.id === id)

    res.json(butts)
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})