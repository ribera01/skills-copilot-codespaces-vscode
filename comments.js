//Create web server
//Create a web server that listens for requests on port 3000, and responds with "Hello, World!" for any request made to the server.

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});