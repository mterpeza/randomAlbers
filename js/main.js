function randomize() {
	document.getElementById('squareFour').style.background = randomColors();
	document.getElementById('squareThree').style.background = randomColors();
	document.getElementById('squareTwo').style.background = randomColors();
	document.getElementById('squareOne').style.background = randomColors();
}

// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function randomColors() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}