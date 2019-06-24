// const Logger = require('./logger');
const http = require('http');
const path = require('path');
const fs = require('fs');

// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener', data))
// logger.log('Hello World!')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, '/public', 'index.html'), (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }
    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, '/public', 'about.html'), (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } 
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))