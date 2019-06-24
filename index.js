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
            res.writeContinue(200, {'Content-Type': 'text/html'})
            res.end(data);
        });
    }
    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, '/public', 'about.html'), (err, data) => {
    //         if (err) throw err;
    //         res.end(data);
    //     });
    // }
    
    // Sending api 
    if(req.url === '/about') {
        const users = [
            {name: 'Mike Jonah', age: 20},
            {name: 'John Doe', age: 40}
        ]
        res.writeContinue(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users));
    } 
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))