const { error } = require('console')
const fs = require('fs') // file handling
const http = require('http')
const port = 3000

// create server object
const server = http.createServer(function (req, res){ // read the index.html file in the current directory
    res.writeHead(200, {'Content-Type': 'text/html'}) // 200 is a good code, tells server what content it will render
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404) // 404 is a bad code
            res.write('Error: File not found!')
        } else {
            res.write(data)
        }
    res.end() // close service connection    
    })
})

// set server to listen
server.listen(port, function(error) {
    if (error) { // if server was unable to connect to port
        console.log('Something went wrong. Please try again.', error)
    } else { // if server successfully connected
        console.log('Server is listening on port ' + port)
    }
})