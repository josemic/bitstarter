var express = require('express');
var fs = require ('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer();
    buf = readfile("index.html");
    response.send('Hello World from '+buf.toString());
});

function readfile(filename){
    return fs.readFile(filename, function (err, data) {
	if (err) throw err;
	console.log(data);
    });
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
