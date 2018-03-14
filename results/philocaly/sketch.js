
// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 380;
var marginTop = 250;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "PHILOCALY";

var horScale = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
	strokeWeight(3);
}

function draw() {
	background(0);
	      // scale(1);  // Setting the background to white
        //stroke(0);          // Setting the outline (stroke) to black
       // fill(234,0,0);
	textX = marginLeft;
	textY = marginTop + 100;

	horScale = sin(frameCount / 25);

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
}

// ... to here -----------------------------------------------------


function initLetters() {
	// Add your calls to the letter functions here

	letters = {
		P: draw_P,
		H: draw_H,
		I: draw_I,
		L: draw_L,
		O: draw_O,
		C: draw_C,
		A: draw_A,
		L2: draw_L2,
		Y: draw_Y,
		
		" ": function() { return 30 },
	};
}

// A function for each letter 

function draw_P() {
push();
scale(horScale, 1);
	stroke(0,206,209);
	line(5, 0, 5, -100);
	line(50, -65, 5, -100);
	line(5, -30, 50, -65);

pop();
	return 70;
}

function draw_H() {
push();
scale(horScale, 1);
	stroke(78,149,190);
	line(10, 0, 10, -100);
	line(60, 0, 60, -100);
	line(60, -50, 10, -50);
pop();


	return 90;
}

function draw_I() {
push();
scale(horScale, 1);
    stroke(128,112,177);
	line(10, 0, 10, -100);
pop();

	return 50;
}
function draw_L() {
push();
scale(horScale, 1)
	stroke(165,86,169);
	line(5, 0, 5, -100);
	line(5, 0, 50, 0);

pop();
	return 90;
}

function draw_O() {
push();
scale(horScale, 1)
	stroke(164,87,169);
	line(25, -100, 75, -50);
	line(75, -50, 25, 0);
	line(25, 0, -25, -50);
	line(-25, -50, 25, -100);

pop();
	return 120;
}

function draw_C() {
push();
scale(horScale, 1)
stroke(190,68,162);
	line(25, -0, -25, -50);
	line(-25, -50, 25, -100);

pop();
	return 90;
}
function draw_A() {
push();
scale(horScale, 1)
stroke(209,53,158);
	line(-35, 0, 3, -100);
	line(55, 0, 3, -100);
	line(55, -0, -35, -0);


pop();
	return 80;
}

function draw_L2() {
push();
scale(horScale, 1)
	stroke(229,39,153);
    line(5, 0, 5, -100);
	line(5, 0, 50, 0);

pop();
    return 90;
}
function draw_Y() {

push();
scale(horScale, 1)
	stroke(255,20,147);
    line(10, 0, 10, -100);
    line(50, -100, 10, -50);
	line(10, -50, -30, -100);
    
pop();
    return 90;
}	 
