 
// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 50;
var marginTop = 100;
var textX = marginLeft;
var textY = 150;
var lineHeight = 150;
var typedText = "HELLO";
var zoom = 2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	initLetters();
	noFill();
	strokeWeight(0);
}

function draw() {
	background(0);
	scale(zoom);

	randomSeed(4);
    drawBackground();
    
	textX = marginLeft;
	textY = marginTop + 100;

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

	//loop();
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
		N: draw_N,
		O: draw_O,
		Q: draw_Q,
		U: draw_U,
        G: draw_G,
        H: draw_H,
        I: draw_I,
        J: draw_J,
        K: draw_K,
        L: draw_L,
        M: draw_M,
        S: draw_S,
        R: draw_R,	
		A: draw_A,
		W: draw_W,
        V: draw_V,
        B: draw_B,
        P: draw_P,
        C: draw_C,
        D: draw_D,
        T: draw_T,
		E: draw_E,
        F: draw_F,
        X: draw_X,
        Y: draw_Y,
        Z: draw_Z,
		
		" ": function() { return 30 },
	};
}


function specialEllipse(x, y, w, h) {
	strokeWeight(0);
	fill(255, 255, 255, 200);
	var w = sin(frameCount * random() / 30 + random(100)) * 10 + 20;
	ellipse(x, y, w, w);

	stroke(0,0,128);
	fill(255, 204, 229, 150);
	w = sin(frameCount * random() / 30 + random(100)) * 10 + 20;
	ellipse(x, y, w, w);
}


function drawBackground() {
    for (var i = 0; i < 1000; i++) {
        var x = random(0, width/zoom);
        var y = random(0, height/zoom);
        var r1 = sin(frameCount * random() / 30 + random(100)) * 5 + 10;
	    var r2 = sin(frameCount * random() / 30 + random(100)) * 5 + 10;
	    var r3 = sin(frameCount * random() / 30 + random(100)) * 90 + 10;
	       
        fill(175, 0, random(10,150), 60);
        ellipse(x+r3, y+r2, r3, r3);
    }
}

// A function for each letter

function draw_N() {
	
	//rect(-15,-100,80,100);
	
	specialEllipse(0,-100,30,30); //top left 
	specialEllipse(0,0,13,13); 
	specialEllipse(0,-5,15,15); //bottom left
	//specialEllipse(50,-100,30,30); //top right
	specialEllipse(50,-20,30,30); //bottom right
	specialEllipse(0,-30,25,25);
    specialEllipse(0,-20,25,25);
	specialEllipse(0,-40,15,15);
	specialEllipse(0,-50,20,20);
	specialEllipse(0,-70,10,10);
    specialEllipse(0,-80,10,10);
	specialEllipse(0,-90,15,15);
	
    specialEllipse(70,-100,10,10);
	specialEllipse(70,-85,20,20);
	specialEllipse(70,-70,18,18);
	specialEllipse(70,-60,11,11);
	specialEllipse(70,-50,15,15);
    specialEllipse(70,-30,15,15);
	specialEllipse(70,-20,25,25);
	specialEllipse(70,0,13,13);
    
	specialEllipse(50,-35,20,20);
	specialEllipse(33,-47,10,10);
	specialEllipse(28,-56,15,15);
	specialEllipse(23,-67,18,18);
	specialEllipse(18,-75,10,10);
	specialEllipse(15,-80,13,13);
    
	
	
	

	return 110;
}

function draw_O() {
	
	//rect(30,-100,80,100);
	
    specialEllipse(0, -50, 25);
    specialEllipse(0, -40, 25);
    specialEllipse(3, -30, 15);
    specialEllipse(5, -20, 30);
    specialEllipse(10, -10, 10);
    specialEllipse(15, -5, 20);
    specialEllipse(30, 0, 20);
    specialEllipse(45, 0, 30);
    
    specialEllipse(80, -50, 25);
    specialEllipse(80, -40, 25);
    specialEllipse(75, -30, 15);
    specialEllipse(80, -20, 30);
    specialEllipse(70, -10, 10);
    specialEllipse(65, -5, 20);
    specialEllipse(50, 0, 20);
    specialEllipse(40, 0, 30);

    
    specialEllipse(0, -50, 25);
    specialEllipse(0, -60, 25);
    specialEllipse(3, -70, 15);
    specialEllipse(5, -80, 30);
    specialEllipse(10, -90, 10);
    specialEllipse(15, -95, 20);
    specialEllipse(30, -100, 20);
    specialEllipse(45, -100, 30);
    
    specialEllipse(80, -50, 25);
    specialEllipse(80, -70, 25);
    specialEllipse(75, -70, 15);
    specialEllipse(80, -80, 30);
    specialEllipse(70, -90, 10);
    specialEllipse(65, -95, 20);
    specialEllipse(40, -100, 20);
    specialEllipse(40, -100, 30);


	return 130;
}
function draw_Q() {
	
	//rect(75,-100,80,100);
	
    specialEllipse(0, -50, 25);
    specialEllipse(0, -40, 25);
    specialEllipse(3, -30, 15);
    specialEllipse(5, -20, 30);
    specialEllipse(10, -10, 10);
    specialEllipse(15, -5, 20);
    specialEllipse(30, 0, 20);
    specialEllipse(45, 0, 30);
    
    specialEllipse(80, -50, 25);
    specialEllipse(80, -40, 25);
    specialEllipse(75, -30, 15);
    specialEllipse(80, -20, 30);
    specialEllipse(70, -10, 10);
    specialEllipse(65, -5, 20);
    specialEllipse(50, 0, 20);
    specialEllipse(40, 0, 30);

    
    specialEllipse(0, -50, 25);
    specialEllipse(0, -60, 25);
    specialEllipse(3, -70, 15);
    specialEllipse(5, -80, 30);
    specialEllipse(10, -90, 10);
    specialEllipse(15, -95, 20);
    specialEllipse(30, -100, 20);
    specialEllipse(45, -100, 30);
    
    specialEllipse(80, -50, 25);
    specialEllipse(80, -70, 25);
    specialEllipse(75, -70, 15);
    specialEllipse(80, -80, 30);
    specialEllipse(70, -90, 10);
    specialEllipse(65, -95, 20);
    specialEllipse(40, -100, 20);
    specialEllipse(40, -100, 30);
    
    specialEllipse(90, 0, 25);
    specialEllipse(80, -10, 15);
    specialEllipse(70, -20, 15);
	specialEllipse(60, -30, 10);
	

	

	return 130;
}

function draw_U() {
	
    specialEllipse(0, -50, 25);
    specialEllipse(0, -40, 25);
    specialEllipse(0, -60, 25);
    specialEllipse(0, -70, 25);
    specialEllipse(0, -80, 25);
    specialEllipse(0, -90, 25);
    specialEllipse(0, -95, 25);
    specialEllipse(0, -100, 25);
    specialEllipse(3, -30, 15);
    specialEllipse(5, -20, 30);
    specialEllipse(10, -10, 10);
    specialEllipse(15, -5, 20);
    specialEllipse(30, 0, 20);
    specialEllipse(45, 0, 30);
    
    specialEllipse(80, -50, 25);
    specialEllipse(80, -60, 25);
    specialEllipse(80, -70, 25);
    specialEllipse(80, -80, 25);
    specialEllipse(80, -90, 25);
    specialEllipse(80, -95, 25);
    specialEllipse(80, -100, 25);
    
    specialEllipse(75, -30, 15);
    specialEllipse(80, -20, 30);
    specialEllipse(70, -10, 10);
    specialEllipse(65, -5, 20);
    specialEllipse(50, 0, 20);
    specialEllipse(40, 0, 30);
	
	
	

	

	return 120;
}




function draw_G() {



    specialEllipse(0, -50, 25);
    specialEllipse(0, -40, 25);
    specialEllipse(3, -30, 15);
    specialEllipse(5, -20, 30);
    specialEllipse(10, -10, 10);
    specialEllipse(15, -5, 20);
    specialEllipse(30, 0, 20);
    specialEllipse(45, 0, 30);
    
    specialEllipse(80, -50, 25);
    specialEllipse(80, -40, 25);
    specialEllipse(75, -30, 15);
    specialEllipse(80, -20, 30);
    specialEllipse(70, -10, 10);
    specialEllipse(65, -5, 20);
    specialEllipse(50, 0, 20);
    specialEllipse(40, 0, 30);
    
    
    
    specialEllipse(75, -40, 20);
    specialEllipse(75, -50, 15);
   
    
    specialEllipse(0, -50, 25);
    specialEllipse(0, -60, 25);
    specialEllipse(3, -70, 15);
    specialEllipse(5, -80, 30);
    specialEllipse(10, -90, 10);
    specialEllipse(15, -95, 20);
    specialEllipse(30, -100, 20);
    specialEllipse(45, -100, 30);
    
    specialEllipse(75, -90, 20);
    specialEllipse(60, -100, 20);
    specialEllipse(45, -100, 30);
    
    specialEllipse(65, -50, 10);
    specialEllipse(75, -50, 15);
    specialEllipse(60, -50, 10);




        return 130;
}


function draw_H() {


    specialEllipse(0, 0, 20);
    specialEllipse(0, -30, 25);
    specialEllipse(0, -20, 25);
    specialEllipse(0, -50, 15);
    specialEllipse(0, -70, 20);
    specialEllipse(0, -80, 20);
    specialEllipse(0, -100, 30);
    specialEllipse(25, -45, 25);
    specialEllipse(35, -45, 10);

    specialEllipse(70, 0, 20);
    specialEllipse(70, -30, 25);
    specialEllipse(70, -20, 25);
    specialEllipse(70, -50, 25);
    specialEllipse(70, -70, 30);
    specialEllipse(70, -80, 30);
    
    specialEllipse(50, -45, 25);
    specialEllipse(70, -100, 15);


        return 120;
}


function draw_I() {


    specialEllipse(0, 0, 20);
    specialEllipse(0, -30, 25);
    specialEllipse(0, -20, 25);
    specialEllipse(0, -45, 15);
    specialEllipse(0, -60, 20);
    specialEllipse(0, -80, 20);
    specialEllipse(0, -100, 30);


        return 50;

}

function draw_J() {


    specialEllipse(60, -80, 30);
    specialEllipse(60, -30, 25);
    specialEllipse(60, -100, 20);
    specialEllipse(60, -70, 20);
    specialEllipse(60, -60, 20);
    specialEllipse(60, -50, 20);
    specialEllipse(50, -10, 30);
    specialEllipse(30, 0, 20);
    specialEllipse(0, -50, 10);
    specialEllipse(0, -25, 15);
    specialEllipse(0, -35, 25);
    specialEllipse(10, -15, 15);


        return 110;

}
function draw_K() {


    specialEllipse(15, -45, 20);
    specialEllipse(30, -55, 25);
    specialEllipse(40, -65, 10);
    specialEllipse(50, -75, 20);
    specialEllipse(70, -100, 20);
    specialEllipse(60, -90, 20);
    specialEllipse(0, -100, 15);
    specialEllipse(0, -100, 10);
    specialEllipse(0, -65, 20);
    specialEllipse(0, -75, 20);
    specialEllipse(0, -50, 10);
    specialEllipse(0, -45, 25);
    specialEllipse(0, -25, 25);
    specialEllipse(0,  0, 30);
    specialEllipse(15, -35, 10);
    specialEllipse(35, -35, 20);
    specialEllipse(45, -25, 25);
    specialEllipse(50, -15, 20);
    specialEllipse(70, 0, 25);



        return 120;
}

function draw_L() {


    specialEllipse(0, 0, 25);
    specialEllipse(0, -20, 20);
    specialEllipse(0, -30, 10);
    specialEllipse(0, -45, 20);
    specialEllipse(0, -55, 20);
    specialEllipse(0, -65, 30);
    specialEllipse(0, -80, 30);
    specialEllipse(0, -100, 10);
    specialEllipse(20, 0, 20);
    specialEllipse(30, 0, 10);
    specialEllipse(40, 0, 10);
    specialEllipse(50, 0, 15);
     specialEllipse(60, 0, 15);
    specialEllipse(65, 0, 30);




        return 110;
}


function draw_M() {


   
    specialEllipse(80, 0, 25);
    specialEllipse(80, -20, 25);
    specialEllipse(80, -10, 30);
    specialEllipse(80, -30, 15);
    specialEllipse(80, -40, 15);
    specialEllipse(80, -50, 10);
    specialEllipse(80, -65, 30);
    specialEllipse(80, -80, 30);
    specialEllipse(80, -100, 15);
    specialEllipse(0, 0, 25);
    specialEllipse(0, -20, 25);
    specialEllipse(0, -10, 30);
    specialEllipse(0, -30, 15);
    specialEllipse(0, -40, 15);
    specialEllipse(0, -50, 10);
    specialEllipse(0, -65, 30);
    specialEllipse(0, -80, 30);
    specialEllipse(0, -100, 15);
   
    
    specialEllipse(10, -90, 25);
    specialEllipse(15, -80, 20);
    specialEllipse(20, -70, 20);
    specialEllipse(25, -60, 10);
    specialEllipse(30, -50, 30);
    specialEllipse(35, -45, 10);
    specialEllipse(40, -40, 10);
    
    specialEllipse(70, -90, 25);
    specialEllipse(65, -80, 20);
    specialEllipse(60, -70, 20);
    specialEllipse(55, -60, 10);
    specialEllipse(50, -50, 30);
    specialEllipse(45, -45, 10);
    

    



        return 130;
}
function draw_S() {


    
    specialEllipse(65, -80, 10);
    specialEllipse(60, -85, 15);
    specialEllipse(60, -90, 30);
    specialEllipse(40, -95, 10);
    specialEllipse(40, -100, 20);
    specialEllipse(40, -100, 10);
    specialEllipse(35, -100, 10);
    specialEllipse(20, -98, 30);
    specialEllipse(19, -95, 20);
    specialEllipse(15, -92, 20);
    specialEllipse(10, -87, 10);
    specialEllipse(7, -85, 15);
    specialEllipse(5, -75, 25);
    specialEllipse(1, -70, 30);
    specialEllipse(0, -65, 30);
    specialEllipse(0, -60, 30);
    specialEllipse(0, -55, 20);
    specialEllipse(0, -50, 25);
    
    specialEllipse(5, -45, 25);
    specialEllipse(10, -45, 25);
    specialEllipse(15, -45, 30);
    specialEllipse(35, -45, 30);
    specialEllipse(40, -45, 10);
    specialEllipse(45, -45, 20);
    specialEllipse(50, -45, 20);
    specialEllipse(55, -40, 20);
    specialEllipse(60, -42, 10);
    specialEllipse(75, -35, 15);
    specialEllipse(80, -25, 10);
    specialEllipse(75, -35, 10);
    specialEllipse(75, -10, 15);
    specialEllipse(65, -5, 10);
    specialEllipse(60, -3, 10);
    specialEllipse(55, 0, 30);
    specialEllipse(40, 0, 30);
    
    specialEllipse(35, 0, 20);
    specialEllipse(30, 0, 30);
    specialEllipse(25, -2, 10);
    specialEllipse(20, -5, 10);
    specialEllipse(15, -7, 20);
    specialEllipse(10, -10, 20);
     specialEllipse(5, -12, 30);
    specialEllipse(0, -15, 0);

    
        return 120;
}
function draw_R() {


    //pionowa kreska
    specialEllipse(0, 0, 20);
    specialEllipse(0, -10, 25);
    specialEllipse(0, -20, 20);
    specialEllipse(0, -30, 25);
    specialEllipse(0, -40, 25);
    specialEllipse(0, -50, 20);
    specialEllipse(0, -60, 15);
    specialEllipse(0, -70, 20);
    specialEllipse(0, -80, 15)
    specialEllipse(0, -90, 15);
    specialEllipse(0, -100, 20);
    
    //gorny brzuszek
    specialEllipse(10, -100, 15);
    specialEllipse(20, -100, 15);
    specialEllipse(30, -100, 20);
    specialEllipse(40, -95, 20);
    specialEllipse(50, -95, 15);
    specialEllipse(60, -88, 15);
    specialEllipse(70, -75, 20);
    specialEllipse(65, -60, 15);
    specialEllipse(55, -50, 15);
    specialEllipse(40, -45, 20);
    specialEllipse(30, -45, 25);
    specialEllipse(20, -44, 15);
    specialEllipse(10, -45, 15);

    
    specialEllipse(65, 0, 20);
    specialEllipse(60, -10, 25);
    specialEllipse(55, -20, 15);
    specialEllipse(50, -30, 15);
    specialEllipse(45, -40, 15);


        return 120;
}


function draw_A() {

    // lewe ramię
    specialEllipse(0, 0, 15);
    specialEllipse(4, -8, 15);
    specialEllipse(8, -15, 20);
    specialEllipse(13, -25, 20);
    specialEllipse(20, -40, 25);
    specialEllipse(25, -55, 20);
    specialEllipse(28, -63, 20);
    specialEllipse(31, -75, 15);
    specialEllipse(35, -85, 20);
    specialEllipse(38, -93, 15);
    specialEllipse(40, -100, 15);
 
    
    //prawe ramię
    specialEllipse(40, -100, 15);
    specialEllipse(42, -93, 15);
    specialEllipse(45, -85, 20);
    specialEllipse(49, -75, 15);
    specialEllipse(52, -63, 20);
    specialEllipse(57, -55, 20);
    specialEllipse(62, -40, 25);
    specialEllipse(69, -25, 20);
    specialEllipse(74, -15, 20);
    specialEllipse(76, -8, 15);
    specialEllipse(80, 0, 15);
    
    
    //mostek
    specialEllipse(35, -40, 20);
    specialEllipse(50, -40, 15);
    
   
	return 120;
}

function draw_W() {

    //pionowa kreska
	specialEllipse(0, 0, 20);
    specialEllipse(0, -20, 25);
    specialEllipse(0, -30, 20);
    specialEllipse(0, -40, 25);
    specialEllipse(0, -50, 25);
    specialEllipse(0, -60, 20);
    specialEllipse(0, -70, 15);
    specialEllipse(0, -80, 20);
    specialEllipse(0, -90, 15)
    specialEllipse(0, -100, 15);
    
    //ukośna lewa
    specialEllipse(0, -10, 20);
    specialEllipse(10, -20, 15);
    specialEllipse(20, -30, 20);
    specialEllipse(30, -40, 25);
    specialEllipse(40, -50, 20);
    
    //ukośna prawa
    specialEllipse(80, -10, 20);
    specialEllipse(70, -20, 15);
    specialEllipse(60, -30, 20);
    specialEllipse(50, -40, 25);
    specialEllipse(40, -50, 20);
    
    
    //pionowa prawa
    specialEllipse(80, 0, 20);
    specialEllipse(80, -20, 25);
    specialEllipse(80, -30, 20);
    specialEllipse(80, -40, 25);
    specialEllipse(80, -50, 25);
    specialEllipse(80, -60, 20);
    specialEllipse(80, -70, 15);
    specialEllipse(80, -80, 20);
    specialEllipse(80, -90, 15);
    specialEllipse(80, -100, 15);
    
	return 130;
}


function draw_V() {
 
 
    // lewe ramię
    specialEllipse(0, -100, 15);
    specialEllipse(4, -93, 15);
    specialEllipse(8, -85, 20);
    specialEllipse(11, -77, 15);
    specialEllipse(16, -65, 20);
    specialEllipse(21, -52, 20);
    specialEllipse(24, -40, 20);
    specialEllipse(27, -32, 15);
    specialEllipse(31, -24, 20);
    specialEllipse(34, -16, 15);
    specialEllipse(37, -8, 15);
    specialEllipse(40, 0, 10);
    
    //prawe ramię
    
    specialEllipse(80, -100, 15);
    specialEllipse(77, -93, 15);
    specialEllipse(74, -85, 20);
    specialEllipse(71, -77, 15);
    specialEllipse(67, -65, 20);
    specialEllipse(64, -52, 20);
    specialEllipse(60, -40, 20);
    specialEllipse(56, -32, 15);
    specialEllipse(51, -24, 20);
    specialEllipse(48, -16, 15);
    specialEllipse(44, -8, 15);
    specialEllipse(40, 0, 10);
    
    
	return 110;
}


function draw_B() {
 
    //pionowa kreska
    specialEllipse(0, 0, 20);
    specialEllipse(0, -20, 25);
    specialEllipse(0, -30, 20);
    specialEllipse(0, -40, 25);
    specialEllipse(0, -50, 25);
    specialEllipse(0, -60, 20);
    specialEllipse(0, -70, 15);
    specialEllipse(0, -80, 20);
    specialEllipse(0, -90, 15)
    specialEllipse(0, -100, 15);
    specialEllipse(0, -10, 20);
    
    //gorny brzuszek
    specialEllipse(8, -100, 15);
    specialEllipse(14, -99, 15);
    specialEllipse(26, -97, 20);
    specialEllipse(36, -94, 20);
    specialEllipse(48, -92, 15);
    specialEllipse(56, -87, 15);
    specialEllipse(60, -75, 20);
    
    specialEllipse(52, -64, 15);
    specialEllipse(45, -61, 15);
    specialEllipse(36, -59, 20);
    specialEllipse(26, -56, 25);
    specialEllipse(14, -52, 15);
    specialEllipse(8, -50, 15);
    
    
    //dolny brzuszek
    specialEllipse(8, -50, 15);
    specialEllipse(14, -49, 15);
    specialEllipse(26, -47, 20);
    specialEllipse(36, -44, 20);
    specialEllipse(48, -42, 15);
    specialEllipse(56, -37, 15);
    specialEllipse(60, -25, 20);
    
    specialEllipse(52, -14, 15);
    specialEllipse(45, -11, 15);
    specialEllipse(36, -9, 20);
    specialEllipse(26, -6, 25);
    specialEllipse(14, -2, 15);
    specialEllipse(8, 0, 15);
    
    
	return 100;
}


function draw_P() {
 
    //pionowa kreska
    specialEllipse(0, 0, 20);
    specialEllipse(0, -10, 25);
    specialEllipse(0, -20, 20);
    specialEllipse(0, -30, 25);
    specialEllipse(0, -40, 25);
    specialEllipse(0, -50, 20);
    specialEllipse(0, -60, 15);
    specialEllipse(0, -70, 20);
    specialEllipse(0, -80, 15)
    specialEllipse(0, -90, 15);
    specialEllipse(0, -100, 20);
    
    //gorny brzuszek
    specialEllipse(10, -100, 15);
    specialEllipse(20, -100, 15);
    specialEllipse(30, -100, 20);
    specialEllipse(40, -95, 20);
    specialEllipse(50, -95, 15);
    specialEllipse(60, -88, 15);
    specialEllipse(70, -75, 20);
    specialEllipse(65, -60, 15);
    specialEllipse(55, -50, 15);
    specialEllipse(40, -45, 20);
    specialEllipse(30, -45, 25);
    specialEllipse(20, -44, 15);
    specialEllipse(10, -45, 15);
    
    
	return 100;
}



function draw_C() {
 
   
    specialEllipse(62, -94, 10);
    specialEllipse(57, -98, 15);
    
    specialEllipse(50, -100, 15);
    
    specialEllipse (46, -99, 10);
    specialEllipse (41, -99, 15);
    specialEllipse (30, -94, 15);
    specialEllipse (25, -91, 20);
    specialEllipse (18, -85, 15);
    specialEllipse (13, -78, 15);
    specialEllipse(10, -72, 20);
    specialEllipse(5, -64, 15);
    specialEllipse(2, -58, 20);
    specialEllipse(0, -50, 15);
    
    
    specialEllipse (46, -1, 10);
    specialEllipse (41, -1, 15);
    specialEllipse (30, -6, 15);
    specialEllipse (25, -9, 20);
    specialEllipse (18, -15, 15);
    specialEllipse (13, -22, 15);
    specialEllipse(10, -28, 20);
    specialEllipse(5, -36, 15);
    specialEllipse(2, -42, 20);
    specialEllipse(0, -50, 15);
    
    specialEllipse(57, -2, 15);
    specialEllipse(62, -6, 10);
    
    specialEllipse(50, 0, 15);
    
    
	return 110;
}



function draw_D() {
 
   
    specialEllipse(0, -100, 15);
    specialEllipse (20, -99, 10);
    specialEllipse (30, -99, 15);
    specialEllipse (40, -95, 15);
    specialEllipse (45, -91, 20);
    specialEllipse (50, -85, 15);
    specialEllipse (55, -78, 15);
    specialEllipse(50, -72, 20);
    specialEllipse(55, -64, 15);
    specialEllipse(65, -58, 20);
    specialEllipse(65, -50, 15);
    
    
    specialEllipse (15, -1, 10);
    specialEllipse (20, -1, 15);
    specialEllipse (25, -6, 15);
    specialEllipse (35, -9, 20);
    specialEllipse (45, -15, 15);
    specialEllipse (50, -22, 15);
    specialEllipse(55, -28, 20);
    specialEllipse(55, -36, 15);
    specialEllipse(60, -42, 20);
    specialEllipse(60, -50, 15);
   
    
    
    specialEllipse(0, 0, 20);
    specialEllipse(0, -8, 15);
    specialEllipse(0, -15, 25);
    specialEllipse(0, -30, 20);
    specialEllipse(0, -40, 25);
    specialEllipse(0, -50, 25);
    specialEllipse(0, -60, 20);
    specialEllipse(0, -70, 15);
    specialEllipse(0, -80, 20);
    specialEllipse(0, -90, 15);
    specialEllipse(0, -100, 15);
    
    
	return 100;
}


function draw_T() {
 
    //pionowa kreska
    specialEllipse(40, 0, 20);
    specialEllipse(40, -20, 25);
    specialEllipse(40, -30, 20);
    specialEllipse(40, -40, 25);
    specialEllipse(40, -50, 25);
    specialEllipse(40, -60, 20);
    specialEllipse(40, -70, 15);
    specialEllipse(40, -80, 20);
    specialEllipse(40, -90, 15);
    specialEllipse(40, -100, 15);
    specialEllipse(40, -10, 20);
    
    //daszek
    specialEllipse(20, -100, 20);
    specialEllipse(62, -100, 20);
    specialEllipse(35, -100, 20);
    specialEllipse(50, -100, 15);
    specialEllipse(71, -100, 10);
    specialEllipse(80, -100, 25);
    specialEllipse(7, -100, 25);
    specialEllipse(0, -100, 10);
    
 
    
	return 110;
}

function draw_E() {

    specialEllipse (0, 0, 28);
    specialEllipse (0, -60, 16);
    specialEllipse (0, -25, 24);
    specialEllipse (0, -40, 25);
    specialEllipse (0, -50 , 14);
    specialEllipse (0, -100 , 14);
    specialEllipse (0, -90 , 14);
    specialEllipse (0, -75 , 18);


    specialEllipse (17, 0, 20);
    specialEllipse (4, 0, 25);
    specialEllipse (27, 0, 19);
    specialEllipse (35, 0, 15);
    specialEllipse (45, 0, 22);
    specialEllipse (54, 0, 19);
    specialEllipse (65, 0, 15);

    specialEllipse (2, -100, 20);
    specialEllipse (12, -100, 23);
    specialEllipse (27, -100, 18);
    specialEllipse (35, -100, 23);
    specialEllipse (45, -100, 18);
    specialEllipse (54, -100, 13);
    specialEllipse (65, -100, 15);

     specialEllipse (42, -50, 20);
     specialEllipse (22, -50, 27);
     specialEllipse (32, -50, 20);
     specialEllipse (12, -50, 20);



        return 110;
}

function draw_F() {

    specialEllipse (0, 0, 26);
    specialEllipse (0, -40, 30);
    specialEllipse (0, -10, 25);
    specialEllipse (0, -30, 25);
    specialEllipse (0, -50 , 30);
    specialEllipse (0, -100 , 10);
    specialEllipse (0, -80 , 18);
    specialEllipse (0, -70 , 18);

    specialEllipse (10, -100, 20);
    specialEllipse (20, -100, 23);
    specialEllipse (35, -100, 18);
    specialEllipse (43, -100, 23);
    specialEllipse (53, -100, 18);
    specialEllipse (62, -100, 13);
    specialEllipse (73, -100, 15);

     specialEllipse (30, -50, 17);
     specialEllipse (40, -50, 20);
     specialEllipse (20, -50, 20);



        return 100;
}


function draw_X() {
    specialEllipse (0, 0, 25);
    specialEllipse (10, -12, 20);
    specialEllipse (15, -22, 20);
    specialEllipse (20, -30, 15);
    specialEllipse (31, -40, 17);
    specialEllipse (37, -50, 13);
    specialEllipse (44, -60, 13);
    specialEllipse (50, -70, 15);
    specialEllipse (55, -75, 15);
    specialEllipse (62, -80, 16);
    specialEllipse (70, -90, 16);
    specialEllipse (80, -100, 20);

     specialEllipse (0, -100, 20);
    specialEllipse (13, -83, 16);
    specialEllipse (20, -75, 15);
    specialEllipse (26, -69, 15);
    specialEllipse (33, -60, 13);
    specialEllipse (40, -50, 13);
    specialEllipse (47, -40, 17);
    specialEllipse (53, -30, 15);
    specialEllipse (59, -22, 20);
    specialEllipse (65, -12, 20);
    specialEllipse (70, -12, 20);
    specialEllipse (80, 0, 25);

    return 120;
}

function draw_Y() {

    specialEllipse (40, 0, 25);
    specialEllipse (40, -10, 18);
    specialEllipse (40, -20, 15);
    specialEllipse (40, -30, 12);
    specialEllipse (40, -40, 10);
    
    specialEllipse (45, -55, 10);
    specialEllipse (40, -55, 10);
    specialEllipse (35, -55, 10);
    specialEllipse (30, -60, 10);
    specialEllipse (25, -65, 12);
    specialEllipse (20, -70, 15);
    specialEllipse (15, -75, 18);
    specialEllipse (10, -80, 18);
    specialEllipse (5, -90, 18);
    specialEllipse (0, -100, 19);

    specialEllipse (45, -54, 10);
    specialEllipse (50, -60, 12);
    specialEllipse (55, -65, 15);
    specialEllipse (60, -65, 15);
    specialEllipse (65, -75, 18);
    specialEllipse (70, -84, 18);
    specialEllipse (75, -84, 18);
    specialEllipse (80, -100, 19);


        return 120;
}

function draw_Z() {


    specialEllipse (25, 0, 20);
    specialEllipse (0, 0, 25);
    specialEllipse (5, 0, 25);
    specialEllipse (35, 0, 19);
    specialEllipse (43, 0, 15);
    specialEllipse (53, 0, 22);
    specialEllipse (62, 0, 19);
    specialEllipse (80, 0, 15);

    specialEllipse (16, -20, 20);
    specialEllipse (21, -30, 14);
    specialEllipse (29, -40, 20);
    specialEllipse (37, -50, 20);
    specialEllipse (45, -60, 19);
    specialEllipse (53, -70, 18);
    specialEllipse (62, -80, 25);
    specialEllipse (67, -87, 25);

    specialEllipse (0, -100, 20);
    specialEllipse (20, -100, 23);
    specialEllipse (35, -100, 18);
    specialEllipse (43, -100, 23);
    specialEllipse (53, -100, 18);
    specialEllipse (62, -100, 13);
    specialEllipse (80, -100, 15);


        return 110;
}

