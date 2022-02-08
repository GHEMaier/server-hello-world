const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log ('responding');
    res.end(`Hello FRIENDS!
    If you see this, then your Node.js server is running on AWS EC2!`);
}).listen(80, () => {
    console.log ('server is up');
})
