var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	
    res.sendfile('dindex.html');
});
app.use(express.static(__dirname + '/export'));
app.use(express.static(__dirname + '/public'));

// Chargement du fichier index.html affiché au client
/*
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});
*/

// Chargement de socket.io
var io = require('socket.io').listen(app.listen((process.env.PORT || 80)));

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
});

io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Vous êtes bien connecté !');

    // Quand le serveur reçoit un signal de type "message" du client    
    socket.on('message', function (message) {
        console.log('Un client me parle ! Il me dit : ' + message);
    });	
});

//app.listen((process.env.PORT || 80));