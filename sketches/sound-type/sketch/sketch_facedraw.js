 var ass=0

 var osc;

 var white_alpha=(255,255,255,10)

function preload() {
  img0 = loadImage('testface.png');
}

 function setup() {
createCanvas(windowWidth, windowHeight)



 osc = new p5.Oscillator();
 osc.setType('sine');
 osc.freq(240);
 osc.amp(1);
 osc.start()


 //just 'witdth'= width of da kanvas


}

function draw() {
	

	//rect(0,0,999,1700);



	if (mouseIsPressed) {
		
		osc.amp(1)
		
		blendMode(MULTIPLY);
		copy(img0,0,0,64, 64,mouseX-32,mouseY-32,64, 64);

		}
	else
		{osc.amp(0)}

	blendMode(BLEND);
	//ass+=1

	//background(200);
 


}




//for (i = 0; i < cars.length; i++) { }