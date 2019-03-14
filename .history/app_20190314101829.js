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
        firstname: data.firstname,
        lastname: data.lastname,
        imgURL: data.imageURL,
        title: data.title,
        date: data.dateOfBirth,
        address: data.address,
        nationality: data.nationality,
        email: data['contact'].email,
        phone: data['contact'].phone
    });
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8080);