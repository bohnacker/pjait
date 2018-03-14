

 var spektrum_avg;

 var spektrum_mem;



function draw_t(x,y){

	
	line(x-32 , y , x+32 ,y);
	line(x, y-32 , x , y+32);

}


function draw_d(x,y){

	triangle(x-32 , y-32 , x-32 , y+32 , x+32,  y+32 )

}


function preload() {
  img0 = loadImage('testface.png');

  soundFormats('mp3', 'ogg');

  choon = loadSound('4_club_use_short.ogg');
 
}

 function setup() {
 	spektrum_mem=[]

 	for (i = 0; i < 5; i++) {
 		spektrum_mem[i]=0

 	} 

 	spektrum_avg=0;


createCanvas(windowWidth, windowHeight)

 fft = new p5.FFT(0.8,32);

 choon.play();
 //just 'witdth'= width of da kanvas


}

function draw() {
	
	clear()
	//rect(0,0,999,1700);

	var spektrum = fft.analyze(128)

	var waveform = fft.waveform(16,32);

	spektrum_mem[frameCount%5]=spektrum[9]

	for (i=0; i <5; i++){

		spektrum_avg+=spektrum_mem[i]
	}

	spektrum_avg=spektrum_avg/5

	draw_t(100,100);

	draw_d(180,100);




	//for (i = 0; i < 8; i++) { 

		//copy(img0,0,0,64, 64,i*100,200 - spektrum[i*10],64, 64);  //waveform[5+i*4]*100

	//}

	//copy(img0,0,0,64, 64,50,200+ fft.getEnergy(100)*0.5,64, 64);


	//strokeWeight(spektrum[15]*0.2+3);
	strokeWeight(spektrum_avg*0.2+3);

	if (keyIsPressed){
	console.log(spektrum_mem);
	console.log(spektrum_avg);
	}

}




//for (i = 0; i < cars.length; i++) { }