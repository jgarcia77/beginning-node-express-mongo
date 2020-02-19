const express = require('express');
const app = new express();
const path = require('path');
const ejs = require('ejs');

const getFilePath = file => `pages/${file}.html`;
const getFile = name => path.resolve(__dirname, (getFilePath(name)));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('App listening on port 4000');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post', (req, res) => {
    res.render('post');
});