//Birth of The Puma 
let x;
let y;


function setup() {
  createCanvas(600, 600);
  background(255,228,181); //moccasin
  noStroke()
;}

function draw() {
  translate(10, 10)
  
  x = 20;
  
  //first Line
  fill("red"); 
  rect(x, 20, 50, 120);
  
  fill("white"); 
  rect(x+60, 40, 50, 120);
  
  fill("violet"); 
  rect(x+ 120, 10, 50, 120);
  
  fill("black"); 
  rect(200, 40, 50, 120);
  
  fill("navy"); 
  rect(260, 10, 50, 120);
  
  fill("green"); 
  rect(320, 40, 50, 120);
  
  fill("indigo"); 
  rect(380, 10, 50, 120);
  
  fill("yellow"); 
  rect(440, 40, 50, 120);
  
  fill("sienna"); 
  rect(500, 10, 50, 120);
  
  y = 160;
  
  //Second Line
  fill("indigo");
  rect(x, y, 50, 120);
  
  fill("green"); //white
  rect(x+60, y+20, 50, 120);
  
  fill("navy"); //red
  rect(x+ 120, y, 50, 120);
  
  fill("yellow"); //blue
  rect(x + 180, y + 20, 50, 120);
  
  fill("sienna") 
  rect(x + 240, y , 50, 120);
  
  fill("violet"); 
  rect(x +300, y + 20, 50, 120);
  
  fill("red"); 
  rect(x + 360, y , 50, 120);
  
  fill("black");
  rect(x + 420, y + 20, 50, 120);
  
  fill("white") //red
  rect(x + 480, y , 50, 120);
  
  //third line
  
  fill("sienna");
  rect(x, y + 140, 50, 120);
  
  fill("red"); 
  rect(x+60, y +160, 50, 120);
  
  fill("black"); 
  rect(x+ 120, y + 140, 50, 120);
  
  fill("indigo"); 
  rect(x + 180, y + 160, 50, 120);
  
  fill("white") 
  rect(x + 240, y + 140, 50, 120);
  
  fill("navy"); 
  rect(x +300, y + 160, 50, 120);
  
  fill("yellow"); 
  rect(x + 360, y + 140, 50, 120);
  
  fill("green");
  rect(x + 420, y + 160, 50, 120);
  
  fill("violet") //red
  rect(x + 480, y +140, 50, 120);
  
  //forth line
  fill("yellow");
  rect(x, y + 280, 50, 120);
  
  fill("navy"); 
  rect(x+60, y +300, 50, 120);
  
  fill("violet"); 
  rect(x+ 120, y + 280, 50, 120);
  
  fill("green"); 
  rect(x + 180, y + 300, 50, 120);
  
  fill("sienna") 
  rect(x + 240, y + 280, 50, 120);
  
  fill("black"); 
  rect(x +300, y + 300, 50, 120);
  
  fill("red"); 
  rect(x + 360, y + 280, 50, 120);
  
  fill("white");
  rect(x + 420, y + 300, 50, 120);
  
  fill("indigo") 
  rect(x + 480, y + 280, 50, 120);
  
}