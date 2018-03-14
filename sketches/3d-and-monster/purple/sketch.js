// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 0;
var marginTop = 0;
var textX = marginLeft;
var textY = 0;
var textScale = 2;
var lineHeight = 120;
var typedText = "MONSTERS";


function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
}

function draw() {
	background(255);
	scale(textScale);

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
		A: draw_A,
		B: draw_B,
		M: draw_M,
		O: draw_O,
		N: draw_N,
		S: draw_S,
		T: draw_T,
		E: draw_E,
		R: draw_R,
		C: draw_C,
		D: draw_D,
		" ": function() { return 30 },
	};
}


function draw_A() {

	noStroke();
	fill('#d824cd');
	rect(20, 20, 60, 60, 15);

	fill('white');
	rect(40, 70, 20, 50, 15);

	fill('#d824cd');
	rect(20, 50, 20, 60, 15);

	fill('#d824cd');
	rect(60, 50, 20, 60, 15);

	var e1 = new Eye(50, 45, 30);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();


	return 70;
} // A function for each letter

function draw_M() {

	noStroke();
	fill('#d824cd');
	rect(20, 20, 20, 30, 15);

	fill('#d824cd');
	rect(20, 20, 50, 27, 15);

	fill('#d824cd');
	rect(70, 20, 50, 27, 15);

	fill('white');
	rect(40, 70, 20, 50, 15);

	fill('#d824cd');
	rect(20, 20, 20, 90, 15);

	fill('#d824cd');
	rect(60, 30, 20, 80, 15);

	fill('#d824cd');
	rect(100, 20, 20, 90, 15);

	fill('#d824cd');
	rect(20, 20, 35, 20, 15);

	fill('#d824cd');
	rect(85, 20, 35, 20, 15);

	e1 = new Eye(52, 45, 25);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));


	e1.display();

	e2 = new Eye(88, 45, 25);

	e2.update((mouseX / textScale - textX), (mouseY / textScale - textY));


	e2.display();

	return 110;

}

function draw_O() {

	noStroke();
	fill('#d824cd');
	rect(20, 20, 60, 90, 15);

	e1 = new Eye(50, 65, 30);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	return 70;

}

function draw_N() {

	noStroke();


	fill('white');
	rect(40, 70, 20, 50, 15);

	fill('#d824cd');
	rect(20, 20, 20, 90, 15);

	fill('#d824cd');
	rect(60, 20, 20, 90, 15);

	push();
	rotate(radians(-27.5));
	fill('#d824cd');
	rect(6, 32, 18, 97, 15);
	pop();

	noStroke();

	e1 = new Eye(35, 48, 20);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	return 70;

}

function draw_S() {

	noStroke();

	fill('#d824cd');
	rect(25, 20, 45, 20, 15);

	fill('#d824cd');
	rect(30, 90, 45, 20, 15);


	fill('#d824cd');
	rect(25, 55, 50, 20, 15);


	fill('#d824cd');
	rect(20, 20, 25, 55, 40);

	fill('#d824cd');
	rect(55, 55, 25, 55, 40);

	fill('#d824cd');
	rect(43.2, 75, 35, 20, 15);

	fill('#d824cd');
	rect(21.8, 35, 35, 20, 15);



	noStroke();
	e1 = new Eye(53, 85, 20);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	e2 = new Eye(47, 45, 20);

	e2.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e2.display();

	return 68;

}

function draw_T() {

	noStroke();
	fill('#d824cd');
	rect(40, 20, 20, 90, 15);

	fill('#d824cd');
	rect(20, 20, 60, 25, 15);

	noStroke();
	e1 = new Eye(50, 33, 20);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	return 70;

}

function draw_E() {


	noStroke();

	fill('#d824cd');
	rect(20, 20, 60, 20, 15);

	fill('#d824cd');
	rect(20, 90, 60, 20, 15);


	fill('#d824cd');
	rect(20, 55, 47, 20, 15);


	fill('#d824cd');
	rect(20, 20, 25, 90, 15);

	fill('#d824cd');
	rect(20, 70, 34.8, 20, 15);

	fill('#d824cd');
	rect(20, 40, 34.8, 20, 15);



	e1 = new Eye(45, 80, 20);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	e2 = new Eye(45, 50, 20);

	e2.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e2.display();

	return 70;

}

function draw_R() {

	noStroke();

	fill('#d824cd');
	rect(20, 20, 60, 45, 15);

	fill('#d824cd');
	rect(20, 60, 60, 30, 30);

	fill('#d824cd');
	rect(20, 20, 20, 90, 15);

	fill('#d824cd');
	rect(60, 65, 20, 45, 15);

	fill('white');
	rect(40, 70, 20, 50, 15);

	noStroke();
	e2 = new Eye(50, 45, 30);

	e2.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e2.display();

	return 70;
}

function draw_B() {

	noStroke();

	fill('#d824cd');
	rect(20, 20, 60, 45, 15);

	fill('#d824cd');
	rect(20, 65, 60, 45, 15);

	fill('#d824cd');
	rect(20, 20, 48.5, 80, 15);


	noStroke();
	e1 = new Eye(50, 80, 20);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	e2 = new Eye(50, 45, 20);

	e2.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e2.display();

	return 70;
}

function draw_C() {

	noStroke();
	fill('#d824cd');
	rect(20, 20, 60, 45, 15);

	fill('#d824cd');
	rect(20, 65, 60, 45, 15);

	fill('white');
	rect(50, 50, 30, 30, );

	fill('#d824cd');
	rect(20, 30, 40, 60, 15);

	fill('#d824cd');
	rect(20, 50, 44.8, 30, 30);

	fill('#d824cd');
	rect(55, 70, 25, 28, 15);

	fill('#d824cd');
	rect(55, 35, 25, 28, 15);


	noStroke();
	e1 = new Eye(50, 65, 30);

	e1.update((mouseX / textScale - textX), (mouseY / textScale - textY));

	e1.display();

	return 70;

}

function draw_D() {

	noStroke();
	fill('#d824cd');
	rect(20, 20, 40, 90, 15);

	fill('#d824cd');
	rect(20, 20, 60, 90, 70);

	noStroke();
	e1 = new Eye(50, 65, 30);

	e1.update(mouseX, mouseY);

	e1.display();

	return 70;
}



function Eye(tx, ty, ts) {
	this.x = tx;
	this.y = ty;
	this.size = ts;
	this.angle = 0;
	this.over = false;
	this.clicked = false;

	this.update = function(mx, my) {
		this.angle = atan2(my - this.y, mx - this.x);

		var d = dist(mx, my, this.x, this.y);
		if (d < this.size / 2 && mouseIsPressed) {
			this.clicked = true;
		} else {
			this.clicked = false;
		}
		if (d < this.size / 2) {
			this.over = true;
		} else {
			this.over = false;
		}
	};

	this.display = function() {
		push();
		translate(this.x, this.y);
		if (this.over == true) {
			fill(0);
			rect(-this.size / 2, 0, this.size, 2, 1);

		} else {
			fill(255);
			ellipse(0, 0, this.size, this.size);
			rotate(this.angle);
			fill(153, 204, 0);
			ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
		}

		pop();
	};

}