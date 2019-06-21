const fs = require('fs');
const path = require('path');


// Create a Folder 
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created...');
});

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
    'Hello World', 
        err => {
        if (err) throw err;
            console.log('File written to...')

    // File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
    'Hi there',
        err => {
            if (err) throw err;
                console.log('File appended');
        }
    )
})

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed')
    }
)

fs.writeFile('url_demo.js', {recursive: true}, (err) => {
    if (err) throw err;
    console.log('File')
})