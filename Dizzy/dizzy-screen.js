let z = 5;
function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(0);
  fill(255);
  
  push(); //white
  rect(random(width + z), random(height + z), 45, 45) ;
  pop();
  push();
  fill(0,0,255); //Blue
  rect(random(width + z), random(height + z), 25, 25) ;
  pop();
  push();
  fill	(255,0,255); //Magenta
  rect(random(width + z), random(height + z), 40, 40) ;
  pop();
  push();
  fill(0,128,128); //Teal
  rect(random(width + z), random(height + z), 20, 20) ;
  pop();
  push();
  fill(255, 128,0); //Orange
  rect(random(width + z), random(height + z), 30, 30);
  pop();
  push();
  fill(255,255,0); //Yellow
  rect(random(width + z), random(height + z ), 10, 10)
  pop();
}