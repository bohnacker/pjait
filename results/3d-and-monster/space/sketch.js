// no need to change anything from here ... ----------------------

var letters = {};

var system;
var frameA = 0;
var birthRate = 20;
var startHeight = 0;
var startCount = 0;
var xLineCoordinates = [];
var yLineCoordinates = [];
var zLineCoordinates = [];
var currentRotY = 0;
var currentRotX = -0.31;
var globalRotY = 0.02;
var shapeArray = [3, 4, 66];
var shapeArrayRes = [3, 4, 33];
var shapeIndex = 2;

//var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();

var dragged = false;

var coordMin = -800;
var coordMax = 800;

var initialMouseX = 0;
var initialMouseY = 0;
var initialRotX = 0;
var initialRotY = 0;

var marginLeft = 280;
var marginTop = 200;
var textX = 100;
var textY = 150;
var lineHeight = 200;
var typedText = "typo";

var mouseXs = [];
var mouseYs = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	



	ortho(-width / 2, width / 2, -height / 2, height / 2);
	initLetters();
	fill(0);
	frameRate(60);

	system = new ParticleSystem(createVector(windowWidth / 2, startHeight));
	system.addParticle();
	//stroke(0);

	for (var i = 0; i < 1000; i++) {
		xLineCoordinates.push(random(coordMin, coordMax));
		yLineCoordinates.push(random(coordMin, coordMax));
		zLineCoordinates.push(random(coordMin, coordMax));
	}

	directionalLight(253, 73, 113, 1.5, 0, -0.5);
	directionalLight(58, 251, 255, -1, 0, -0.5);

	noStroke();
}

function mousePressed() {
	initialMouseX = this.mouseX;
	initialMouseY = this.mouseY;
	initialRotX = currentRotX;
	initialRotY = currentRotY;
	dragged = false;

}

function mouseDragged() {
	dragged = true;
	currentRotY = initialRotY + ((this.mouseX - initialMouseX) * 2) / (this.width / 2);
	currentRotX = initialRotX + ((this.mouseY - initialMouseY) * 2) / (this.width / 2);
}

function mouseReleased() {
	if (!dragged) {
		if (shapeIndex < shapeArray.length - 1) {
			shapeIndex++;
		} else {
			shapeIndex = 0;
		}
	}
}

function draw() {
	background(0);

  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;

  	pointLight(250, 250, 250, locX, locY, 200);

	from = color(255, 0, 0, 0.2 * 255);
  	to = color(0, 0, 255, 0.2 * 255);
  	c1 = lerpColor(from, to, .33);
  	c2 = lerpColor(from, to, .66);

	rotateX(currentRotX + radians(-rotationX));
	rotateY(currentRotY + globalRotY + radians(-rotationZ));

	for (var i = 0; i < xLineCoordinates.length; i++) {
		push();
		translate(xLineCoordinates[i], yLineCoordinates[i], zLineCoordinates[i]);
		normalMaterial();
		fill(255);
		sphere(1);
		pop();
	}

	if (!mouseIsPressed) {
		globalRotY += 0.002;
	}




	system.run();
	everyAFrames();

	mouseXs.push(mouseX);
	mouseYs.push(mouseY);
	if (mouseXs.length > 3) {
		mouseXs.shift();
		mouseYs.shift();
	}

	translate(-width / 2, -height / 2);
	tint(255, 127);
	scale(2);

	textX = marginLeft;
	textY = marginTop + 100;

	randomSeed(0);

	for (var i = 0; i < typedText.length; i++) {
		var c = typedText[i];
		if (letters[c]) {
			push();
			translate(textX, textY);

			var r = random(1, 3);

			for (var n = 0; n < mouseXs.length; n++) {
				// this part is for rotating each letter ---------------
				push();
				translate(50, -50, 0);
				//rotateX(radians(mouseYs[n] - height / 2) / r);
		
				//rotateY(radians(mouseXs[n] - width / 2) / r);
				translate(-50, 50, 0);
				// -----------------------------------------------------

				var w = letters[c]();
				pop();
			}

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





function everyAFrames() {

	if (frameA < birthRate) {
		frameA++;
	} else {
		system.addParticle();
		frameA = 0;
	}
}

var Particle = function(position) {
	this.velocity = createVector(0, 2);
	this.position = position.copy();
	this.position.y = -(windowHeight / 2) - 350;
	this.position.x = random(-windowWidth / 2, windowWidth / 2);
	this.position.z = random(600, -600);
	this.rotationSpeedX = random(0, 0.02);
	this.rotationSpeedY = random(0, 0.02);
	this.rotationSpeedZ = random(0, 0.02);
	this.lifespan = 800.0;
};

Particle.prototype.run = function() {
	this.update();
	this.display();
};

Particle.prototype.update = function() {
	this.position.add(this.velocity);
	this.lifespan -= 1;
};

Particle.prototype.display = function() {
	noStroke();

	fill(255);

};

// Is the particle still useful?
Particle.prototype.isDead = function() {
	if (this.lifespan < 0) {
		return true;
	} else {
		return false;
	}
};

var ParticleSystem = function(position) {
	this.origin = position.copy();
	this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
	this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
	for (var i = this.particles.length - 1; i >= 0; i--) {
		var p = this.particles[i];
		p.run();
		if (p.isDead()) {
			this.particles.splice(i, 1);
		}
	}
};

function animateCircle(circleY, yVel) {

	circleY += yVel;

	return [circleY, yVel];
}


function initLetters() {
	// Add your calls to the letter functions here


	letters = {
		A: draw_a,
		t: draw_t,
		C: draw_C,
		p: draw_p,
		o: draw_o,
		y: draw_y,
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_a() {
	ambientMaterial(0, 255, 255);

	push();
	translate(30, 0, -10);
	rect(10, -40, 20, 40);
	pop();

	push();
	translate(25, 0, -15);
	rect(20, -45, 15, 15);
	pop();

	push();
	translate(80, 0, 40);
	rect(-30, -80, 20, 40);
	pop();

	push();
	translate(90, 0, 40);
	rect(-30, -120, 20, 40);
	pop();

	push();
	translate(100, 0, -10);
	rect(-20, -120, 15, 20);
	pop();

	push();
	translate(105, 0, -10);
	rect(10, -40, 20, 40);
	pop();

	push();
	translate(135, 0, 40);
	rect(-30, -80, 20, 40);
	pop();

	push();
	translate(125, 0, 40);
	rect(-30, -120, 20, 40);
	pop();

	push();
	translate(100, 0, -10);
	rect(-30, -60, 35, 20);
	pop();



	return 130;
}

function draw_t() {
	//fill(0, 30);
	ambientMaterial(28, 75, 255);

	push();
	translate(55, -10, 0);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(80, -100, 0);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(55, -40, -5);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(50, -50, 0);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(45, -30, 10);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(39, -105, 15);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(20, -105, 5);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(25, -98, -15);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(70, -119, -5);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(87, -106, 15);
	box(5, 5, 5, 60, 0);
	pop();


	push();
	translate(80, -100, -15);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(56, -110, 20);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(45, -65, -5);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(40, -95, -4);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(70, -100, 10);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(30, -90, 20);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(44, -20, -10);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(30, 0, 10);
	rect(10, -40, 20, 40);
	pop();

	push();
	translate(70, 0, 20);
	rect(-30, -80, 20, 40);
	pop();

	push();
	translate(110, 0, 30);
	rect(-70, -105, 20, 25);
	pop();

	push();
	translate(100, 0, -15);
	rect(-95, -120, 90, 15);
	pop();

	push();
	translate(100, 0, -20);
	rect(-80, -105, 60, 15);
	pop();


	return 130;
}

function draw_p() {

	//fill(c1);

	ambientMaterial(236, 54, 141);

	push();
	translate(42, -110, -6);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(80, -96, 10);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(35, -40, -25);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(86, -48, 15);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(45, -30, 10);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(49, -20, 5);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(40, -45, 5);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(30, -85, 5);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(70, -110, -15);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(67, -45, 25);
	box(5, 5, 5, 60, 0);
	pop();


	push();
	translate(100, -70, 0);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(80, -60, 8);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(85, -65, -4);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(40, -95, -4);
	box(5, 5, 5, 60, -40);
	pop();
	
	push();
	translate(30, 0, -10);
	rect(0, -40, 20, 40);
	pop();

	push();
	translate(70, 0, 40);
	rect(-40, -80, 20, 40);
	pop();

	push();
	translate(110, 0, -30);
	rect(-80, -105, 20, 25);
	pop();

	push();
	translate(100, 0, 10);
	rect(-60, -120, 45, 25);
	pop();

	push();
	translate(100, 0, 30);
	rect(-25, -110, 25, 15);
	pop();

	push();
	translate(100, 0, 30);
	rect(-15, -100, 20, 40);
	pop();

	

	push();
	translate(100, 0, -30);
	rect(-60, -65, 45, 25);
	pop();

	return 130;
}

	function draw_o() {

	ambientMaterial(255, 81, 84);

	//fill(c2);

	push();
	translate(130, -10, 0);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(40, -30, -10);
	box(15, 15, 15, 60, -40);
	pop();

	

	push();
	translate(80, -100, 0);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(35, -40, -25);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(96, -50, -5);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(45, -30, 10);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(49, -20, 5);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(80, -15, 5);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(30, -85, 5);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(70, -20, -5);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(67, -15, 15);
	box(5, 5, 5, 60, 0);
	pop();


	push();
	translate(100, -70, 0);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(80, -60, 8);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(85, -65, -4);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(40, -95, -4);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(70, -100, 10);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(30, -90, 10);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(94, -20, -10);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(70, 0, -10);
	rect(-45, -80, 20, 40);
	pop();

	push();
	translate(110, 0, -20);
	rect(-85, -105, 20, 25);
	pop();

	push();
	translate(100, 0, 10);
	rect(-60, -120, 45, 25);
	pop();

	push();
	translate(30, 0, -40);
	rect(50, -40, 20, 20);
	pop();

	push();
	translate(70, 0, 20);
	rect(10, -80, 20, 40);
	pop();

	push();
	translate(110, 0, -10);
	rect(-30, -105, 20, 25);
	pop();

	push();
	translate(100, 0, -35);
	rect(-60, -25, 45, 25);
	pop();


	return 120;
}
function draw_y() {

	ambientMaterial(68, 3, 129);

	push();
	translate(60, -85, 0);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(35, -90, 0);
	box(15, 15, 15, 60, -40);
	pop();

	push();
	translate(55, -40, -5);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(50, -50, 0);
	box(10, 10, 10, 60, -40);
	pop();

	push();
	translate(45, -30, 10);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(41, -5, 10);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(20, -105, 5);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(25, -98, -15);
	box(10, 10, 10, 60, 0);
	pop();

	push();
	translate(30, -115, -5);
	box(5, 5, 5, 60, 0);
	pop();

	push();
	translate(87, -106, 15);
	box(5, 5, 5, 60, 0);
	pop();


	push();
	translate(65, -90, 15);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(36, -100, 20);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(45, -65, -5);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(40, -95, -4);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(70, -100, -10);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(30, -90, 20);
	box(5, 5, 5, 60, -40);
	pop();

	push();
	translate(44, -20, -10);
	box(5, 5, 5, 60, -40);
	pop();
	
	push();
	translate(30, 0, -10);
	rect(10, -40, 20, 40);
	pop();

	push();
	translate(70, 0, 30);
	rect(-30, -60, 20, 20);
	pop();

	push();
	translate(110, 0, 15);
	rect(-75, -75, 30, 15);
	pop();


	push();
	translate(110, 0, -10);
	rect(-85, -90, 50, 15);
	pop();

	push();
	translate(100, 0, -10);
	rect(-95, -120, 30, 15);
	pop();

	push();
	translate(100, 0, -10);
	rect(-35, -120, 30, 15);
	pop();

	push();
	translate(100, 0, -20);
	rect(-40, -105, 25, 15);
	pop();


	return 120;
}
function draw_C() {

	push();
	translate(20, 0, 30);
	rotate(radians(20));
	rect(-10, -110, 20, 110);
	pop();

	push();
	translate(100, 0, -30);
	rotate(radians(-20));
	rect(-10, -110, 20, 110);
	pop();

	push();
	translate(30, -40, 0);
	rect(0, -10, 60, 20);
	pop();

	return 50;
}