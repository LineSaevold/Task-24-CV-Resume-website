const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
let rawData = fs.readFileSync("data.json");
const data = JSON.parse(rawData);

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('layout', {
        "firstname": data.firstname,
        "lastname": data.lastname
    });
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8080);