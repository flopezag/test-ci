// Importing http core package/module provided by nodejs
const http = require('http');
const fs = require('fs')

// Creating a server
http.createServer(function (req, res) {

    fs.readFile('pageData.js', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        // Write response as Html(text)
        res.writeHead(200, {'Content-Type': 'text/html'});

        // Writing static text
        data = 'Hello World<br/><br/><br/>' + data
        res.end(data);
    })
// Server listening on port number 4200
}).listen(4200);