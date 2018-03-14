function setup() {
  
  createCanvas(windowWidth,windowHeight);
 
 colorMode(HSB, 360, 100, 100);
 
 for (var i = 0; i <= 400; i=i+5) {
  	stroke (i/400*360, 100, 100);
  	line(0, 400, i, 0);
  	line(400, 0, i, 400);

  }


}



function draw() {
 
}
