var http = require('http');
var express = require('express');

var port = process.env.PORT || '3000';
var app = express();

app.post('/compare/users', function (req, res, next) {
    return res.json([{ id: '1', name: 'johnDoe' }, { id: '2', name: 'janeDoe' }]);
});

app.post('/compare/addresses', function (req, res, next) {
    return res.json([{ "street": "test123" }, { "street": "test123" }]);
});

var server = http.createServer(app);

server.listen(port, function () {
    console.log("Server listening on port " + port);
});