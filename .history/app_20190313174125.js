const express = require('express');
const app = express();
const path = require('path');
//const petsData = require('./json/pets.json')['pets'];

app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/*
app.get('/data', (req, res) => {
    res.json(petsData);
});
*/

app.listen(process.env.PORT || 8080);