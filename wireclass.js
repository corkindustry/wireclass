var mlen = 6;
var nlen = mlen;
var m = [mlen];
var n = [nlen];


function setup() {
  createCanvas(640,640);
  strokeWeight(2);
  frameRate(60);
  for(var i = 1; i < mlen; i++) {
    n[i] = new Mover();
  }
  
  for(i = 1; i < nlen; i++) {
    m[i] = new Mover();
  }
  
}

function draw() {
  background(255);
  
  beginShape();
  for(var i = 1; i < mlen; i++) {
    m[i].update();
    m[i].checkEdges();
    m[i].display(0,0,255);
  }
endShape(CLOSE);
  
  beginShape();
  for(i = 1; i < nlen; i++) {
    n[i].update();
    n[i].checkEdges();
    n[i].display(0,255,0);
  }
  endShape(CLOSE);


}
