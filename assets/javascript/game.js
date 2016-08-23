//Global Variable
//-------------------------------------------------
// Arrays and variable for holding data
var wordOptions = ["pinguin","catwoman","joker","riddler"];

var selectedWord = "";

var lettersInWord =[];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetter=[];

//-----------------------------------------------------Game Counter

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// ------------------------------------------------------Funcitons
//-------------------------------------------------

function startGame(){
//note for mysself math.randon generates a random number between 0.0 to 0.9
// 
selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
lettersInWord = selectedWord.split("");
numBlanks= lettersInWord.length;

//---------------------------------------------------------Reset
guessesLeft = 9;
wrongLetter = [];
blanksAndSuccesses =[];

// populate blanks and succes with the right number of blanks.
 for(var i=0; i<numBlanks; i++){
 	blanksAndSuccesses.push("_");
 }
// change html to reflect round conditions
document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("numGuess").innerHTML =guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;


//-----------------------------------------------------testing debugging
console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);

}
function checkLetters(letter){
	// check if letter exist in code at all

	var isLetterInWord = false;

	for (var i = 0; i<numBlanks; i++) {
		if(selectedWord[i] == letter){
			isLetterInWord = true;
			

		}
	}
		//check where in the word letter exists, then populate out blanksuccesses array.
		
		if(isLetterInWord){
		for (var i = 0; i < numBlanks; i++) {
			if(selectedWord[i] == letter){
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	// Letter wasnt found ""
	else{
		wrongLetter.push(letter);
		guessesLeft--
	}
	//testing/debugging
	console.log(blanksAndSuccesses);

}

		function roundComplete(){
			console.log("win count: "+ winCount +"| lossCount: "+ lossCount + "| Guess Left:"+ guessesLeft);
			//update the html to reflect the most recent count

			document.getElementById("numGuess").innerHTML = guessesLeft;
			document.getElementById("wordToGuess").innerHTML= blanksAndSuccesses.join(" ");
			document.getElementById("wrongGuesses").innerHTML = wrongLetter.join(" ");




			// check if user won
			if(lettersInWord.toString() == blanksAndSuccesses.toString()){
				winCount++
				alert("You Won!");

			// update the wincounter in the html
				document.getElementById("wincounter").innnerHTML = winCount;
				
				startGame();
			}

			// check if user lost
		     else if (guessesLeft === 0){
				lossCount++;

				

				alert("You Lost!");



				// update the HTML
				document.getElementById("lossCounter").innerHTML = lossCount;	
				

				startGame();			

			}



		}



//Main Process
//-------------------------------------------------
// initiate the code first time
startGame();
//register keyclicks

//Key codes - A number which represents an actual key on the keyboard
document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	// testing/ debugging
	console.log(letterGuessed);
};





