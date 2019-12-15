const http = require('http');
const fs = require('fs');

const getFilePath = file => `./chapter01/frontend/${file}.html`;

const getPage = name => fs.readFileSync(getFilePath(name));

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.end(getPage('home'));
            break;

        case "/about":
            res.end(getPage('about'));
            break;

        case "/contact":
            res.end(getPage('contact'));
            break;

        default:
            const code = 404;
            res.writeHead(code);
            res.end(getPage(code));
            break;
    }
});

server.listen(3001);