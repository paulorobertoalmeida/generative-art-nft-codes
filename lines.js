//Set Time Out
let x = 0;
let y = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(3);
  line(x, 0, x, height);
  //setTimeout( , 300 000);
  x = x + 3; 
  if ( x > width ) {
    x = 0;
  }
  //line(x1, y1, z1, x2, y2, z2)
  line(0, y, width, y);
  y = y + 2;
  if ( y > height) {
    y = 0;
  }
  
}