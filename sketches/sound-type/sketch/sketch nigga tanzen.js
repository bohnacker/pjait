

 var spektrum_avg;

 var spektrum_mem;

 var spektrum_mem_2;

 var spektrum_mem_3;

 var xg=32

 var yg=32

 var pomf=0

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


function draw_slogan(){

	//T
	line(0,0, 0,-yg*3)
	line(-xg, -yg*3 ,xg, -yg*3)

	//Y

	line(-3*xg, 0 ,-3*xg , -yg)
	line(-2*xg, -yg ,-4*xg, -yg)
	line(-2*xg , -yg , -2*xg, -3*yg)
	line(-4*xg , -yg , -4*xg, -3*yg)

	//R

	line(-7*xg, 0 ,-7*xg, -3*yg )
	line(-7*xg, -yg, -5*xg, -yg)
	line(-6*xg, -yg,-5*xg ,0)
	line(-5*xg, -yg, -5*xg ,-2*yg)
	line(-5*xg, -2*yg , -6*xg , -3*yg)
	line(-6*xg, -3*yg ,-7*xg , -3*yg)

	//h

	line(2*xg, 0, 2*xg, -3*yg)
	line(2*xg, -2*yg, 3*xg, -2*yg)
	line(3*xg, -2*yg, 4*xg, -yg)
	line(4*xg, 0, 4*xg, -yg)
	
	//M

	line(5*xg, 0, 5*xg, -2*yg)
	line(5*xg, -2*yg, 6*xg, -3*yg)
	line(6*xg, 0, 6*xg, -3*yg)
	line(6*xg, -2*yg, 7*xg, -3*yg)
	line(7*xg, 0, 7*xg, -3*yg)


	//DANZER
	//n

	line(0, yg, 0, 3*yg)
	line(-xg, yg, -xg, 3*yg)
	line(-xg, yg, 0, 3*yg)

	//a

	line(-2*xg, yg, -3*xg, yg)
	line(-2*xg, yg, -2*xg, 3*yg)
	line(-3*xg, yg, -3*xg, 3*yg)
	line(-2*xg, 2*yg, -3*xg, 2*yg)

	//d

	line(-5*xg, yg, -5*xg, 3*yg)
	line(-5*xg, 3*yg, -4*xg, 3*yg)
	line(-5*xg, yg, -4.5*xg, yg)
	line(-4.5*xg, yg, -4*xg, 1.5*yg)
	line(-4*xg, 1.5*yg, -4*xg, 3*yg)

	//c

	line(xg, yg, xg, 3*yg)	
	line(xg, yg, 2*xg, yg)
	line(xg, 3*yg, 2*xg, 3*yg)

	//e

	line(3*xg, yg, 3*xg, 3*yg)	
	line(3*xg, yg, 4*xg, yg)
	line(3*xg, 3*yg, 4*xg, 3*yg)
	line(3*xg, 2*yg, 4*xg, 2*yg)

	//r

	line(5*xg, yg, 5*xg, 3*yg)
	line(5*xg, yg, 5.5*xg, yg)
	line(5.5*xg, yg, 6*xg, 1.5*yg)
	line(6*xg, 1.5*yg, 6*xg, 2*yg)
	line(5*xg, 2*yg, 6*xg, 2*yg)
	line(5.5*xg, 2*yg, 6*xg, 3*yg)

	//!

	line(7*xg, yg, 7*xg, 2.5*yg)
	point(7*xg, 3*yg)

}

function draw_afro(){

	quad(2*xg, 0, 0, 0, 0, -yg, 2*xg, -yg)
	quad(2*xg, -yg,         0, -yg,           0, -2*yg,  xg, -2*yg)
	
	//kolanka du
	line(-1*xg-pomf, -4*yg ,-1*xg, -2*yg)
	line(-1*xg, -6*yg ,-1*xg-pomf, -4*yg)


	line(-1*xg, -6*yg, -1*xg ,-7*yg)
	line( -1*xg ,-7*yg, 0*xg, -7*yg)

	//wnetrze kolan
	line(-pomf, -4*yg ,0*xg, -2*yg)
	line(0*xg, -6*yg ,-pomf, -4*yg)

 	//koszula
 	line( -1*xg ,-7*yg, -1*xg, -9*yg )
 	line( -1*xg, -10*yg , -5*xg , -10*yg )
 	line( -5*xg , -9*yg , -1*xg, -9*yg )
 	line( -5*xg , -9*yg , -5*xg , -10*yg )
 	line( 0*xg , -9*yg , -0.5*xg , -10*yg)
 	line( -0.5*xg , -10*yg , -1*xg , -10*yg )
 	//ueb
 	line( -1*xg , -10*yg , -1*xg , -12*yg)
 	line( -1*xg , -12*yg , 0*xg , -12*yg)
 	//afro
 	line( -1*xg , -11*yg , -2*yg , -12*yg)
 	line( -2*yg , -12*yg , -2*yg , -14*yg)
 	line(  -2*yg , -14*yg  , -1*xg , -15*yg)
 	line(  -1*xg , -15*yg , 0*xg , -15*yg)
 	//pyngle
 	line( 0*xg , -11.5*yg  ,0.33*xg  , -11*yg)
 	line( -0.33*xg  , -11*yg , -1*xg , -11*yg)
 	line( 0*xg , -11.5*yg , -1*xg , -11.5*yg )
}


function sparkle(x, y, fazeoff) {

	var faze=(fazeoff+frameCount)*0.1  //fazeoff in frames
	var bias=0.4
	var size=16

	for (i=0; i <8; i++){

		line(x, y, x + sin(i*0.25*PI)*size* (1+bias*sin(faze)), y + cos(i*0.25*PI)* size* (1+bias*sin(faze)))

	}

}



function preload() {
  img0 = loadImage('testface.png');

  soundFormats('mp3', 'ogg');

  choon = loadSound('lets_groove.mp3')//('4_club_use_short.ogg');   //'monsters_inc.mp3'
 
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



//createCanvas(windowWidth, windowHeight)

 createCanvas(2000, 2000)

 fft = new p5.FFT(0.8,32);

 choon.play();
 //just 'witdth'= width of da kanvas


}

function draw() {

	strokeCap(ROUND);
	
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

	pomf=spektrum_avg/255*120


	//second band // im sorry

	spektrum_avg=0


	spektrum_mem_2[frameCount%5]=spektrum[12]   

	for (i=0; i <5; i++){

		spektrum_avg+=spektrum_mem_2[i]
	}

	spektrum_avg=spektrum_avg/5
	yg=spektrum_avg/255 * 32 + 24
	spektrum_avg=0

	translate(400,200);
	draw_slogan();

	strokeWeight(5);
	sparkle(100, 180, 0);
	sparkle(150,240, 30);
	sparkle(200,270, 45);



	//AFROBOI

	strokeWeight(8);

	xg=32
	yg=32

	translate(0, 700)
	draw_afro()
	scale(-1,1)
	draw_afro()

	

	xg=32


	if (keyIsPressed){
	//console.log(spektrum_mem);
	console.log(spektrum_mem_2);
	//console.log(spektrum)
	}



}




//for (i = 0; i < cars.length; i++) { }

//draw_t(100,100);

	//draw_d(180,100);

	//draw_r(260,100);




	//for (i = 0; i < 8; i++) { 

		//copy(img0,0,0,64, 64,i*100,200 - spektrum[i*10],64, 64);  //waveform[5+i*4]*100

	//}

	//copy(img0,0,0,64, 64,50,200+ fft.getEnergy(100)*0.5,64, 64);


	//strokeWeight(spektrum[15]*0.2+3);