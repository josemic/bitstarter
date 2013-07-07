var express = require('express');
var fs = require ('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer(readfile("index.html"), "utf-8");
    response.send(buf.toString());
});

function readfile(filename){
    return fs.readFileSync(filename);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
