// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 100;
var marginTop = 100;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "ABCDEFGHIJ\nKLMNOPQRST\nUVWXYZ";

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
			//translate(textX, textY);
			var w = letters[c]();
			textX += w;
			pop();
		} else if (c == "\n") {
			textX = marginLeft;
			textY += lineHeight;
		}
	}

	//noLoop();
}

function keyTyped() {
    var k = key;
    if (!letters[k]) {
        k = k.toUpperCase();
    }
    if (letters[k]) {
         
        typedText += k;
    }
}

function keyPressed() {
	if (keyCode == RETURN) {
		typedText += "\n";
	}
	if (keyCode == BACKSPACE || keyCode == DELETE) {
		if (typedText.length > 0) typedText = typedText.slice(0, -1);
		console.log(typedText);
	}

	//loop();
}
// ... to here -----------------------------------------------------


function initLetters() {
	// Add your calls to the letter functions here

	letters = {
		A: draw_A,
		B: draw_B,
		C: draw_C,
		D: draw_D,
		E: draw_E,
		F: draw_F,
		G: draw_G,
		H: draw_H,
		I: draw_I,
		J: draw_J,
		K: draw_K,
		L: draw_L,
		M: draw_M,
		N: draw_N,
		O: draw_O,
		P: draw_P,
		R: draw_R,
		S: draw_S,
		T: draw_T,
		U: draw_U,
		V: draw_V,
		W: draw_W,
		X: draw_X,
		Y: draw_Y,
		Z: draw_Z,
		" ": draw_Space,
	};
}

// A function for each letter

function draw_Space() {

	var d = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	];
	drawGrid(d);

	return 40;
}

function draw_A() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_B() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_C() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_D() {

	var d = [
		[1, 1, 0, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 0, 0, 0]
	];
	drawGrid(d);

	return 100;
}

function draw_E() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_F() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_G() {

	var d = [
		[1, 1, 1, 1, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 1, 1, 0],
		[1, 0, 0, 1, 0],
		[1, 1, 1, 1, 0]
	];
	drawGrid(d);

	return 100;
}

function draw_H() {

	var d = [
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_I() {

	var d = [
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 1, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_J() {

	var d = [
		[1, 1, 1, 1, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 1, 0],
		[1, 0, 0, 1, 0],
		[1, 1, 1, 1, 0]
	];
	drawGrid(d);

	return 100;
}

function draw_K() {

	var d = [
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 0, 1, 0]
	];
	drawGrid(d);

	return 100;
}

function draw_L() {

	var d = [
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_M() {

	var d = [
		[1, 0, 0, 0, 1],
		[1, 1, 0, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1]
	];
	drawGrid(d);

	return 120;
}

function draw_N() {

	var d = [
		[1, 0, 0, 0, 1],
		[1, 1, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 1, 1],
		[1, 0, 0, 0, 1]
	];
	drawGrid(d);

	return 120;
}

function draw_O() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_P() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 1, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_R() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 0, 1, 0]
	];
	drawGrid(d);

	return 100;
}

function draw_S() {

	var d = [
		[1, 1, 1, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_T() {

	var d = [
		[1, 1, 1, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_U() {

	var d = [
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 1, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_V() {

	var d = [
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 1, 0, 0],
		[0, 1, 0, 0, 0]
	];
	drawGrid(d);

	return 80;
}

function draw_W() {

	var d = [
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 1, 0, 1, 1],
		[1, 0, 0, 0, 1]
	];
	drawGrid(d);

	return 120;
}

function draw_X() {

	var d = [
		[1, 0, 0, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 0, 1, 0],
		[1, 0, 0, 0, 1]
	];
	drawGrid(d);

	return 120;
}

function draw_Y() {

	var d = [
		[1, 0, 0, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0]
	];
	drawGrid(d);

	return 120;
}

function draw_Z() {

	var d = [
		[1, 1, 1, 1, 1],
		[0, 0, 0, 1, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 0, 0, 0],
		[1, 1, 1, 1, 1]
	];
	drawGrid(d);

	return 80;
}

function drawGrid(d) {
	fill(0);
	noStroke();
	for (var j = 0; j < d.length; j++) {
		for (var i = 0; i < d[j].length; i++) {
			var x = i * 20 + textX;
			var y = -100 + j * 20 + textY;

			if (d[j][i] == 1) {
				rect(x, y, 17, 17);

			} else {}

		}
	}

	/*var barWidth = 20;
	var lastBar = -1;

	function setup() {
	  colorMode(HSB, height, height, height);  
	  noStroke();
	}

	function draw() {
	  var whichBar = mouseX / barWidth;
	  if (whichBar !== lastBar) {
	    var barX = whichBar * barWidth;
	    fill(mouseY, height, height);
	    rect(barX, 0, barWidth, height);
	    lastBar = whichBar;
	  }
	}
	*/


}