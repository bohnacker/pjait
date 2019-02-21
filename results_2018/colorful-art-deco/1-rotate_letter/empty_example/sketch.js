
var textFont	

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	textFont("Arial", 272);
	
  // put setup code here
}

function draw() {
	background(255,20,0)

	translate(400,400);
	
	for(var i=0;i<6;i++){
		fill(0,0,0,150);
		textAlign(RIGHT)
		push();
		rotate(PI*i/45*mouseX*0.05);
		//translate(i*mouseX*0.02,i*mouseY*0.02)
		text("S",0,0);
		pop()
		
		
	}
	

}

