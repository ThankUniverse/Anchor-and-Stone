//// Anchor and Stone ////

/* Special Note for prospect : 
Comments are important for several reasons:
- They allow to make the code more readable, to leave explanations/descriptive of what the code produces for our collaborators. 

- They increase the overall maintainability of the code on one hand and on the other hand they allow to spot whatever change even after a long absence in the code. 

*/

//Create map

let map = [];
	map[0] = "Quai Nord de Palambre</br>Quartier du bar";
	map[1] = "Quai Nord de Palambre</br>Quai de chargement";
	map[2] = "Quai Nord de Palambre</br>Ponton Nord";
	map[3] = "Quai Nord de Palambre</br>Entrepot de marchandise";
	map[4] = "Quai Nord de Palambre</br>Bateau de transit";
//Bar map	
	map[5] = "Entrée du Bar - Le Profond'Ames -";
	map[7] = "Bar - Le Profond'Ames -";
	map[9] = "Fond du Bar - Le Profond'Ames -";
	map[11] = "Toilettes - Le Profond'Ames -";
//Create the text

let text = [];
	text[0] = "Me voila dans le quartier Nord des quais de Palambre, une citée portuaire interdite aux autoritées. Y a que des malfrats par ici ! Mais bon moi j'ai pas trop eu l'choix... Je suis né ici.</br>A part ce bar a ma gauche y a pas grand chose dans l'coin. Y a ce gars, d'la dernière fois qui m'attend à l'intérieur...</br>En face c'est les pontons et à droite, y a des haut murs qui bloquent l'accès aux quai de chargement... Il serait p't'être temps que j'me decide a entrer pour me rechauffé, c'est pas la soirée la plus chaude que j'ai connu !";
	text[1] = "Quai de chargement";
	text[2] = "La brise est fraiche s'te nuit, j'entend encore la musique du bar, on est pas si loin.</br> Il y a un banc qui fait face a la mer.</br>C'est pas tres recommandable par ici ! Y a des petites frappes qui trainent pas loin a ce qu'on dit... </br> Comme endroit tu me dira, y a mieux... Mais si j'ai vraiment pas l'choix...";
	text[3] = "Y a un entrepot a marchandise qui prend tout l'espace dans ce coin ci, j'pourrais essayer d'rentrer. </br> Sa a l'air bien isole à l'interieur";
	text[4] = "Il y a un vieux bateau en bois au bout du pont d'vant moi, j'pourrais peut-etre y dormir jusqu'a d'main matin. </br> Du coup je pourrais etre le premier sur place quand les transporteurs viendront decharger.</br> Y s'on toujours besoin de main d'oeuvre d't'facon...";
//Bar Text
	text[5] = "Me voila dans le bar qu'on appel le Profond'Ames. Et y a du monde aujourd'hui. Sont tous aglutiné d'vant le bar, moi aussi j'aurais bien b'soin d'un verre ! ";
	text[7] = "";
	text[9] = "";
	text[11] = "";

//Define the current location value and pic the index in the array
let mapLocation = 0; 


////Create game message

let gameMessage = [];
	gameMessage[0] = "";
	gameMessage[1] = "Je ne peux pas aller plus loin, y'a que d'la flotte par là !";
	gameMessage[2] = "Je suis perdu dans mes pensées, j'aimerai savoir quoi faire";
	gameMessage[3] = "Si seulement, je savais ou aller... Il faut que je me decide...";

//Declare the variable contain the info message to display during the game
let gameMessageIndex = 0;



// Set Input and Output variables to target

let userInput = document.querySelector("#userInput");
//Select location
let output = document.querySelector("#location");
//Select text
let content = document.querySelector("#content");
//Display game Message
let gameInfo = document.querySelector("#gameMessage")

//Console log that all variables are loaded
console.log("All variables loaded");


//Render on loading

output.innerHTML = map[mapLocation];
content.innerHTML = text[mapLocation]; 
gameInfo.innerHTML = gameMessage[gameMessageIndex];




////======= FUNCTION =======////


// set the value of the content to default to create animation on text effect
function resetBeforerender() {
	content.style.transition = "1s";
	content.style.opacity ="0";
	/*output.style.opacity ="0";*/

}


//Display the updated map, location and game Info messages when function call
function render() {
	output.innerHTML = map[mapLocation];
	/*output.style.transition = "0.5s";
	output.style.opacity = "1";*/
	content.style.opacity ="0";
	content.style.transition ="ease 2s";
	content.innerHTML = text[mapLocation]; 
	content.style.opacity ="1";
	gameInfo.innerHTML = gameMessage[gameMessageIndex];
}


//Set the gameMessage as default position (0)
function setdefault() {
	gameMessageIndex = 0;
	gameInfo.innerHTML = gameMessage[gameMessageIndex];
}


//Reset the form after submitting the value
function resetform() {
	document.getElementById("sendInput").reset();
}


//Store updated value into variable action, mapLocation and gamemessageIndex
function store() {

	let action = document.getElementById("userInput").value.toLowerCase();
	console.log(action);

//The system to move inside and between map
	switch(action) {
    case "nord":
    if (mapLocation === 3 || mapLocation === 4) {
    	gameMessageIndex = 1;	
    } else if (mapLocation === 11){
    	gameMessageIndex = 3;
    	mapLocation = mapLocation;
    } else {
        mapLocation +=2;
        gameMessageIndex = 0};

        break;
    case "sud":
    if (mapLocation <=1) {
    	gameMessageIndex = 1;		
    } else if (mapLocation === 5) { 
    	mapLocation = mapLocation;
    	gameMessageIndex = 1;
    } else {
        mapLocation -=2;
        gameMessageIndex = 0};

   		break;
    case "ouest":
    if (mapLocation === 0 || mapLocation === 2 || mapLocation === 4) {
    	gameMessageIndex = 1;		
    } else if (mapLocation === 7 || mapLocation === 9 || mapLocation === 11) {
		mapLocation = mapLocation;
		gameMessageIndex = 1;    	
    } else {
    	mapLocation -=1;
        gameMessageIndex = 0};

    break;
    case "est":
    if (mapLocation === 1 || mapLocation === 3 || mapLocation === 4) {
    	gameMessageIndex = 1;		
    } else {
    	mapLocation +=1;
        gameMessageIndex = 0};
    break;
    case "entrer":
    if (mapLocation === 0) {
    	mapLocation = 5;
    } else {
    	gameMessageIndex = gameMessageIndex;
    }
    break;
    case "sortir":
    if (mapLocation === 5) {
    	mapLocation = 0;
    	gameMessageIndex = 0;
    } else {
    	gameMessageIndex = gameMessageIndex;
    }
    break;
    default:
    if (gameMessageIndex = 0 || 1) {
    	gameMessageIndex = 2;
    }
};
console.log("mapLocation = " + mapLocation);
console.log("gameMessageIndex = " + gameMessageIndex);

 //Display updated gamecontent
resetform();
resetBeforerender();
setTimeout("render()", 1000) 
}

// Set the value og the health bar
let healthBarValue = 30;

// Display the color on the health bar refered to variable " healthBar" current value

let healthBar = document.getElementById("wave");
let healthBarTwo = document.getElementById("wave-two");
let healthBarThree = document.getElementById("wave-three");

if (healthBarValue <= 20) {
	healthBar.style.filter = "brightness(0.5) sepia(1) hue-rotate(-60deg) saturate(5)";
	healthBarTwo.style.filter = "brightness(0.5) sepia(1) hue-rotate(-60deg) saturate(5)";
	healthBarThree.style.filter = "brightness(0.5) sepia(1) hue-rotate(-60deg) saturate(5)";
	} else {
	healthBar.style.filter = "brightness(0.5) sepia(1) hue-rotate(75deg) saturate(5)";	
	healthBarTwo.style.filter = "brightness(0.5) sepia(1) hue-rotate(75deg) saturate(5)";	
	healthBarThree.style.filter = "brightness(0.5) sepia(1) hue-rotate(75deg) saturate(5)";	
	}
