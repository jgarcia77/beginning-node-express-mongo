console.log('starting chapter 03')
const express = require('express');
const app = new express();
const path = require('path');

const getFilePath = file => `pages/${file}.html`;
const getFile = name => path.resolve(__dirname, (getFilePath(name)));

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('App listening on port 4000');
});

app.get('/', (req, res) => {
    res.sendFile(getFile('index'));
});

app.get('/about', (req, res) => {
    res.sendFile(getFile('about'));
});

app.get('/contact', (req, res) => {
    res.sendFile(getFile('contact'));
});

app.get('/post', (req, res) => {
    res.sendFile(getFile('post'));
});