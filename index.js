const http = require("http")

const hostname = '127.0.0.1';

const port = 3000;

let server = http.createServer(function(req, res) {
    if (req.url == "/") {
        res.end("HomePage")
    }

    else if (req.url == "/about") {
        res.end("About")
    }

    else {
        res.end("Something went wrong!")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
