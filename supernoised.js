let noiseScale=0.2;

function setup(){
  createCanvas(600, 600);
}

function draw() {
  background(0);
  for (let x=0; x < width; x++) {
    for (let y = 0; y < height; y++){
    let noiseVal = noise((random(width)+x)*noiseScale, random(height)*noiseScale);
    stroke(noiseVal*255);
    line(x, random(height)+noiseVal*80, y, random(height));
 
    }
  }
}