const http = require('http');

const requestListener = function (req, res) {
    console.log("1",req.url)

    let search = req.url.split("?")
    console.log("2",search)
    let parameters = search.split('=')
    console.log("3",parameters)
    let key = parameters[0]
    let value = parameters[1]
    console.log("4",key, value)
    let sql = "INSERT INTO players (name) VALUES ('"+value+"');"
    console.log("5",sql)

    res.writeHead(200);
    res.end('<b>Hello, World!</b> Tulid: '+req.url);
}

const server = http.createServer(requestListener);
server.listen(8080);
