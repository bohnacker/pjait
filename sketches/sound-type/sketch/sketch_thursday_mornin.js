

 var spektrum_avg;

 var spektrum_mem;

 var spektrum_mem_2;

 var spektrum_mem_3;

var xg=32

var yg=32

function draw_t(x,y){

	
	line(x-xg , y , x+xg ,y);
	line(x, y-yg , x , y+yg);

}


function draw_d(x,y){

	triangle(x-xg , y-yg , x-xg , y+yg , x+xg,  y+yg )

}


function draw_r(x,y){
	
	line(x-xg , y-yg , x-xg , y+yg)

	line(x-xg , y-yg  , x+xg , y-yg)

}


function preload() {
  img0 = loadImage('testface.png');

  soundFormats('mp3', 'ogg');

  choon = loadSound('guirlandes_short.ogg')//('4_club_use_short.ogg');   //'monsters_inc.mp3'
 
}

 function setup() {
 	

 	spektrum_avg=0;

 	spektrum_mem=[]

 	for (i = 0; i < 5; i++) {
 		spektrum_mem[i]=0

 	} 

 	spektrum_mem_2=[]

 	for (i = 0; i < 5; i++) {
 		spektrum_mem_2[i]=0

 	} 



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

	strokeWeight(spektrum_avg*0.2+3);


	//second band // im sorry

	spektrum_avg=0


	spektrum_mem_2[frameCount%5]=spektrum[12]   

	for (i=0; i <5; i++){

		spektrum_avg+=spektrum_mem_2[i]
	}

	spektrum_avg=spektrum_avg/5

	yg=spektrum_avg/255 * 32 + 24

		if (keyIsPressed){
	//console.log(spektrum_mem);
	console.log(spektrum_mem_2);
	//console.log(spektrum)
	}

	spektrum_avg=0




	draw_t(100,100);

	draw_d(180,100);

	draw_r(260,100);




	//for (i = 0; i < 8; i++) { 

		//copy(img0,0,0,64, 64,i*100,200 - spektrum[i*10],64, 64);  //waveform[5+i*4]*100

	//}

	//copy(img0,0,0,64, 64,50,200+ fft.getEnergy(100)*0.5,64, 64);


	//strokeWeight(spektrum[15]*0.2+3);




}




//for (i = 0; i < cars.length; i++) { }