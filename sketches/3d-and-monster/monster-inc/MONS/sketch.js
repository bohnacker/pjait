
// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 150;
var marginTop = 20;
var textX = marginLeft;
var textY = 0;
var textScale = 2.5;
var lineHeight = 100;
var typedText = "YES";


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
// ... to here -----------------------------------------------------


function initLetters() {
	// Add your calls to the letter functions here

	letters = {
		A: draw_A,
		O: draw_O,
		U: draw_U,
		E: draw_E,
		S: draw_S,
		Y: draw_Y,
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_A() {

	strokeWeight(1);
	stroke('#dfc686');

	
	fill('#dfc686');
	triangle(22, 20, 27, 36, 35, 28.5);	

	fill('#dfc686');
	triangle(79, 20, 73, 36, 65, 28.5);

	fill('#dfc686');
	triangle(21.9, 18.9, 30, 15, 26, 24.13);

	fill('#dfc686');
	triangle(79.2, 18.9, 71, 15, 74.8, 24.13);


	noStroke();

	fill('#00baca');
	ellipse(50, 55, 60);


	fill('white');
	rect(40, 65, 20, 50, 15);

	fill('#6b5dd2');
	ellipse(30, 55, 5);
	fill('#6b5dd2');
	ellipse(32, 52, 5.5);
	fill('#6b5dd2');
	ellipse(36, 40, 7);
	fill('#6b5dd2');
	ellipse(65, 40, 7, 4);
	fill('#6b5dd2');
	ellipse(68, 55, 9, 6);
	fill('#6b5dd2');
	ellipse(43, 60, 6);
	fill('#6b5dd2');
	ellipse(33, 70, 3);
	fill('#6b5dd2');
	ellipse(65, 68, 4);
	
	var e1 = new Eye(50, 45, 23);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	return 85;
}


function draw_O() {

	strokeWeight(1);
	stroke('#baa37a');

	
	fill('#baa37a');
	triangle(27, 27, 27, 35, 35, 28.5);
	
	fill('#baa37a');
	triangle(73, 27, 73, 35, 65, 28.5);


	noStroke();

	fill('#cddc5f');
	ellipse(50, 55, 60);

	fill('#7eb744');
	ellipse(50, 53.95, 28);


	var e1 = new Eye(50, 55, 23);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();

	return 85;
}

function draw_U() {

	noStroke();

	fill('#f7bd35');
	ellipse(50, 64, 60, 40);

	fill('white');
	rect(43.5, 15, 13, 50, 15);


	fill('#f7bd35');
	rect(20, 23, 23.5, 50, 20);

	fill('#f7bd35');
	rect(56.5, 23, 23.5, 50, 20);

	fill('#726958');
	rect(59, 64, 10, 4);

	fill('#726958');
	ellipse(68, 73, 7);

	fill('#b49253');
	rect(56, 58, 25, 2);

	



	fill('#7d655d');
	ellipse(32, 38, 18);

	fill('#7d655d');
	ellipse(68, 38, 18);
	
	var e1 = new Eye(32, 38, 13);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	var e1 = new Eye(68, 38, 13);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	return 85;
}

function draw_E() {

	noStroke();

	fill('#ff6142');
	ellipse(50, 55, 60);

	fill('#ffd77b');
	rect(17.5, 60, 50, 7, 15);

	fill('#ffd77b');
	rect(17, 46, 48, 5, 18);

	fill('#ffd77b');
	rect(23, 32, 30, 6, 18);

	fill('#ffd77b');
	rect(26, 75, 20, 3, 18);


	noFill();
	strokeWeight(5);
	stroke('white');
	ellipse(50, 55, 65);

	noStroke();

	fill('#fcb581');
	triangle(62, 14, 47, 25.1, 69, 32);

	noStroke();

	
	fill('white');
	rect(43.5, 55, 50, 17, 15);

	strokeWeight(0.5);
	stroke(0);

	fill('white');
	rect(60, 55, 7, 5);

	fill('white');
	rect(67, 55, 7, 5);

	noStroke();
		
	var e1 = new Eye(52, 40, 17);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	return 85;
}


function draw_S() {

	
	noStroke();

	fill('#7b77bd');
	rect(20, 23, 50, 50, 20);

	fill('#7b77bd');
	rect(20, 35, 50, 50, 20, 15, 20, 20);

	fill('#7b77bd');
	ellipse(44, 27, 20);

	fill('#7b77bd');
	ellipse(59, 27, 20);


	fill('white');
	rect(35, 37, 43, 17, 15);

	fill('white');
	rect(13, 54, 43, 17, 15);


	fill('#7b77bd');
	rect(20, 47, 50, 13, 15);

	strokeWeight(3.5);
	stroke('#7b77bd');
	line(30, 15, 35, 25);

	strokeWeight(4);
	stroke('#7b77bd');
	line(35, 10, 41, 27);

	strokeWeight(4.5);
	stroke('#7b77bd');
	line(43, 7, 45, 25);

	strokeWeight(0.6);
	stroke(0);

	fill('white');
	triangle(47, 37, 55, 37, 51, 40);
	fill('white');
	triangle(55, 37, 63, 37, 59, 40);


	
	noStroke();

	var e1 = new Eye(44, 27, 12);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();

	var e1 = new Eye(59, 27, 12);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	return 85;
}

function draw_Y() {

	strokeWeight(1);
	stroke('#8e5e20');

	
	fill('#8e5e20');
	triangle(20, 10, 26, 35, 44, 28.5);
	
	fill('#8e5e20');
	triangle(56, 7, 74, 22, 60, 28.5);

	fill('#8e5e20');
	triangle(75, 28, 85, 21, 60, 16);

	noStroke();

	fill('#f7bd15');
	rect(37, 42, 23.5, 42, 20);

	strokeWeight(21);
	stroke('#f7bd15');
	line(30, 25, 49, 54);
	line(65, 25, 49, 50);

	noStroke();

	fill('#ef8f06');
	ellipse(31, 25, 15);

	fill('#ef8f06');
	ellipse(65, 26, 15);

	fill('#91ad03');
	rect(37, 53, 23.5, 16);
	
	fill('#5b6e21');
	rect(35.5, 51, 26, 8, 10);

	noStroke();

	var e1 = new Eye(31, 25, 11);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	var e1 = new Eye(65, 26, 11);

	e1.update((mouseX / textScale-textX), (mouseY / textScale-textY) );

	e1.display();


	return 85;
}




function Eye(tx, ty, ts) {
	  this.x = tx;
	  this.y = ty;
	  this.size = ts;
	  this.angle = 0;
	  this.over = false;
	  this.clicked = false;

	  this.update = function (mx, my) {
	    this.angle = atan2(my - this.y, mx - this.x);

	    var d = dist(mx, my, this.x, this.y);
	    if (d < this.size/2 && mouseIsPressed) {
	    	this.clicked = true;
	    } else {
	    	this.clicked = false;	
	    }
	     if (d < this.size/2) {
	    	this.over = true;
	    } else {
	    	this.over = false;	
	    }
	  };

	  this.display = function () {
	    push();
	    translate(this.x, this.y);
	    if (this.over == true) {
	    	fill(0);
	    	rect(-this.size / 2, 0, this.size, 2, 1);
	    
	    } else {
	    	fill(255);
		    ellipse(0, 0, this.size, this.size);
		    rotate(this.angle);
		    fill(51);
		    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
	    }

	    pop();
	  };

}
