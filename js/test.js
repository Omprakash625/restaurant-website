const http = require('http');
var url = require('url');

const PORT = 8080;

http.createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
}).listen(PORT);

export default App();