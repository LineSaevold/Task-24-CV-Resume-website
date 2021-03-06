const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const data = require('./json/data.json')

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
        email: data.contact[0].email,
        phone: data.contact[1].phone,
        education: data.education[0].school,
        github: data.social[0].github,
        linkedin: data.social[1].linkedin,
        currentJob: data.currentJob
    });
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8080);