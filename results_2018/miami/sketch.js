// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 20;
var marginTop = 50;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "CHILL ON";

var detail = 1.6;

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
}

function draw() {
	background(255);
	scale(3);

	textX = marginLeft;
	textY = marginTop + 100;

	//detail = map(mouseX, 0, 1000, 0.5, 3);

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

	//loop();
}
// ... to here -----------------------------------------------------


function initLetters() {
	// Add your calls to the letter functions here

	letters = {

		C: draw_C,
		H: draw_H,
		I: draw_I,
		L: draw_L,
		O: draw_O,
		N: draw_N,
		c: draw_c,
		h: draw_h,
		i: draw_i,
		l: draw_l,
		o: draw_o,
		n: draw_n,


		" ": function() { return 30 },
	};
}

// A function for each letter


function draw_C() {
	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}


	stroke(0, 157, 4);
	for (var i = 0; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dy * 2, 105 - i * dx * 2, radians(30), radians(-30));
	}

	stroke(251, 222, 3);
	for (var i = 0.5; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dx * 2, 105 - i * dy * 2, radians(30), radians(-30));
	}

	return 90;

}

function draw_H() {

	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(0, 157, 4);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -97)


	stroke(251, 222, 3);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -97)


	stroke(251, 222, 3);
	for (var i = 0.2; i < 7.2 * detail; i++)
		line(40, i * -dy - 39, 22, i * -dx - 39);

	stroke(0, 157, 4);
	for (var i = 0.6; i < 7.2 * detail; i++)
		line(40, i * dx - 60, 22, i * dy - 60);

	stroke(0, 157, 4);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * dx + 40, -3, i * dy + 40, -97)

	stroke(251, 222, 3);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * -dy + 61, -3, i * -dx + 61, -97)



	return 80;
}

function draw_I() {



	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(0, 157, 4);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -98)

	stroke(251, 222, 3);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -98)

	return 40;
}

function draw_L() {



	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(0, 157, 4);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -98)

	stroke(251, 222, 3);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -98)

	stroke(0, 157, 4);
	for (var i = 0.1; i < 12; i++)
		line(50, i * dy - 24.9, 22, i * dx - 24.9);

	stroke(251, 222, 3);
	for (var i = 0; i < 12; i++)
		line(50, i * -dx - 3, 22, i * -dy - 3);

	return 60;
}

function draw_O() {

	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}


	stroke(0, 157, 4);
	for (var i = 0; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dy * 2, 105 - i * dx * 2, radians(0), radians(0));
	}

	stroke(251, 222, 3);
	for (var i = 0.5; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dx * 2, 105 - i * dy * 2, radians(0), radians(0));
	}

	return 90;

}

function draw_N() {

	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(0, 157, 4);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -97)


	stroke(251, 222, 3);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -97)

	stroke(0, 157, 4);
	for (var i = 0; i < 5.5 * detail; i++)
		line(50, i * dy * 2 - 36, 21, i * dx * 2 - 96);

	stroke(251, 222, 3);
	for (var i = 0; i < 6 * detail; i++)
		line(50, i * -dx * 2 - 3, 21, i * -dy * 2 - 63);

	stroke(0, 157, 4);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * dx + 50, -3, i * dy + 50, -97)

	stroke(251, 222, 3);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * -dy + 71, -3, i * -dx + 71, -97)


	return 90;
}



//małe literki x-D :DD



function draw_c() {
	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}


	stroke(81, 232, 213);
	for (var i = 0; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dy * 2, 105 - i * dx * 2, radians(30), radians(-30));
	}

	stroke(249, 55, 155);
	for (var i = 0.5; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dx * 2, 105 - i * dy * 2, radians(30), radians(-30));
	}

	return 90;

}

function draw_h() {

	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(81, 232, 213);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -97)


	stroke(249, 55, 155);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -97)


	stroke(249, 55, 155);
	for (var i = 0.2; i < 7.2 * detail; i++)
		line(40, i * -dy - 39, 22, i * -dx - 39);

	stroke(81, 232, 213);
	for (var i = 0.6; i < 7.2 * detail; i++)
		line(40, i * dx - 60, 22, i * dy - 60);

	stroke(81, 232, 213);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * dx + 40, -3, i * dy + 40, -97)

	stroke(249, 55, 155);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * -dy + 61, -3, i * -dx + 61, -97)



	return 80;
}

function draw_i() {



	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(81, 232, 213);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -98)

	stroke(249, 55, 155);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -98)

	return 40;
}

function draw_l() {


	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(81, 232, 213);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -98)

	stroke(249, 55, 155);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -98)

	stroke(81, 232, 213);
	for (var i = 0.1; i < 12; i++)
		line(50, i * dy - 24.9, 22, i * dx - 24.9);

	stroke(249, 55, 155);
	for (var i = 0; i < 12; i++)
		line(50, i * -dx - 3, 22, i * -dy - 3);

	return 60;
}

function draw_o() {

	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}


	stroke(81, 232, 213);
	for (var i = 0; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dy * 2, 105 - i * dx * 2, radians(0), radians(0));
	}

	stroke(249, 55, 155);
	for (var i = 0.5; i < 7.2 * detail; i++) {
		arc(40, -50, 84 - i * dx * 2, 105 - i * dy * 2, radians(0), radians(0));
	}

	return 90;
}

function draw_n() {

	var dx = mouseX / 300 / detail;
	var dy = mouseY / 300 / detail;
	if (dx > 3 / detail) {
		dx = 3 / detail;
	}
	if (dy > 3 / detail) {
		dy = 3 / detail;
	}

	stroke(81, 232, 213);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * dy, -3, i * dx, -97)


	stroke(249, 55, 155);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * -dx + 21, -3, i * -dy + 21, -97)

	stroke(81, 232, 213);
	for (var i = 0; i < 5.5 * detail; i++)
		line(50, i * dy * 2 - 36, 21, i * dx * 2 - 96);

	stroke(249, 55, 155);
	for (var i = 0; i < 6 * detail; i++)
		line(50, i * -dx * 2 - 3, 21, i * -dy * 2 - 63);

	stroke(81, 232, 213);
	for (var i = 0.5; i < 7.2 * detail; i++)
		line(i * dx + 50, -3, i * dy + 50, -97)

	stroke(249, 55, 155);
	for (var i = 0; i < 7.2 * detail; i++)
		line(i * -dy + 71, -3, i * -dx + 71, -97)


	return 90;
}