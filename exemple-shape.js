//Drawing under the canva space

let speed = 4.5;
let diameter = 20;
let x;
let y;


function setup() {
  createCanvas(500, 500);
  x = width /2;
  y = height /2;
  background(0, 51, 102);
  loop();
}

function draw() {
 
  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  ellipse(x, y, diameter, diameter);
 
}