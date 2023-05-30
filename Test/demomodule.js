const http = require ( 'http' );
const hostname = 'localhost' ;
const port = 3000 ;
var dt = require('./datemodule');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write(" The date in server" + dt.myDatetime());
    res.end();
});