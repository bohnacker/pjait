// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 100;
var marginTop = 100;
var textX = marginLeft;
var textY = 150;
var lineHeight = 120;
var typedText = "WAWA";

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
}

function draw() {
	background(255);
	scale(1.5);

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
		W: draw_W,
		V: draw_V,
		X: draw_X,
		Y: draw_Y, 
		Z: draw_Z,
		
		" ": function() { return 30 },
	};
}

// A function for each letter

function draw_A () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (16,0, 60,-100);
	line (60,-100, 108, 0);
	strokeWeight (4);
	line (6-pomf,0,26+pomf,0);
	line (98-pomf,0,118+pomf,0);
	line (52-pomf,-50,72+pomf,-50);

	return 75;
}

	
	
function draw_B() {
	
		var pomf=mouseX*0.1;
		
		strokeWeight (4);
		line (10,-100,10,0);
		line (10,-100,70,-75);
		line (70,-75,10,-50);
		line (10,-50,70,-25);
		line (70,-25,10,0);
		strokeWeight (4);
		line (10-pomf,-50,30+pomf,-50);
		
		
		return 100;
		
}

function draw_C () {
	
	pomf=mouseX*0.1

	translate (0,-100)
	strokeWeight (4);	
	line (15, 50, 90, 10);
	line (15, 50, 90, 90);
	strokeWeight (4);
	line (90,100-pomf,90,80+pomf)
	line (90,20-pomf, 90, 00+pomf)
	
	return 70;
	
}

function draw_D () {
	
	pomf=mouseX*0.1
	
		translate (0,-110)
	
	strokeWeight (4);
	line (15, 10, 15, 110); //lewa
	line (15,10, 45,10)
	line (15, 110, 45, 110)
	line (45,110, 90, 65)
	line (45, 10, 90, 65)
	strokeWeight (4);
	line (5-pomf, 10, 25+pomf, 10 ) // gorna lewa
	line (5-pomf, 110, 25+pomf, 110 ) // dolna lewa
	
	return 100;
}
function draw_E () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (16,-100,16,0);
	line (16,-100,70,-100);
	line (16,-50,50,-50);
	line (16,0,70,0);
	strokeWeight (4);
	line (50,-60-pomf,50,-40+pomf);
	line (70,-110-pomf,70,-90+pomf);
	line (70,-10-pomf,70,10+pomf);
	
	return 100;
}

function draw_F () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (16,-100,16,0);
	line (16,-100,70,-100);
	line (16,-50,50,-50);
	strokeWeight (4);
	line (6-pomf,0,26+pomf,0);
	line (50,-60-pomf,50,-40+pomf);
	line (70,-110-pomf,70,-90+pomf);
	
	return 100;
}

function draw_G () {
	
	pomf=mouseX*0.1

	translate (0,-100)
	strokeWeight (4);
	line (15, 50, 90, 10);
	line (15, 50, 90, 90);
	strokeWeight (4);
	line (90,20-pomf, 90,0+pomf)
	line (90, 90, 90, 50)
	line (80-pomf, 50, 100+pomf, 50)
	
	return 110;
	
}

function draw_H () {
	
	pomf=mouseX*0.1
	 
	translate (0,-110)
	strokeWeight (4);
	line (15, 10, 15, 110); //lewa
	line (85, 10, 85, 110); //prawa
	line (15, 60, 85, 60); //środkowa
	strokeWeight (4);
	line (5-pomf, 10, 25+pomf, 10 ) // gorna lewa
	line (75-pomf, 10, 95+pomf, 10 ) // gorna prawa
	line (5-pomf, 110, 25+pomf, 110 ) // dolna lewa
	line (75-pomf, 110, 95+pomf, 110 ) // dolna prawa
	
	return 100;
}

function draw_I () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (65, -100, 65,0); //środkowa
	strokeWeight (4);
	line (55-pomf, -100, 75+pomf,-100)
	line (55-pomf, 0, 75+pomf,0)
	
	return 130;
	
}
	
function draw_J() {
	
		var pomf=mouseX*0.1;
		
		translate (0,-10)
	strokeWeight (4);
	line (10,-90,100,-90); 
	line (100,-90,100,0);  
	line (100,0,55,20);
	line (55,20,10,0);
    line (10,0,10,-20);
    strokeWeight (4);
    line (0-pomf,-20,20+pomf,-20);
	line (10,-100-pomf,10,-80+pomf);	
		return 100;
		
}

function draw_K () {

	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (16,-100,16,0);
	line (16,-40,70,-100);
	line (16,-60,70,0);
	strokeWeight (4);
	line (60-pomf,0,80+pomf,0);
	line (6-pomf,0,26+pomf,0);
	line (60-pomf,-100,80+pomf,-100);
	line (6-pomf,-100,26+pomf,-100);
	
	return 100;	
	
}

function draw_L () {
	
		var pomf=mouseX*0.1;
		
		strokeWeight (4);
		line (50,-100,50,0);
		line (50,0,115,0);
		line (50,0,50,-10);
		strokeWeight (4);
		line (115, -10+pomf, 115, 10-pomf)
		line (40-pomf,-100,60+pomf,-100);
		
		return 95;
}

function draw_M () {
	
		var pomf=mouseX*0.1;
		
		strokeWeight (4);
		line (20,0,20,-100);
		line (20,-100,55,-50);
		line (55,-50,90,-100);
		line (90,-100,90,0);
		strokeWeight (4);
		line (80-pomf,0,100+pomf,0)
		line (10-pomf,0,30+pomf,0);
		return 100;
		
}

function draw_N () {
	
		var pomf=mouseX*0.1;
		
		strokeWeight (4);
		line (20,0,20,-100); 
		line (20,-100,90,0);
		line (90,-100,90,0);
		strokeWeight (4);
		line (80-pomf,-100,100+pomf,-100)
		line (10-pomf,0,30+pomf,0); 
		return 100;
}


function draw_O () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	strokeWeight (4);
	line (20, 40, 20, 80);
	line (20, 80, 45, 110);
	line (45, 110, 90, 110);
	line (90,110, 110, 80);
	line (110, 80, 110, 40);
	line (20, 40, 45, 10);
	line (45, 10, 90, 10);
	line (90,10, 110, 40);
	strokeWeight (4);
	line (45-pomf,60,90+pomf,60)

		return 100;	
}
	
function draw_P () {
	

		var pomf=mouseX*0.1;
		strokeWeight (4);
		line (20,0,20,-100); 
		line (20,-100,70,-70);
		line (70,-70,20,-50);
		strokeWeight (4);	
		line (10-pomf,0,30+pomf,0); 
		return 100;
		
}

	
function draw_R () {
	
		var pomf=mouseX*0.1;
		
		strokeWeight (4);
		line (20,0,20,-100); 
		line (20,-100,70,-70);
		line (70,-70,20,-50);
		line (20,-50,70,0);
		strokeWeight (4);
		line (60-pomf,0,80+pomf,0);
		line (10-pomf,0,30+pomf,0); 
		return 100;
}

function draw_S () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (65,-100,85,-80);
	line (65,-100,40,-75);
	line (40,-75,85,-35);
	line (85,-35,60,-10);
	line (40,-30,60,-10);
	strokeWeight (4);
	line (75-pomf,-80,95+pomf,-80);
	line (30-pomf,-30,50+pomf,-30);
	
	
	return 100;
	
}	

function draw_T () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	strokeWeight (4);
	line (20, 10, 110, 10); //górna
	line (65, 10, 65, 110); //środkowa
	strokeWeight (4);
	line (65-pomf, 110, 65+pomf, 110); //dolna
	line (20, 0-pomf, 20, 20+pomf); //lewa
	line (110, 0-pomf, 110, 20+pomf); //prawa
	
		
		return 100;
		
	
}

function draw_U () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	strokeWeight (4);
	line (20, 10, 20, 80);
	line (20, 80, 45, 110);
	line (45, 110, 90, 110);
	line (90,110, 110, 80);
	line (110, 80, 110, 10);
	strokeWeight (4);	
	line (10-pomf, 10, 30+pomf, 10);
	line (100-pomf, 10, 120+pomf,10);
	
	return 100; 
	
}

function draw_W () {
	
	pomf=mouseX*0.1
	
	
	strokeWeight (4);
	line (60, 0, 16,-100);
	line (60,0, 108,-100);
	line (60,-100,108,0);
	line (108,0,152,-100);
	strokeWeight (4);
	line (98-pomf,0,118+pomf,0);
	line (50-pomf,-100,70+pomf,-100);
	line (142-pomf,-100,162+pomf,-100);
	line (50-pomf,0,70+pomf,0);
	line (100-pomf,-100,115+pomf,-100);
	line (10-pomf,-100,25+pomf,-100);  
	return 120;
	
}
	
function draw_V() {

	var pomf=mouseX*0.1;
		
	strokeWeight (4);
	line (60, 0, 16, -100);
	line (60,0, 108,-100)
	strokeWeight (4);
	line (50-pomf,0,70+pomf,0);
	line (100-pomf,-100,115+pomf,-100);
	line (10-pomf,-100,25+pomf,-100); 
	
	return 110;
	
}

function draw_X () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (60,-100,108,0);
	line (60,0,108,-100);
	strokeWeight (4);
	line (50-pomf,-100,70+pomf,-100);
	line (50-pomf,0,70+pomf,0);
	line (98-pomf,-100,118+pomf,-100);
	line (98-pomf,0,118+pomf,0);
	
	return 100;	
}

function draw_Y () {
	
	pomf=mouseX*0.1
	
	strokeWeight (4);
	line (60,-100,84,-50);
	line (60,0,108,-100);
	strokeWeight (4);
	line (50-pomf,-100,70+pomf,-100);
	line (50-pomf,0,70+pomf,0);
	line (98-pomf,-100,118+pomf,-100);

	
	return 100;
	
}

function draw_Z () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	strokeWeight (4);
	line (15, 10, 85, 10); //lewa
	line (85, 10, 15, 110) //ukos
	line (15,110, 85, 110) //dół
	strokeWeight (4);
	line (15, 0-pomf, 15, 20+pomf) //lewagórna
	line (85, 100-pomf, 85, 120+pomf); //prawadolna
	
	return 100;
	
}