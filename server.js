const http = require('http');
const port = 3000;
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log ('responding');
    res.end(`Hello KATHI!
    If you see this, then your Node.js server is running on AWS EC2!`);
}).listen(port, () => {
    console.log ('server is up');
})
