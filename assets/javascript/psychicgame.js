var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	winCount = 0,
	lossCount = 0,
	currentLetter = "",
	guessCount = 9,
	guessList = [],
	userGuess = "";

var wins = document.getElementById("wins"),
	losses = document.getElementById("losses"),
	guessesLeft = document.getElementById("guessesLeft"),
	guessesSoFar = document.getElementById("guessesSoFar");

function newGame () {
	currentLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
	console.log (currentLetter);
}

function checkGuess () {
	if (keyNum>=65 && keyNum<=90) {

		console.log("User Pressed: " + userGuess);

		if (userGuess === currentLetter) {
			winCount++;
			wins.innerHTML = winCount;
			alert("You Win!")
			console.log("Win Count: " + winCount);
			resetGame();
		}

		else if (userGuess !== currentLetter && guessList.indexOf(userGuess) === -1) {
			guessList.push(userGuess);
			guessesSoFar.innerHTML = guessList.join(" , ")
			console.log("User Guesses: " + guessList);
			guessCount--;
			guessesLeft.innerHTML = guessCount;
			console.log("Guesses Left: " + guessCount)
		}
	}

	else {
		alert("Please press a valid key!")
	}
}

function checkLoss () {
	if (guessCount == 0) {
		alert("You Lose! Try Again!")
		lossCount++;
		losses.innerHTML = lossCount;
		resetGame ();
	}
}

function resetGame () {
	currentLetter = "";
	guessCount = 9;
	guessesLeft.innerHTML = guessCount;
	guessList = [];
	guessesSoFar.innerHTML = guessList;
	newGame ();
}

document.onkeyup = function (event) {
	userGuess = event.key.toLowerCase();
	keyNum = event.keyCode;
	checkGuess ();
	checkLoss ();
}

window.onload = function (e) {
	newGame();
	wins.innerHTML = winCount;
	losses.innerHTML = lossCount;
	guessesLeft.innerHTML = guessCount;
	guessesSoFar.innerHTML = guessList;
}