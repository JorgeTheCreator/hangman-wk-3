//Global Variable
//-------------------------------------------------
// Arrays and variable for holding data
var wordOptions = ["george","adams","thomas","monroe"];

var selectedWord = "";

var lettersInWord =[];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetter=[];

//Game Counter

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// Funcitons
//-------------------------------------------------

function startGame(){
//note for mysself math.randon generates a random number between 0.0 to 0.9
// then multiplyes it be the lent *4
selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
lettersInWord = selectedWord.split("");
numBlanks= lettersInWord.length;

//Reset
guessesLeft = 9;
wrongLetter = [];
blanksAndSuccesses =[];

// populate blanks and succes with the right number of blanks.
 for(var i=0; i<numBlanks; i++){
 	blanksAndSuccesses.push("_");
 }
// change html to reflect round conditions
document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
document.getElementById("numGuess").innerHTML =guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;


//testing debugging
console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

}

//Main Process
//-------------------------------------------------
// initiate the code first time
startGame();
//register keyclicks
//Key codes - A number which represents an actual key on the keyboard
document.onkeyup = function(word){

	var letterGuessed = String.fromCharCode(word.keyCode).toLowerCase();
	// testing/ debugging
	console.log(letterGuessed);
};





