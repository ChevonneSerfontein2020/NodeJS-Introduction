const { error } = require('console')
const http = require('http')
const port = 3000

// create server object
const server = http.createServer(function (req, res){
    Response.write('Hello!')
})

// set server to listen
server.listen(port, function(error) {
    if (error) { // if server was unable to connect to port
        console.log('Something went wrong. Please try again.', error)
    } else { // if server successfully connected
        console.log('Server is listening on port ' + port)
    }
})