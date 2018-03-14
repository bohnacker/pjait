// no need to change anything from here ... ----------------------


var letters = {};

var marginLeft = 20;
var marginTop = 50;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "FAKE";


var palette;

var song;
var playMode = 'restart';

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
	//colorMode(HSB, 360, 100, 100, 100);
	colorMode(RGB, 255, 255, 255, 255)

	frameRate(15);

	palette = [color(255, 0, 255, 200), color(0, 0, 255, 200), color(0, 255, 0, 150), color(255, 255, 0, 150), color(255, 0, 0, 150), color(0, 0, 255, 150), color(0, 255, 255, 150)]

	song = loadSound("noise_2.mp3");

}


function draw() {
	background(0);
	scale(2);

	textX = marginLeft;
	textY = marginTop + 100;


	//randomSeed(0);

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

	noLoop();
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
		typedText = typedText.slice(0, -1);
		console.log(typedText);
	}
	song.play();
	loop();
}

function mouseMoved() {
	loop();

}
// ... to here -----------------------------------------------------



function initLetters() {
	// Add your calls to the letter functions here

	letters = {
		A: draw_A,
		E: draw_E,
		I: draw_I,
		F: draw_F,
		K: draw_K,
		L: draw_L,
		H: draw_H,
		M: draw_M,
		N: draw_N,
		V: draw_V,
		X: draw_X,
		Y: draw_Y,
		W: draw_W,
		Z: draw_Z,
		T: draw_T,
		C: draw_C,
		O: draw_O,
		Q: draw_Q,
		R: draw_R,
		D: draw_D,
		S: draw_S,
		P: draw_P,
		B: draw_B,
		J: draw_J,
		G: draw_G,
		U: draw_U,
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_A() {

	drawRectanglePath(5, 0, 35, -100, 25);
	drawRectanglePath(65, 0, 35, -100, 25);
	drawRectanglePath(15, -25, 55, -40, 5);

	return 100;
}

function draw_Z() {

	drawRectanglePath(20, -100, 65, -100, 20);
	drawRectanglePath(20, 0, 65, 0, 20);
	drawRectanglePath(85, -100, 20, 0, 30);

	return 100;
}

function draw_E() {
	drawRectanglePath(20, 0, 20, -100, 30);
	drawRectanglePath(15, -50, 55, -50, 15);
	drawRectanglePath(15, -100, 55, -100, 10);
	drawRectanglePath(15, 0, 55, 0, 30, 15);

	return 100;
}

function draw_F() {
	drawRectanglePath(20, 0, 20, -100, 30);
	drawRectanglePath(25, -50, 65, -50, 20);
	drawRectanglePath(25, -100, 65, -100, 20);


	return 90;
}

function draw_T() {
	drawRectanglePath(50, 0, 50, -100, 20);
	drawRectanglePath(20, -100, 80, -100, 15);


	return 100;
}

function draw_K() {

	drawRectanglePath(20, 0, 20, -100, 30);
	drawRectanglePath(75, 0, 35, -50, 15);
	drawRectanglePath(75, -100, 35, -50, 15);

	return 110;
}

function draw_I() {
	drawRectanglePath(20, 0, 20, -100, 30);

	return 100;
}

function draw_L() {
	drawRectanglePath(20, 0, 20, -100, 30);
	drawRectanglePath(15, 0, 55, 0, 15);

	return 100;
}

function draw_H() {
	drawRectanglePath(20, 0, 20, -100, 30);
	drawRectanglePath(15, -50, 65, -50, 10);
	drawRectanglePath(75, 0, 75, -100, 30);

	return 100;
}

function draw_M() {
	drawRectanglePath(20, 0, 20, -100, 30);
	drawRectanglePath(20, -100, 55, -50, 10);
	drawRectanglePath(85, -100, 55, -50, 10);
	drawRectanglePath(85, 0, 85, -100, 30);

	return 130;
}

function draw_N() {
	drawRectanglePath(20, 0, 20, -100, 40);
	drawRectanglePath(20, -100, 85, 0, 20);
	drawRectanglePath(85, 0, 85, -100, 40);

	return 130;
}

function draw_V() {

	drawRectanglePath(20, -100, 47, 0, 40);
	drawRectanglePath(85, -100, 47, 0, 40);


	return 100;
}

function draw_X() {
	drawRectanglePath(20, -100, 85, 0, 25);
	drawRectanglePath(85, -100, 20, 0, 25);


	return 100;
}

function draw_Y() {
	drawRectanglePath(20, -100, 55, -50, 15);
	drawRectanglePath(85, -100, 55, -50, 15);
	drawRectanglePath(55, -50, 55, 0, 15);

	return 100;
}

function draw_W() {
	drawRectanglePath(20, -100, 40, 0, 40);
	drawRectanglePath(70, -50, 40, -0, 20);
	drawRectanglePath(70, -50, 100, -0, 20);
	drawRectanglePath(120, -100, 100, 0, 40);

	return 150;
}

function draw_C() {
	drawRectangleArc(50, -50, 45, -50, PI, 2 * PI);

	return 90;
}

function draw_O() {
	drawRectangleArc(50, -50, 35, -50, 0, 2 * PI);

	return 100;
}

function draw_S() {
	drawRectangleArc(60, -75, 45, -25, PI, 2 * PI);
	drawRectangleArc(40, -25, 45, -25, 0, PI);

	return 120;
}

function draw_Q() {
	drawRectangleArc(50, -50, 35, -50, 0, 2 * PI);
	drawRectanglePath(95, 0, 55, -50, 25);

	return 140;
}

function draw_P() {
	drawRectanglePath(20, 0, 20, -100, 40);
	drawRectangleArc(35, -75, 45, -25, 0, PI);

	return 100;
}

function draw_R() {
	drawRectanglePath(20, 0, 20, -100, 40);
	drawRectangleArc(35, -75, 45, -25, 0, PI);
	drawRectanglePath(85, 0, 55, -50, 25);

	return 140;
}

function draw_D() {
	drawRectanglePath(20, 0, 20, -100, 40);
	drawRectangleArc(40, -50, 35, -50, 0, PI);

	return 120;
}

function draw_B() {
	drawRectanglePath(20, 0, 20, -100, 40);
	drawRectangleArc(35, -75, 45, -25, 0, PI);
	drawRectangleArc(35, -25, 45, -25, 0, PI);

	return 120;
}


function draw_J() {
	drawRectanglePath(15, -100, 55, -100, 15);
	drawRectanglePath(60, -10, 60, -100, 25);
	drawRectangleArc(30, -25, 25, -25, 0.5 * PI, 1.5 * PI);

	return 120;
}

function draw_G() {
	//drawRectangleArc(50, -50, 35, -50, 0, 1.5*PI);
	drawRectangleArc(50, -50, 45, -50, PI, 2 * PI);
	drawRectanglePath(45, -40, 95, -40, 10);
	drawRectangleArc(55, -35, 45, -35, 0.5 * PI, 1.5 * PI);

	return 140;
}

function draw_U() {
	drawRectanglePath(0, -10, 0, -100, 25);
	drawRectanglePath(60, -10, 60, -100, 25);
	drawRectangleArc(30, -25, 25, -25, 0.5 * PI, 1.5 * PI);

	return 100;
}

function drawRectanglePath(x1, y1, x2, y2, n) {
	for (var i = 0; i < n; i++) {
		var t = i / (n - 1);
		var x = lerp(x1, x2, t) + random(-6, 6);
		var y = lerp(y1, y2, t);

		//squareColor = color(random(0, 360), 100, 100, random(0, 100));
		squareColor = palette[floor(random(0, 7))]
		fill(squareColor);
		strokeWeight(0);
		rect(x, y, random(8, 18), random(1, 4));
	}
}


function drawRectangleArc(x1, y1, w, h, start, stop) {


	for (var i = 0; i < 2 * PI; i = i + 0.09) {
		//var t = i / (n-1);
		var x = x1 + sin(i) * w + random(-6, 6)
		var y = y1 + cos(i) * h

		if (i > start && i < stop) {

			squareColor = palette[floor(random(0, 7))]
			fill(squareColor);
			strokeWeight(0);
			rect(x, y, random(8, 18), random(1, 4));

		}
	}
}