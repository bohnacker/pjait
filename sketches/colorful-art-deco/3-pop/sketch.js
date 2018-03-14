// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 170;
var marginTop = 150;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "MAYBE";

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
	textFont("Arial", 100);
}

function draw() {
	background(255);
	scale(2);


	colorMode(RGB, 255, 255, 255, 1);

	textX = marginLeft;
	textY = marginTop + 100;

	//randomSeed(4);
	for (var i = 0; i < typedText.length; i++) {
		var c = typedText[i];
		if (letters[c]) {
			push();
			translate(textX, textY);

			for (var j = 0; j < 6; j++) {
				fill(0, 0, 0, 150);
				textAlign(RIGHT)
				push();
				//rotate(PI*j/45*mouseX*0.05);
				translate(j * mouseX * 0.02, j * mouseY * 0.02)

				var w = letters[c]();

				pop()

			}


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
		E: draw_E,
		M: draw_M,
		Y: draw_Y,
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_A() {
	stroke(0);

	stroke(255, 100, 30);
	line(0, 0, 35, -100);
	line(70, 0, 35, -100);
	line(10, -30, 50, -55);
	strokeWeight(0.5);
	line(4, -10, 55, -40);
	//text("A",0,0);



	return 70;
}

function draw_B() {
	stroke(0);

	//text("B",0,0);

	stroke(255, 100, 30);
	line(0, 0, 0, -100);
	noFill()
	arc(0, -67, 100, 65, radians(-90), radians(20));
	arc(0, -32, 110, 65, radians(-23), radians(90));
	line(0, -80, 48, -60);
	strokeWeight(0.5);
	line(0, -90, 50, -70);



	return 70;
}

function draw_E() {
	stroke(0);

	//text("B",0,0);

	stroke(255, 100, 30);
	line(0, 0, 0, -100);

	line(0, 0, 70, 0);
	line(0, -50, 50, -50);
	line(0, -100, 70, -100);

	line(0, -30, 48, 0);
	strokeWeight(0.5);
	line(0, -35, 55, 0);



	return 80;
}

function draw_M() {
	stroke(0);



	stroke(255, 100, 30);
	line(0, 0, 0, -100);
	line(80, 0, 80, -100);

	line(0, -100, 40, 0);
	line(40, 0, 80, -100);

	line(0, -50, 28, -30);
	strokeWeight(0.5);
	line(0, -35, 35, -13);



	return 90;
}

function draw_Y() {
	stroke(0);



	stroke(255, 100, 30);
	line(40, 0, 40, -50);


	line(0, -100, 40, -50);
	line(40, -50, 80, -100);

	line(9, -90, 55, -70);
	strokeWeight(0.5);
	line(20, -75, 51, -62);



	return 90;
}