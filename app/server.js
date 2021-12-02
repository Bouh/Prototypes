var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

pseudo = [];

app.get('/', function(req, res) {
	res.sendfile('dindex.html');
});
app.use(express.static(__dirname + '/export'));
app.use(express.static(__dirname + '/public'));

// Chargement de socket.io
var io = require('socket.io').listen(app.listen((process.env.PORT || 80)));

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
	console.log('Un client est connecté !');

	socket.emit('message', 'Vous êtes bien connecté !');
	 
	// Quand le serveur reçoit un signal de type "message" du client    
	socket.on('message', function (message) {
		console.log('Un client me parle ! Il me dit : ' + message);
	});	
	
	socket.on('creation_joueur', function (message) {
		console.log('Un client veux le pseudo suivant : ' + message);

		var patternRegex = /[\n\r\s]+/g;
		var result = patternRegex.test(message);

		//Le pseudo contient un espace ou un retour à la ligne
		if(result === true){
			socket.emit("message_serveur", 'Le pseudo contient un espace ou un retour à la ligne.');
		//Le pseudo n'a pas d'espace ou de retour à la ligne
		}else{
			//Si le pseudo est déjà dans la tableau
			if(pseudo.indexOf(message) !== -1){
				console.log("Le pseudo est pris.");
				socket.emit('message_serveur', 'Le pseudo est déjà pris');
			//Sinon il est pas dans le tableau
			}else{
				socket.emit('message_serveur', 'Le pseudo est libre');
			}
		}
	});
	
	socket.on('validation_joueur', function (message) {
		pseudo.push(message);
		socket.emit('reception_liste_joueurs', pseudo.toString());
		console.log('Liste des pseudo push aux clients : ' + pseudo.toString());
	});
});
