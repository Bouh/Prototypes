gdjs.jeuxCode = {};
gdjs.jeuxCode.repeatCount2 = 0;

gdjs.jeuxCode.repeatIndex2 = 0;

gdjs.jeuxCode.userFunc0x8d0b3a0 = function(runtimeScene) {
game = runtimeScene.getGame();
variables = game.getVariables();

server_message = variables.get("server_message");
GD_nb_joueurs = variables.get("nb_joueurs");
GD_joueurs = variables.get("joueurs");
GD_liste_joueurs = variables.get("liste_joueurs");


// Extending Array prototype with new function,
// if that function is already defined in "Array.prototype", 
// then "Object.defineProperty" will throw an exception
Object.defineProperty(Array.prototype, "array_remover", {
 // Specify "enumerable" as "false" to prevent function enumeration
 enumerable: false,
	configurable: true,

 /**
 * Create new array where specified item is removed
 * @this Array
 * @param itemToRemove Item to remove from array
 * @returns {Number} Count of removed items
 */
 value: function (itemToRemove) {
 var filteredArray = this.filter(function(item){
 return item !== itemToRemove;
 });

 return filteredArray;
 }
});
};
gdjs.jeuxCode.userFunc0x8d0b6e8 = function(runtimeScene) {
socket.on('message', function(message) {

	server_message = variables.get("server_message");
	server_message.setString(message);
});

//Message devrais pouvoir recevoir plussieur donnée sour forme de tableau
//affiche le joueur qui vien de ce déco
//supprime le joueur partie de la liste des joueurs
//supprime le joueur de la partie
//data = {player : socket.pseudo, liste_joueurs : liste_pseudo};
socket.on('player_disconnected', function(data) {
	
	//defini dans les event externe
	//server_message = variables.get("server_message");
	server_message.setString(data.player + " viens de se déconnecté");

	//defini dans les event externe
	//GD_nb_joueurs = variables.get("nb_joueurs");
	
	//supprime un joueur au nombre de joueur dnas la partie
	GD_nb_joueurs.setNumber(GD_nb_joueurs.getAsNumber()-1);
	
	//defini dans les event externe
	//GD_joueurs = variables.get("joueurs");
	//supprime l'arbo du joueurs en question

	
	//defini dans les event externe
	//GD_liste_joueurs = variables.get("liste_joueurs");

	//conversion de "liste_joueurs" en array javascript
	JS_array_liste_joueurs = GD_liste_joueurs.getAsString().split(",");
	
//TODO
	//utile pour savoir quel joueur supprimer "joueur_0" ou "joueur_1" etc...
	position_joueur_in_liste_joueur = JS_array_liste_joueurs.indexOf(data.player);

	console.log("1av: " + data.liste_joueurs.toString());

	JS_array_liste_joueurs.array_remover(data.player);

	console.log("1ap: " + data.liste_joueurs.toString());
	GD_liste_joueurs.setString(data.liste_joueurs.toString());

	//DEBUG
	console.log("1 GD_liste_joueur : " + GD_liste_joueurs.getAsString()); 

});
/*

	GD_liste_joueurs.getAsString().replace("coco,","");
	GD_liste_joueurs.getAsString().replace(",coco","");
	GD_liste_joueurs.getAsString().replace("coco","");

*/
};
gdjs.jeuxCode.userFunc0x8d0b800 = function(runtimeScene) {
socket.emit('message', 'Salut serveur, ça va ?');
};
gdjs.jeuxCode.userFunc0x8d0b560 = function(runtimeScene) {
game = runtimeScene.getGame();
variables = game.getVariables();

server_message = variables.get("server_message");
GD_nb_joueurs = variables.get("nb_joueurs");
GD_joueurs = variables.get("joueurs");
GD_liste_joueurs = variables.get("liste_joueurs");


// Extending Array prototype with new function,
// if that function is already defined in "Array.prototype", 
// then "Object.defineProperty" will throw an exception
Object.defineProperty(Array.prototype, "array_remover", {
 // Specify "enumerable" as "false" to prevent function enumeration
 enumerable: false,
	configurable: true,

 /**
 * Create new array where specified item is removed
 * @this Array
 * @param itemToRemove Item to remove from array
 * @returns {Number} Count of removed items
 */
 value: function (itemToRemove) {
 var filteredArray = this.filter(function(item){
 return item !== itemToRemove;
 });

 return filteredArray;
 }
});
};
gdjs.jeuxCode.userFunc0x8d0b250 = function(runtimeScene) {
var joueurs = variables.get("joueurs");
var child = joueurs.getAllChildren();

var count = 0;
for (var k in child) {
	if (child.hasOwnProperty(k)) {
		++count;
	}
}
console.log("Nombre d'enfants de Joueurs : " + count );
nb_joueurs = variables.get("nb_joueurs");
nb_joueurs.setString(count);
};
gdjs.jeuxCode.userFunc0x8d0b330 = function(runtimeScene) {
loop_count = variables.get("loop_count");
loop_count_value = loop_count.getAsNumber();
console.log(loop_count_value + " : loop_count");
loop_count.setNumber(loop_count_value + 1);
};


gdjs.jeuxCode.GDbtnObjects1= [];
gdjs.jeuxCode.GDbtnObjects2= [];
gdjs.jeuxCode.GDbtnObjects3= [];
gdjs.jeuxCode.GDtext_951Objects1= [];
gdjs.jeuxCode.GDtext_951Objects2= [];
gdjs.jeuxCode.GDtext_951Objects3= [];
gdjs.jeuxCode.GDinput_95pseudoObjects1= [];
gdjs.jeuxCode.GDinput_95pseudoObjects2= [];
gdjs.jeuxCode.GDinput_95pseudoObjects3= [];
gdjs.jeuxCode.GDnormal_95BTNObjects1= [];
gdjs.jeuxCode.GDnormal_95BTNObjects2= [];
gdjs.jeuxCode.GDnormal_95BTNObjects3= [];
gdjs.jeuxCode.GDoutput_95serverObjects1= [];
gdjs.jeuxCode.GDoutput_95serverObjects2= [];
gdjs.jeuxCode.GDoutput_95serverObjects3= [];
gdjs.jeuxCode.GDJoueurObjects1= [];
gdjs.jeuxCode.GDJoueurObjects2= [];
gdjs.jeuxCode.GDJoueurObjects3= [];
gdjs.jeuxCode.GDDEBUGObjects1= [];
gdjs.jeuxCode.GDDEBUGObjects2= [];
gdjs.jeuxCode.GDDEBUGObjects3= [];
gdjs.jeuxCode.GDswitch_95sceneObjects1= [];
gdjs.jeuxCode.GDswitch_95sceneObjects2= [];
gdjs.jeuxCode.GDswitch_95sceneObjects3= [];
gdjs.jeuxCode.GDtxt_95pseudoObjects1= [];
gdjs.jeuxCode.GDtxt_95pseudoObjects2= [];
gdjs.jeuxCode.GDtxt_95pseudoObjects3= [];

gdjs.jeuxCode.conditionTrue_0 = {val:false};
gdjs.jeuxCode.condition0IsTrue_0 = {val:false};
gdjs.jeuxCode.condition1IsTrue_0 = {val:false};
gdjs.jeuxCode.condition2IsTrue_0 = {val:false};
gdjs.jeuxCode.condition3IsTrue_0 = {val:false};
gdjs.jeuxCode.conditionTrue_1 = {val:false};
gdjs.jeuxCode.condition0IsTrue_1 = {val:false};
gdjs.jeuxCode.condition1IsTrue_1 = {val:false};
gdjs.jeuxCode.condition2IsTrue_1 = {val:false};
gdjs.jeuxCode.condition3IsTrue_1 = {val:false};

gdjs.jeuxCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.jeuxCode.GDbtnObjects1.length = 0;
gdjs.jeuxCode.GDbtnObjects2.length = 0;
gdjs.jeuxCode.GDbtnObjects3.length = 0;
gdjs.jeuxCode.GDtext_951Objects1.length = 0;
gdjs.jeuxCode.GDtext_951Objects2.length = 0;
gdjs.jeuxCode.GDtext_951Objects3.length = 0;
gdjs.jeuxCode.GDinput_95pseudoObjects1.length = 0;
gdjs.jeuxCode.GDinput_95pseudoObjects2.length = 0;
gdjs.jeuxCode.GDinput_95pseudoObjects3.length = 0;
gdjs.jeuxCode.GDnormal_95BTNObjects1.length = 0;
gdjs.jeuxCode.GDnormal_95BTNObjects2.length = 0;
gdjs.jeuxCode.GDnormal_95BTNObjects3.length = 0;
gdjs.jeuxCode.GDoutput_95serverObjects1.length = 0;
gdjs.jeuxCode.GDoutput_95serverObjects2.length = 0;
gdjs.jeuxCode.GDoutput_95serverObjects3.length = 0;
gdjs.jeuxCode.GDJoueurObjects1.length = 0;
gdjs.jeuxCode.GDJoueurObjects2.length = 0;
gdjs.jeuxCode.GDJoueurObjects3.length = 0;
gdjs.jeuxCode.GDDEBUGObjects1.length = 0;
gdjs.jeuxCode.GDDEBUGObjects2.length = 0;
gdjs.jeuxCode.GDDEBUGObjects3.length = 0;
gdjs.jeuxCode.GDswitch_95sceneObjects1.length = 0;
gdjs.jeuxCode.GDswitch_95sceneObjects2.length = 0;
gdjs.jeuxCode.GDswitch_95sceneObjects3.length = 0;
gdjs.jeuxCode.GDtxt_95pseudoObjects1.length = 0;
gdjs.jeuxCode.GDtxt_95pseudoObjects2.length = 0;
gdjs.jeuxCode.GDtxt_95pseudoObjects3.length = 0;


{


gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.jeuxCode.GDswitch_95sceneObjects1.createFrom(runtimeScene.getObjects("switch_scene"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("switch_scene", gdjs.jeuxCode.GDswitch_95sceneObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "creation_joueur", false);
}}

}


{



}


{



}


{



}


{


gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jeuxCode.userFunc0x8d0b3a0(runtimeScene);

}

} //End of subevents
}

}


{



}


{

gdjs.jeuxCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn", gdjs.jeuxCode.GDbtnObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jeuxCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.jeuxCode.GDbtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.jeuxCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn", gdjs.jeuxCode.GDbtnObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jeuxCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.jeuxCode.GDbtnObjects1[i].setAnimation(1);
}
}}

}


{



}


{



}


{



}


{

gdjs.jeuxCode.GDtxt_95pseudoObjects1.createFrom(runtimeScene.getObjects("txt_pseudo"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
{gdjs.jeuxCode.conditionTrue_1 = gdjs.jeuxCode.condition0IsTrue_0;
gdjs.jeuxCode.conditionTrue_1.val = context.triggerOnce(144487764);
}
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jeuxCode.GDtxt_95pseudoObjects1.length ;i < len;++i) {
    gdjs.jeuxCode.GDtxt_95pseudoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


{



}


{


gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
{gdjs.jeuxCode.conditionTrue_1 = gdjs.jeuxCode.condition0IsTrue_0;
gdjs.jeuxCode.conditionTrue_1.val = context.triggerOnce(144498708);
}
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jeuxCode.userFunc0x8d0b6e8(runtimeScene);

}

} //End of subevents
}

}


{

gdjs.jeuxCode.GDoutput_95serverObjects1.createFrom(runtimeScene.getObjects("output_server"));

{for(var i = 0, len = gdjs.jeuxCode.GDoutput_95serverObjects1.length ;i < len;++i) {
    gdjs.jeuxCode.GDoutput_95serverObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}
}


{



}


{

gdjs.jeuxCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
gdjs.jeuxCode.condition1IsTrue_0.val = false;
gdjs.jeuxCode.condition2IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn", gdjs.jeuxCode.GDbtnObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.jeuxCode.condition0IsTrue_0.val ) {
{
gdjs.jeuxCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.jeuxCode.condition1IsTrue_0.val ) {
{
{gdjs.jeuxCode.conditionTrue_1 = gdjs.jeuxCode.condition2IsTrue_0;
gdjs.jeuxCode.conditionTrue_1.val = context.triggerOnce(144498420);
}
}}
}
if (gdjs.jeuxCode.condition2IsTrue_0.val) {

{ //Subevents

{

gdjs.jeuxCode.GDbtnObjects2.createFrom(gdjs.jeuxCode.GDbtnObjects1);

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jeuxCode.GDbtnObjects2.length;i<l;++i) {
    if ( gdjs.jeuxCode.GDbtnObjects2[i].getVariableString(gdjs.jeuxCode.GDbtnObjects2[i].getVariables().get("type")) == "send_data" ) {
        gdjs.jeuxCode.condition0IsTrue_0.val = true;
        gdjs.jeuxCode.GDbtnObjects2[k] = gdjs.jeuxCode.GDbtnObjects2[i];
        ++k;
    }
}
gdjs.jeuxCode.GDbtnObjects2.length = k;}if (gdjs.jeuxCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jeuxCode.userFunc0x8d0b800(runtimeScene);

}


{



}

} //End of subevents
}

}

} //End of subevents
}

}


{



}


{



}


{



}


{



}


{


gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jeuxCode.userFunc0x8d0b560(runtimeScene);

}

} //End of subevents
}

}


{



}


{

gdjs.jeuxCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn", gdjs.jeuxCode.GDbtnObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jeuxCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.jeuxCode.GDbtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.jeuxCode.GDbtnObjects1.createFrom(runtimeScene.getObjects("btn"));

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
gdjs.jeuxCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn", gdjs.jeuxCode.GDbtnObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jeuxCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.jeuxCode.GDbtnObjects1[i].setAnimation(1);
}
}}

}


{



}


{



}


{



}


{


gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
{gdjs.jeuxCode.conditionTrue_1 = gdjs.jeuxCode.condition0IsTrue_0;
gdjs.jeuxCode.conditionTrue_1.val = context.triggerOnce(144496980);
}
}if (gdjs.jeuxCode.condition0IsTrue_0.val) {

{ //Subevents

{



}


{


gdjs.jeuxCode.userFunc0x8d0b250(runtimeScene);

}

} //End of subevents
}

}


{


gdjs.jeuxCode.repeatCount2 = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("nb_joueurs"));
for(gdjs.jeuxCode.repeatIndex2 = 0;gdjs.jeuxCode.repeatIndex2 < gdjs.jeuxCode.repeatCount2;++gdjs.jeuxCode.repeatIndex2) {

gdjs.jeuxCode.condition0IsTrue_0.val = false;
{
{gdjs.jeuxCode.conditionTrue_1 = gdjs.jeuxCode.condition0IsTrue_0;
gdjs.jeuxCode.conditionTrue_1.val = context.triggerOnce(144497412);
}
}if (gdjs.jeuxCode.condition0IsTrue_0.val)
{

{ //Subevents: 

{


gdjs.jeuxCode.userFunc0x8d0b330(runtimeScene);

}


{

gdjs.jeuxCode.GDJoueurObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Joueur", gdjs.jeuxCode.GDJoueurObjects3).getEventsObjectsMap(), gdjs.random(200), gdjs.random(200), "");
}{for(var i = 0, len = gdjs.jeuxCode.GDJoueurObjects3.length ;i < len;++i) {
    gdjs.jeuxCode.GDJoueurObjects3[i].setAnimation(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.jeuxCode.GDJoueurObjects3.length ;i < len;++i) {
    gdjs.jeuxCode.GDJoueurObjects3[i].setVariableString(gdjs.jeuxCode.GDJoueurObjects3[i].getVariables().get("joueur_GlobalVariableString(loop_count_value)").getChild("pseudo"), "tims_" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("loop_count_value")));
}
}
}

} //Subevents end.
}
}

}

return;
}
gdjs['jeuxCode']= gdjs.jeuxCode;
