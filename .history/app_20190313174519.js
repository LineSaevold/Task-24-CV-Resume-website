const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');

app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8080);