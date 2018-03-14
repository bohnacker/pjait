
// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 150;
var marginTop = 150;
var textX = marginLeft;
var textY = 150;
var lineHeight = 400;
var typedText = "ABC\nDEF";

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
	frameRate(10);
}

function draw() {
	background(255);
	scale(1);

	textX = marginLeft;
	textY = marginTop;

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

	loop();
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
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_A() {

	scale(0.7);
	draw_Shape(80, 35, 0);
  	draw_Shape(170, 35, 0);
  	draw_Shape(80, 123, 0);
  	draw_Shape(80, 210, 0);
  	draw_Shape(80, 300, 0);
  	draw_Shape(80, 390, 0);
  	draw_Shape(260, 35, 0);
  	draw_Shape(350, 35, 0);
  	draw_Shape(350, 123, 0);
  	draw_Shape(350, 210, 0);
  	draw_Shape(350, 300, 0);
  	draw_Shape(350, 390, 0);
  	draw_Shape(158, 242, 0);
  	draw_Shape(236, 210, 0);
	return 300;
}

function draw_B() {
	scale(0.7);
	draw_Shape(80, 35, 0);
  	draw_Shape(170, 35, 0);
  	draw_Shape(80, 123, 0);
  	draw_Shape(80, 210, 0);
  	draw_Shape(80, 300, 0);
  	draw_Shape(80, 390, 0);
  	draw_Shape(260, 35, 0);
  	draw_Shape(350, 35, 0);
  	draw_Shape(350, 123, 0);
  	draw_Shape(350, 210, 0);
  	draw_Shape(350, 300, 0);
  	draw_Shape(350, 390, 0);
  	draw_Shape(170, 390, 0);
  	draw_Shape(260, 390, 0);
  	draw_Shape(158, 242, 0);
  	draw_Shape(236, 210, 0);
	return 300;
}

function draw_C() {
	scale(0.7);
	draw_Shape(80, 35, 0);
  	draw_Shape(170, 35, 0);
  	draw_Shape(80, 123, 0);
  	draw_Shape(80, 210, 0);
  	draw_Shape(80, 300, 0);
  	draw_Shape(80, 390, 0);
  	draw_Shape(260, 35, 0);
  	draw_Shape(350, 35, 0);
  	draw_Shape(350, 390, 0);
  	draw_Shape(170, 390, 0);
  	draw_Shape(260, 390, 0);
  	
	return 300;
}

function draw_D() {
	scale(0.7);
	draw_Shape(80, 35, 0);
  	draw_Shape(170, 35, 0);
  	draw_Shape(80, 123, 0);
  	draw_Shape(80, 210, 0);
  	draw_Shape(80, 300, 0);
  	draw_Shape(80, 390, 0);
  	draw_Shape(260, 35, 0);
  	draw_Shape(350, 35, 0);
  	draw_Shape(350, 123, 0);
  	draw_Shape(350, 210, 0);
  	draw_Shape(350, 300, 0);
  	draw_Shape(350, 390, 0);
  	draw_Shape(170, 390, 0);
  	draw_Shape(260, 390, 0);
  	
	return 300;
}

function draw_E() {
	scale(0.7);
	draw_Shape(80, 35, 0);
  	draw_Shape(170, 35, 0);
  	draw_Shape(80, 123, 0);
  	draw_Shape(80, 210, 0);
  	draw_Shape(80, 300, 0);
  	draw_Shape(80, 390, 0);
  	draw_Shape(260, 35, 0);
  	draw_Shape(350, 35, 0);
  	draw_Shape(350, 390, 0);
  	draw_Shape(170, 390, 0);
  	draw_Shape(260, 390, 0);
  	draw_Shape(158, 242, 0);
  	draw_Shape(236, 210, 0);
	return 300;
}

function draw_F() {
	scale(0.7);
	draw_Shape(80, 35, 0);
  	draw_Shape(170, 35, 0);
  	draw_Shape(80, 123, 0);
  	draw_Shape(80, 210, 0);
  	draw_Shape(80, 300, 0);
  	draw_Shape(80, 390, 0);
  	draw_Shape(260, 35, 0);
  	draw_Shape(350, 35, 0);
  	draw_Shape(158, 242, 0);
  	draw_Shape(236, 210, 0);
	return 300;
}
function draw_Shape(x, y, a) {
	push();
	translate(x, y);
	var step = frameCount % 60;
	applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
	beginShape();
	fill(204,0,102);
	vertex(75, 47);
	vertex(87, 60);
	vertex(105, 60);
	vertex(105, 78);
	vertex(118, 90);
	vertex(105, 102);
	vertex(105, 120);
	vertex(87, 120);
	vertex(75, 133);
	vertex(63, 120);
	vertex(45, 120);
	vertex(45, 102);
    vertex(32, 90);
    vertex(45, 78);
    vertex(45, 60);
    vertex(63, 60);
    vertex(75, 47);
	endShape();

beginShape();
	scale(0.7)
	translate(32, 40);
	fill(240,128,128)
	vertex(75, 47);
	vertex(87, 60);
	vertex(105, 60);
	vertex(105, 78);
	vertex(118, 90);
	vertex(105, 102);
	vertex(105, 120);
	vertex(87, 120);
	vertex(75, 133);
	vertex(63, 120);
	vertex(45, 120);
	vertex(45, 102);
    vertex(32, 90);
    vertex(45, 78);
    vertex(45, 60);
    vertex(63, 60);
    vertex(75, 47);
	endShape();

	pop();
}

