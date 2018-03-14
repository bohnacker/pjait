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
	scale(2);

	textX = marginLeft;
	textY = marginTop + 100;
	strokeWeight(4)
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
	
	
	line (16-pomf,0-pomf, 60+pomf,-100+pomf);
	line (60-pomf,-100-pomf, 108+pomf, 0+pomf);
	
	line (6-pomf,0,26+pomf,0);
	line (98-pomf,0,118+pomf,0);
	line (52-pomf,-50,72+pomf,-50);

	return 75;
}

	
	
function draw_B() {
	
		var pomf=mouseX*0.1;
		
		
		line (10-pomf,-100-pomf,10+pomf,0+pomf);
		line (10-pomf,-100-pomf,70+pomf,-75+pomf);
		line (70-pomf,-75-pomf,10+pomf,-50+pomf);
		line (10-pomf,-50-pomf,70+pomf,-25+pomf);
		line (70-pomf,-25-pomf,10+pomf,0+pomf);
		
		line (10-pomf,-50,30+pomf,-50);
		
		
		return 100;
		
}

function draw_C () {
	
	pomf=mouseX*0.1

	translate (0,-100)
		
	line (15-pomf, 50-pomf, 90+pomf, 10+pomf);
	line (15-pomf, 50-pomf, 90+pomf, 90+pomf);
	
	line (90,100-pomf,90,80+pomf)
	line (90,20-pomf, 90, 00+pomf)
	
	return 70;
	
}

function draw_D () {
	
	pomf=mouseX*0.1
	
		translate (0,-110)
	
	
	line (15-pomf, 10-pomf, 15+pomf, 110+pomf); //lewa
	line (15-pomf,10-pomf, 45+pomf,10+pomf)
	line (15-pomf, 110-pomf, 45+pomf, 110+pomf)
	line (45-pomf,110-pomf, 90+pomf, 65+pomf)
	line (45-pomf, 10-pomf, 90+pomf, 65+pomf)
	
	line (5-pomf, 10, 25+pomf, 10 ) // gorna lewa
	line (5-pomf, 110, 25+pomf, 110 ) // dolna lewa
	
	return 100;
}
function draw_E () {
	
	pomf=mouseX*0.1
	
	
	line (16-pomf,-100-pomf,16+pomf,0+pomf);
	line (16-pomf,-100-pomf,70+pomf,-100+pomf);
	line (16-pomf,-50-pomf,50+pomf,-50+pomf);
	line (16-pomf,0-pomf,70+pomf,0+pomf);
	
	line (50,-60-pomf,50,-40+pomf);
	line (70,-110-pomf,70,-90+pomf);
	line (70,-10-pomf,70,10+pomf);
	
	return 100;
}

function draw_F () {
	
	pomf=mouseX*0.1
	
	
	line (16-pomf,-100-pomf,16+pomf,0+pomf);
	line (16-pomf,-100-pomf,70+pomf,-100+pomf);
	line (16-pomf,-50-pomf,50+pomf,-50+pomf);
	
	line (6-pomf,0,26+pomf,0);
	line (50,-60-pomf,50,-40+pomf);
	line (70,-110-pomf,70,-90+pomf);
	
	return 100;
}

function draw_G () {
	
	pomf=mouseX*0.1

	translate (0,-100)
	
	line (15-pomf, 50-pomf, 90+pomf, 10+pomf);
	line (15-pomf, 50-pomf, 90+pomf, 90+pomf);
	
	line (90,20-pomf, 90,0+pomf)
	line (90, 90, 90, 50)
	line (80-pomf, 50, 100+pomf, 50)
	
	return 110;
	
}

function draw_H () {
	
	pomf=mouseX*0.1
	 
	translate (0,-110)
	
	line (15-pomf, 10-pomf, 15+pomf, 110+pomf); //lewa
	line (85-pomf, 10-pomf, 85+pomf, 110+pomf); //prawa
	line (15-pomf, 60-pomf, 85+pomf, 60+pomf); //środkowa
	
	line (5-pomf, 10, 25+pomf, 10 ) // gorna lewa
	line (75-pomf, 10, 95+pomf, 10 ) // gorna prawa
	line (5-pomf, 110, 25+pomf, 110 ) // dolna lewa
	line (75-pomf, 110, 95+pomf, 110 ) // dolna prawa
	
	return 100;
}

function draw_I () {
	
	pomf=mouseX*0.1
	
	
	line (65-pomf, -100-pomf, 65+pomf,0+pomf); //środkowa
	
	line (55-pomf, -100, 75+pomf,-100)
	line (55-pomf, 0, 75+pomf,0)
	
	return 130;
	
}
	
function draw_J() {
	
		var pomf=mouseX*0.1;
		
		translate (0,-10)
	
	line (10-pomf,-90-pomf,100+pomf,-90+pomf); 
	line (100-pomf,-90-pomf,100+pomf,0+pomf);  
	line (100-pomf,0-pomf,55+pomf,20+pomf);
	line (55-pomf,20-pomf,10+pomf,0+pomf);
    line (10-pomf,0-pomf,10+pomf,-20+pomf);
    
    line (0-pomf,-20,20+pomf,-20);
	line (10,-100-pomf,10,-80+pomf);	
		return 100;
		
}

function draw_K () {

	pomf=mouseX*0.1
	
	
	line (16-pomf,-100-pomf,16+pomf,0+pomf);
	line (16-pomf,-40-pomf,70+pomf,-100+pomf);
	line (16-pomf,-60-pomf,70+pomf,0+pomf);
	
	line (60-pomf,0,80+pomf,0);
	line (6-pomf,0,26+pomf,0);
	line (60-pomf,-100,80+pomf,-100);
	line (6-pomf,-100,26+pomf,-100);
	
	return 100;	
	
}

function draw_L () {
	
		var pomf=mouseX*0.1;
		
		
		line (50-pomf,-100-pomf,50+pomf,0+pomf);
		line (50-pomf,0-pomf,115+pomf,0+pomf);
		line (50-pomf,0-pomf,50+pomf,-10+pomf);
		
		line (115, -10+pomf, 115, 10-pomf)
		line (40-pomf,-100,60+pomf,-100);
		
		return 95;
}

function draw_M () {
	
		var pomf=mouseX*0.1;
		
		
		line (20-pomf,0-pomf,20+pomf,-100+pomf);
		line (20-pomf,-100-pomf,55+pomf,-50+pomf);
		line (55-pomf,-50-pomf,90+pomf,-100+pomf);
		line (90-pomf,-100-pomf,90+pomf,0+pomf);
		
		line (80-pomf,0,100+pomf,0)
		line (10-pomf,0,30+pomf,0);
		return 100;
		
}

function draw_N () {
	
		var pomf=mouseX*0.1;
		
		
		line (20-pomf,0-pomf,20+pomf,-100+pomf); 
		line (20-pomf,-100-pomf,90+pomf,0+pomf);
		line (90-pomf,-100-pomf,90+pomf,0+pomf);
		
		line (80-pomf,-100,100+pomf,-100)
		line (10-pomf,0,30+pomf,0); 
		return 100;
}


function draw_O () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	
	line (20-pomf, 40-pomf, 20+pomf, 80+pomf);
	line (20-pomf, 80-pomf, 45+pomf, 110+pomf);
	line (45-pomf, 110-pomf, 90+pomf, 110+pomf);
	line (90-pomf,110-pomf, 110+pomf, 80+pomf);
	line (110-pomf, 80-pomf, 110+pomf, 40+pomf);
	line (20-pomf, 40-pomf, 45+pomf, 10+pomf);
	line (45-pomf, 10-pomf, 90+pomf, 10+pomf);
	line (90-pomf,10-pomf, 110+pomf, 40+pomf);
	
	line (45-pomf,60,90+pomf,60)

		return 100;	
}
	
function draw_P () {
	

		var pomf=mouseX*0.1;
		
		line (20-pomf,0-pomf,20+pomf,-100+pomf); 
		line (20-pomf,-100-pomf,70+pomf,-70+pomf);
		line (70-pomf,-70-pomf,20+pomf,-50+pomf);
			
		line (10-pomf,0,30+pomf,0); 
		return 100;
		
}

	
function draw_R () {
	
		var pomf=mouseX*0.1;
		
		
		line (20-pomf,0-pomf,20+pomf,-100+pomf); 
		line (20-pomf,-100-pomf,70+pomf,-70+pomf);
		line (70-pomf,-70-pomf,20+pomf,-50+pomf);
		line (20-pomf,-50-pomf,70+pomf,0+pomf);
		
		line (60-pomf,0,80+pomf,0);
		line (10-pomf,0,30+pomf,0); 
		return 100;
}

function draw_S () {
	
	pomf=mouseX*0.1
	
	
	line (65-pomf,-100-pomf,85+pomf,-80+pomf);
	line (65-pomf,-100-pomf,40+pomf,-75+pomf);
	line (40-pomf,-75-pomf,85+pomf,-35+pomf);
	line (85-pomf,-35-pomf,60+pomf,-10+pomf);
	line (40-pomf,-30-pomf,60+pomf,-10+pomf);
	
	line (75-pomf,-80,95+pomf,-80);
	line (30-pomf,-30,50+pomf,-30);
	
	
	return 100;
	
}	

function draw_T () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	
	line (20-pomf, 10-pomf, 110+pomf, 10+pomf); //górna
	line (65-pomf, 10-pomf, 65+pomf, 110+pomf); //środkowa
	
	line (65-pomf, 110, 65+pomf, 110); //dolna
	line (20, 0-pomf, 20, 20+pomf); //lewa
	line (110, 0-pomf, 110, 20+pomf); //prawa
	
		
		return 100;
		
	
}

function draw_U () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	
	line (20-pomf, 10-pomf, 20+pomf, 80+pomf);
	line (20-pomf, 80-pomf, 45+pomf, 110+pomf);
	line (45-pomf, 110-pomf, 90+pomf, 110+pomf);
	line (90-pomf,110-pomf, 110+pomf, 80+pomf);
	line (110-pomf, 80-pomf, 110+pomf, 10+pomf);
		
	line (10-pomf, 10, 30+pomf, 10);
	line (100-pomf, 10, 120+pomf,10);
	
	return 100; 
	
}

function draw_W () {
	
	pomf=mouseX*0.1
	
	
	
	line (60-pomf, 0-pomf, 16+pomf,-100)+pomf;
	line (60-pomf,0-pomf, 108+pomf,-100+pomf);
	line (60-pomf,-100-pomf,108+pomf,0+pomf);
	line (108-pomf,0-pomf,152+pomf,-100+pomf);
	
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
		
	
	line (60-pomf, 0-pomf, 16+pomf, -100+pomf);
	line (60-pomf,0-pomf, 108+pomf,-100+pomf)
	
	line (50-pomf,0,70+pomf,0);
	line (100-pomf,-100,115+pomf,-100);
	line (10-pomf,-100,25+pomf,-100); 
	
	return 110;
	
}

function draw_X () {
	
	pomf=mouseX*0.1
	
	
	line (60-pomf,-100-pomf,108+pomf,0+pomf);
	line (60-pomf,0-pomf,108+pomf,-100+pomf);
	
	line (50-pomf,-100,70+pomf,-100);
	line (50-pomf,0,70+pomf,0);
	line (98-pomf,-100,118+pomf,-100);
	line (98-pomf,0,118+pomf,0);
	
	return 100;	
}

function draw_Y () {
	
	pomf=mouseX*0.1
	
	
	line (60-pomf,-100-pomf,84+pomf,-50+pomf);
	line (60-pomf,0-pomf,108+pomf,-100+pomf);
	
	line (50-pomf,-100,70+pomf,-100);
	line (50-pomf,0,70+pomf,0);
	line (98-pomf,-100,118+pomf,-100);

	
	return 100;
	
}

function draw_Z () {
	
	pomf=mouseX*0.1
	
	translate (0,-110)
	
	line (15-pomf, 10-pomf, 85+pomf, 10+pomf); //lewa
	line (85-pomf, 10-pomf, 15+pomf, 110+pomf) //ukos
	line (15-pomf,110-pomf, 85+pomf, 110+pomf) //dół
	
	line (15, 0-pomf, 15, 20+pomf) //lewagórna
	line (85, 100-pomf, 85, 120+pomf); //prawadolna
	
	return 100;
	
}