 var ass=0

 var osc;

function preload() {
  img0 = loadImage('testface.png');

  soundFormats('mp3', 'ogg');

  choon = loadSound('4_club_use_short.ogg');
 
}

 function setup() {
createCanvas(windowWidth, windowHeight)

 fft = new p5.FFT(0.8,32);

 choon.play();
 //just 'witdth'= width of da kanvas


}

function draw() {
	

	rect(0,0,999,1700);

	var spektrum = fft.analyze()

	var waveform = fft.waveform(16,32);



	for (i = 0; i < 8; i++) { 

		copy(img0,0,0,64, 64,i*100,200+ waveform[5+i*4]*100,64, 64);

	}

	//copy(img0,0,0,64, 64,50,200+ fft.getEnergy(100)*0.5,64, 64);


	
	//ass+=1

	//background(200);
 


}




//for (i = 0; i < cars.length; i++) { }