
// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 20;
var marginTop = 50;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "ABB";

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
}

function draw() {
	background(255);
	scale(1);

	textX = marginLeft;
	textY = marginTop + 100;

	//randomSeed(4);
	for (var i = 0; i < typedText.length; i++) {
		var c = typedText[i];
		if (letters[c]) {
			push();
			translate(textX, textY);
			var w = letters[c]();
			textX += w;
			pop();
		} else if (c == "\n") {
			textX = marginLeft;
			textY += lineHeight;
		}
	}
}

function keyTyped() {
	if (letters[key]) {
		typedText += key;
	}
}

function keyPressed() {
	if (keyCode == RETURN) {
		typedText += "\n";
	}
	if (keyCode == BACKSPACE || keyCode == DELETE) {
		if (typedText.length > 1) typedText = typedText.slice(0, -1);
		console.log(typedText);
	}
}

// ... to here -----------------------------------------------------


function initLetters() {
	// Add your calls to the letter functions here

	letters = {
		A: draw_A,
		B: draw_B,
		C: draw_C,
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_A() {
push();
	line(5, 0, 35, -100);
	line(65, 0, 35, -100);
	line(15, -40, 55, -40);

pop();
	return 70;
}

function draw_B() {

	line(10, 0, 10, -100);
	arc(10, -67, 67, 67, radians(-90), radians(90));
	arc(10, -33, 67, 67, radians(-90), radians(90));

	return 50;
}

function draw_C() {

	arc(10, -33, 67, 67, radians(-90), radians(90));

	return 50;
}
