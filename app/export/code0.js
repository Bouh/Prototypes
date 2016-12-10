gdjs.creation_95joueurCode = {};
gdjs.creation_95joueurCode.forEachIndex2 = 0;

gdjs.creation_95joueurCode.forEachObjects2 = [];

gdjs.creation_95joueurCode.forEachTemporary2 = null;

gdjs.creation_95joueurCode.forEachTotalCount2 = 0;

gdjs.creation_95joueurCode.userFunc0x8d0b250 = function(runtimeScene) {
socket = io.connect('https://gdevelop.herokuapp.com');
};
gdjs.creation_95joueurCode.userFunc0x8d0b448 = function(runtimeScene) {
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
gdjs.creation_95joueurCode.userFunc0x8d0b330 = function(runtimeScene) {
joueurs_actuel = variables.get("joueur_actuel");
socket.emit('validation_joueur', joueurs_actuel.getAsString());
console.log("Joueurs actuel : " + joueurs_actuel.getAsString());
};
gdjs.creation_95joueurCode.userFunc0x8d0b368 = function(runtimeScene) {
joueurs_actuel = variables.get("joueur_actuel");
socket.emit('creation_joueur', joueurs_actuel.getAsString());
console.log("Joueurs actuel : " + joueurs_actuel.getAsString());
};
gdjs.creation_95joueurCode.userFunc0x8d0b3a0 = function(runtimeScene) {
//Quand le pseudo à été validé et enregistré par le serveur.
socket.on('reception_liste_joueurs', function(message) {
	
	//Création d'une variable globale "liste_joueurs"
	GD_liste_joueurs = variables.get("liste_joueurs");
	//Stockage des pseudo (String) dans la variable "liste_joueurs"
	GD_liste_joueurs.setString(message);

	//conversion de "liste_joueurs" en array javascript
	JS_array_liste_joueurs = GD_liste_joueurs.getAsString().split(",");
	//Nombre de joueurs dans l'array
	JS_nb_joueurs = JS_array_liste_joueurs.length;
	
	//Création d'une variable "joueurs" qui contiendra toutes les données de chaque joueur
	GD_joueurs = variables.get("joueurs");
	//Défini le joueur actuel pour que le jeu le controle.
	GD_joueur_actuel = variables.get("joueur_actuel");
	
	//DEBUG
	console.log("JS_liste_joueur : ");
	console.log(JS_array_liste_joueurs);
	console.log("----");

	//Pour chaque joueur dans la liste des joueurs
	JS_array_liste_joueurs.forEach(function(element, index, array){
		//Création d'une structure pour chaque joueurs
		GD_joueurs.getChild("joueur_" + index).getChild("pseudo").setString(JS_array_liste_joueurs[index]);
		GD_joueurs.getChild("joueur_" + index).getChild("posX").setNumber(0);
		GD_joueurs.getChild("joueur_" + index).getChild("posY").setNumber(0);
	});

	//DEBUG
	console.log("GD_joueurs : ");
	console.log(GD_joueurs);
	
	//DEBUG
	GD_child_of_joueurs = GD_joueurs.getAllChildren();
	console.log(GD_child_of_joueurs);

	//Comptage des enfants dans GD_joueurs pour savoir le nombre de joueurs
	var count = 0;
	for (var k in GD_child_of_joueurs) {
		if (GD_child_of_joueurs.hasOwnProperty(k)) {
			++count;
		}
	}
	//création d'une variable GD pour savoir le nombre de joueurs
	GD_nb_joueurs = variables.get("nb_joueurs");
	GD_nb_joueurs.setNumber(count);
	console.log("Nombre d'enfants de Joueurs : " + GD_nb_joueurs.getAsString() );

});

//Quand un nouveau joueurs à rejoind il faut le créer pour les autres.
socket.on('newplayer', function(message) {
	
	GD_nb_joueurs = variables.get("nb_joueurs");
	GD_joueurs = variables.get("joueurs");
	GD_liste_joueurs = variables.get("liste_joueurs");

	//Ajout du joueurs a la liste des joueurs
	GD_liste_joueurs.setString(GD_liste_joueurs.getAsString() + "," + message);
	
	//Création d'une structure pour le nouveau joueur
	GD_joueurs.getChild("joueur_" + GD_nb_joueurs.getAsString()).getChild("pseudo").setString(message);
	GD_joueurs.getChild("joueur_" + GD_nb_joueurs.getAsString()).getChild("posX").setNumber(0);
	GD_joueurs.getChild("joueur_" + GD_nb_joueurs.getAsString()).getChild("posY").setNumber(0);
	
	//Ajoute le joueur au nombre de joueur dnas la partie
	GD_nb_joueurs.setNumber(GD_nb_joueurs.getAsNumber()+1);
	
	//DEBUG
	console.log("Nouveau joueur ! Nombre d'enfants de Joueurs : " + GD_nb_joueurs.getAsString());
	console.log("Nouveau joueur ! GD_joueurs : ");
	console.log(GD_joueurs);
});
};
gdjs.creation_95joueurCode.userFunc0x8d0b3d8 = function(runtimeScene) {
socket.on("message_serveur", function(message) {
	message_server = variables.get("message_server");
	message_server.setString(message);
	console.log(message);
});
};


gdjs.creation_95joueurCode.GDinput_95pseudoObjects1= [];
gdjs.creation_95joueurCode.GDinput_95pseudoObjects2= [];
gdjs.creation_95joueurCode.GDinput_95pseudoObjects3= [];
gdjs.creation_95joueurCode.GDinput_95pseudoObjects4= [];
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1= [];
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects2= [];
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects3= [];
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects4= [];
gdjs.creation_95joueurCode.GDinputObjects1= [];
gdjs.creation_95joueurCode.GDinputObjects2= [];
gdjs.creation_95joueurCode.GDinputObjects3= [];
gdjs.creation_95joueurCode.GDinputObjects4= [];
gdjs.creation_95joueurCode.GDtxt_95varObjects1= [];
gdjs.creation_95joueurCode.GDtxt_95varObjects2= [];
gdjs.creation_95joueurCode.GDtxt_95varObjects3= [];
gdjs.creation_95joueurCode.GDtxt_95varObjects4= [];
gdjs.creation_95joueurCode.GDdebugObjects1= [];
gdjs.creation_95joueurCode.GDdebugObjects2= [];
gdjs.creation_95joueurCode.GDdebugObjects3= [];
gdjs.creation_95joueurCode.GDdebugObjects4= [];
gdjs.creation_95joueurCode.GDswitch_95sceneObjects1= [];
gdjs.creation_95joueurCode.GDswitch_95sceneObjects2= [];
gdjs.creation_95joueurCode.GDswitch_95sceneObjects3= [];
gdjs.creation_95joueurCode.GDswitch_95sceneObjects4= [];
gdjs.creation_95joueurCode.GDoutput_95serverObjects1= [];
gdjs.creation_95joueurCode.GDoutput_95serverObjects2= [];
gdjs.creation_95joueurCode.GDoutput_95serverObjects3= [];
gdjs.creation_95joueurCode.GDoutput_95serverObjects4= [];
gdjs.creation_95joueurCode.GDINFO_95DebugObjects1= [];
gdjs.creation_95joueurCode.GDINFO_95DebugObjects2= [];
gdjs.creation_95joueurCode.GDINFO_95DebugObjects3= [];
gdjs.creation_95joueurCode.GDINFO_95DebugObjects4= [];
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects1= [];
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects2= [];
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects3= [];
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects4= [];

gdjs.creation_95joueurCode.conditionTrue_0 = {val:false};
gdjs.creation_95joueurCode.condition0IsTrue_0 = {val:false};
gdjs.creation_95joueurCode.condition1IsTrue_0 = {val:false};
gdjs.creation_95joueurCode.condition2IsTrue_0 = {val:false};
gdjs.creation_95joueurCode.condition3IsTrue_0 = {val:false};
gdjs.creation_95joueurCode.conditionTrue_1 = {val:false};
gdjs.creation_95joueurCode.condition0IsTrue_1 = {val:false};
gdjs.creation_95joueurCode.condition1IsTrue_1 = {val:false};
gdjs.creation_95joueurCode.condition2IsTrue_1 = {val:false};
gdjs.creation_95joueurCode.condition3IsTrue_1 = {val:false};

gdjs.creation_95joueurCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.creation_95joueurCode.GDinput_95pseudoObjects1.length = 0;
gdjs.creation_95joueurCode.GDinput_95pseudoObjects2.length = 0;
gdjs.creation_95joueurCode.GDinput_95pseudoObjects3.length = 0;
gdjs.creation_95joueurCode.GDinput_95pseudoObjects4.length = 0;
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1.length = 0;
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects2.length = 0;
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects3.length = 0;
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects4.length = 0;
gdjs.creation_95joueurCode.GDinputObjects1.length = 0;
gdjs.creation_95joueurCode.GDinputObjects2.length = 0;
gdjs.creation_95joueurCode.GDinputObjects3.length = 0;
gdjs.creation_95joueurCode.GDinputObjects4.length = 0;
gdjs.creation_95joueurCode.GDtxt_95varObjects1.length = 0;
gdjs.creation_95joueurCode.GDtxt_95varObjects2.length = 0;
gdjs.creation_95joueurCode.GDtxt_95varObjects3.length = 0;
gdjs.creation_95joueurCode.GDtxt_95varObjects4.length = 0;
gdjs.creation_95joueurCode.GDdebugObjects1.length = 0;
gdjs.creation_95joueurCode.GDdebugObjects2.length = 0;
gdjs.creation_95joueurCode.GDdebugObjects3.length = 0;
gdjs.creation_95joueurCode.GDdebugObjects4.length = 0;
gdjs.creation_95joueurCode.GDswitch_95sceneObjects1.length = 0;
gdjs.creation_95joueurCode.GDswitch_95sceneObjects2.length = 0;
gdjs.creation_95joueurCode.GDswitch_95sceneObjects3.length = 0;
gdjs.creation_95joueurCode.GDswitch_95sceneObjects4.length = 0;
gdjs.creation_95joueurCode.GDoutput_95serverObjects1.length = 0;
gdjs.creation_95joueurCode.GDoutput_95serverObjects2.length = 0;
gdjs.creation_95joueurCode.GDoutput_95serverObjects3.length = 0;
gdjs.creation_95joueurCode.GDoutput_95serverObjects4.length = 0;
gdjs.creation_95joueurCode.GDINFO_95DebugObjects1.length = 0;
gdjs.creation_95joueurCode.GDINFO_95DebugObjects2.length = 0;
gdjs.creation_95joueurCode.GDINFO_95DebugObjects3.length = 0;
gdjs.creation_95joueurCode.GDINFO_95DebugObjects4.length = 0;
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects1.length = 0;
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects2.length = 0;
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects3.length = 0;
gdjs.creation_95joueurCode.GDINFO_95pseudoObjects4.length = 0;


{

gdjs.creation_95joueurCode.GDswitch_95sceneObjects1.createFrom(runtimeScene.getObjects("switch_scene"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("switch_scene", gdjs.creation_95joueurCode.GDswitch_95sceneObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jeux", false);
}}

}


{



}


{


{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Choisissez un pseudo");
}
}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.creation_95joueurCode.userFunc0x8d0b250(runtimeScene);

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


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.creation_95joueurCode.userFunc0x8d0b448(runtimeScene);

}

} //End of subevents
}

}


{



}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{}}

}


{



}


{

gdjs.creation_95joueurCode.GDtxt_95varObjects1.createFrom(runtimeScene.getObjects("txt_var"));

for(gdjs.creation_95joueurCode.forEachIndex2 = 0;gdjs.creation_95joueurCode.forEachIndex2 < gdjs.creation_95joueurCode.GDtxt_95varObjects1.length;++gdjs.creation_95joueurCode.forEachIndex2) {
gdjs.creation_95joueurCode.GDtxt_95varObjects2.createFrom(gdjs.creation_95joueurCode.GDtxt_95varObjects1);

gdjs.creation_95joueurCode.forEachTemporary2 = gdjs.creation_95joueurCode.GDtxt_95varObjects1[gdjs.creation_95joueurCode.forEachIndex2];
gdjs.creation_95joueurCode.GDtxt_95varObjects2.length = 0;
gdjs.creation_95joueurCode.GDtxt_95varObjects2.push(gdjs.creation_95joueurCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.creation_95joueurCode.GDtxt_95varObjects2.length ;i < len;++i) {
    gdjs.creation_95joueurCode.GDtxt_95varObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.creation_95joueurCode.GDtxt_95varObjects2[i].getVariables().get("text"))));
}
}}
}

}


{



}


{

gdjs.creation_95joueurCode.GDinputObjects1.createFrom(runtimeScene.getObjects("input"));
gdjs.creation_95joueurCode.GDinput_95pseudoObjects1.createFrom(runtimeScene.getObjects("input_pseudo"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.creation_95joueurCode.GDinputObjects1.length;i<l;++i) {
    if ( !(gdjs.creation_95joueurCode.GDinputObjects1[i].getVariableString(gdjs.creation_95joueurCode.GDinputObjects1[i].getVariables().get("type")) == "input_pseudo") ) {
        gdjs.creation_95joueurCode.condition0IsTrue_0.val = true;
        gdjs.creation_95joueurCode.GDinputObjects1[k] = gdjs.creation_95joueurCode.GDinputObjects1[i];
        ++k;
    }
}
gdjs.creation_95joueurCode.GDinputObjects1.length = k;}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.creation_95joueurCode.GDinput_95pseudoObjects1.length ;i < len;++i) {
    gdjs.creation_95joueurCode.GDinput_95pseudoObjects1[i].activate(false);
}
}}

}


{



}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
{gdjs.creation_95joueurCode.conditionTrue_1 = gdjs.creation_95joueurCode.condition0IsTrue_0;
gdjs.creation_95joueurCode.conditionTrue_1.val = context.triggerOnce(144497124);
}
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.creation_95joueurCode.GDinputObjects3.createFrom(runtimeScene.getObjects("input"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("input", gdjs.creation_95joueurCode.GDinputObjects3).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{


{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}
}

} //End of subevents
}

}


{

gdjs.creation_95joueurCode.GDinputObjects3.createFrom(runtimeScene.getObjects("input"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("input", gdjs.creation_95joueurCode.GDinputObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.creation_95joueurCode.GDinputObjects4.createFrom(gdjs.creation_95joueurCode.GDinputObjects3);

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.creation_95joueurCode.GDinputObjects4.length;i<l;++i) {
    if ( gdjs.creation_95joueurCode.GDinputObjects4[i].getVariableString(gdjs.creation_95joueurCode.GDinputObjects4[i].getVariables().get("type")) == "input_pseudo" ) {
        gdjs.creation_95joueurCode.condition0IsTrue_0.val = true;
        gdjs.creation_95joueurCode.GDinputObjects4[k] = gdjs.creation_95joueurCode.GDinputObjects4[i];
        ++k;
    }
}
gdjs.creation_95joueurCode.GDinputObjects4.length = k;}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("input_pseudo");
}}

}


{

gdjs.creation_95joueurCode.GDinputObjects4.createFrom(gdjs.creation_95joueurCode.GDinputObjects3);

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.creation_95joueurCode.GDinputObjects4.length;i<l;++i) {
    if ( gdjs.creation_95joueurCode.GDinputObjects4[i].getVariableString(gdjs.creation_95joueurCode.GDinputObjects4[i].getVariables().get("type")) == "create_profile" ) {
        gdjs.creation_95joueurCode.condition0IsTrue_0.val = true;
        gdjs.creation_95joueurCode.GDinputObjects4[k] = gdjs.creation_95joueurCode.GDinputObjects4[i];
        ++k;
    }
}
gdjs.creation_95joueurCode.GDinputObjects4.length = k;}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("create_profile");
}}

}


{

gdjs.creation_95joueurCode.GDinputObjects4.createFrom(gdjs.creation_95joueurCode.GDinputObjects3);

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.creation_95joueurCode.GDinputObjects4.length;i<l;++i) {
    if ( gdjs.creation_95joueurCode.GDinputObjects4[i].getVariableString(gdjs.creation_95joueurCode.GDinputObjects4[i].getVariables().get("type")) == "oui" ) {
        gdjs.creation_95joueurCode.condition0IsTrue_0.val = true;
        gdjs.creation_95joueurCode.GDinputObjects4[k] = gdjs.creation_95joueurCode.GDinputObjects4[i];
        ++k;
    }
}
gdjs.creation_95joueurCode.GDinputObjects4.length = k;}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("oui");
}}

}


{

gdjs.creation_95joueurCode.GDinputObjects4.createFrom(gdjs.creation_95joueurCode.GDinputObjects3);

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.creation_95joueurCode.GDinputObjects4.length;i<l;++i) {
    if ( gdjs.creation_95joueurCode.GDinputObjects4[i].getVariableString(gdjs.creation_95joueurCode.GDinputObjects4[i].getVariables().get("type")) == "non" ) {
        gdjs.creation_95joueurCode.condition0IsTrue_0.val = true;
        gdjs.creation_95joueurCode.GDinputObjects4[k] = gdjs.creation_95joueurCode.GDinputObjects4[i];
        ++k;
    }
}
gdjs.creation_95joueurCode.GDinputObjects4.length = k;}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("non");
}}

}

} //End of subevents
}

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


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
gdjs.creation_95joueurCode.condition1IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "oui";
}if ( gdjs.creation_95joueurCode.condition0IsTrue_0.val ) {
{
{gdjs.creation_95joueurCode.conditionTrue_1 = gdjs.creation_95joueurCode.condition1IsTrue_0;
gdjs.creation_95joueurCode.conditionTrue_1.val = context.triggerOnce(144497628);
}
}}
if (gdjs.creation_95joueurCode.condition1IsTrue_0.val) {

{ //Subevents

{


gdjs.creation_95joueurCode.userFunc0x8d0b330(runtimeScene);

}


{


{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}
}


{


{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jeux", false);
}
}

} //End of subevents
}

}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
gdjs.creation_95joueurCode.condition1IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "non";
}if ( gdjs.creation_95joueurCode.condition0IsTrue_0.val ) {
{
{gdjs.creation_95joueurCode.conditionTrue_1 = gdjs.creation_95joueurCode.condition1IsTrue_0;
gdjs.creation_95joueurCode.conditionTrue_1.val = context.triggerOnce(144500508);
}
}}
if (gdjs.creation_95joueurCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "confirmation");
}}

}


{

gdjs.creation_95joueurCode.GDinput_95pseudoObjects1.createFrom(runtimeScene.getObjects("input_pseudo"));
gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1.createFrom(runtimeScene.getObjects("txt_pseudo"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "input_pseudo";
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1.length ;i < len;++i) {
    gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1[i].setString((( gdjs.creation_95joueurCode.GDinput_95pseudoObjects1.length === 0 ) ? "" :gdjs.creation_95joueurCode.GDinput_95pseudoObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.creation_95joueurCode.GDinput_95pseudoObjects1.length ;i < len;++i) {
    gdjs.creation_95joueurCode.GDinput_95pseudoObjects1[i].activate(true);
}
}}

}


{

gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1.createFrom(runtimeScene.getObjects("txt_pseudo"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
gdjs.creation_95joueurCode.condition1IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "create_profile";
}if ( gdjs.creation_95joueurCode.condition0IsTrue_0.val ) {
{
{gdjs.creation_95joueurCode.conditionTrue_1 = gdjs.creation_95joueurCode.condition1IsTrue_0;
gdjs.creation_95joueurCode.conditionTrue_1.val = context.triggerOnce(145351244);
}
}}
if (gdjs.creation_95joueurCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString((( gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1.length === 0 ) ? "" :gdjs.creation_95joueurCode.GDtxt_95pseudoObjects1[0].getString()));
}
{ //Subevents

{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
gdjs.creation_95joueurCode.condition1IsTrue_0.val = false;
gdjs.creation_95joueurCode.condition2IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "";
}if ( gdjs.creation_95joueurCode.condition0IsTrue_0.val ) {
{
gdjs.creation_95joueurCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "Le pseudo est libre";
}if ( gdjs.creation_95joueurCode.condition1IsTrue_0.val ) {
{
gdjs.creation_95joueurCode.condition2IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}}
}
if (gdjs.creation_95joueurCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("none");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "confirmation");
}}

}


{



}


{


gdjs.creation_95joueurCode.userFunc0x8d0b368(runtimeScene);

}

} //End of subevents
}

}


{



}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
{gdjs.creation_95joueurCode.conditionTrue_1 = gdjs.creation_95joueurCode.condition0IsTrue_0;
gdjs.creation_95joueurCode.conditionTrue_1.val = context.triggerOnce(140552012);
}
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{



}


{


gdjs.creation_95joueurCode.userFunc0x8d0b3a0(runtimeScene);

}

} //End of subevents
}

}


{



}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
{gdjs.creation_95joueurCode.conditionTrue_1 = gdjs.creation_95joueurCode.condition0IsTrue_0;
gdjs.creation_95joueurCode.conditionTrue_1.val = context.triggerOnce(140552300);
}
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.creation_95joueurCode.userFunc0x8d0b3d8(runtimeScene);

}

} //End of subevents
}

}


{

gdjs.creation_95joueurCode.GDoutput_95serverObjects1.createFrom(runtimeScene.getObjects("output_server"));

gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("message_server")) == 0;
}if (gdjs.creation_95joueurCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.creation_95joueurCode.GDoutput_95serverObjects1.length ;i < len;++i) {
    gdjs.creation_95joueurCode.GDoutput_95serverObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{



}


{


gdjs.creation_95joueurCode.condition0IsTrue_0.val = false;
gdjs.creation_95joueurCode.condition1IsTrue_0.val = false;
{
gdjs.creation_95joueurCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "Le pseudo est libre";
}if ( gdjs.creation_95joueurCode.condition0IsTrue_0.val ) {
{
gdjs.creation_95joueurCode.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}}
if (gdjs.creation_95joueurCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("Entrez un pseudo");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "confirmation");
}}

}

return;
}
gdjs['creation_95joueurCode']= gdjs.creation_95joueurCode;
