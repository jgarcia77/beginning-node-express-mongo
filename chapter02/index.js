const express = require('express');
const app = express();
const path = require('path');

const getFilePath = file => `frontend/${file}.html`;
const getFile = name => path.resolve(__dirname, (getFilePath(name)));

app.use(express.static('public'));

app.listen(3002, () => {
    console.log('listening on port', 3002);
    console.log('__dirname', __dirname);
});

app.get('/', (req, res) => {
    res.sendFile(getFile('home'));
});

app.get('/about', (req, res) => {
    res.sendFile(getFile('about'));
});

app.get('/contact', (req, res) => {
    res.sendFile(getFile('contact'));
});