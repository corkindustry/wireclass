var mlen = 5;
var nlen = mlen;
var m = [mlen];
var n = [nlen];


function setup() {
  var canvas = createCanvas(640, 640, [WEBGL]);
  strokeWeight(2);
  //frameRate(60);
  for(var i = 1; i < mlen; i++) {
    n[i] = new Mover();
  }
  
  for(i = 1; i < nlen; i++) {
    m[i] = new Mover();
  }

  canvas.parent('wireclass');

}

function draw() {
  background(200);
  
  beginShape();
  for(var i = 1; i < mlen; i++) {
    m[i].update();
    m[i].checkEdges();
    m[i].display(100, 100, 100);
  }
  endShape(CLOSE);
  
  beginShape();
  for(i = 1; i < nlen; i++) {
    n[i].update();
    n[i].checkEdges();
    n[i].display(50, 50, 50);
  }
  endShape(CLOSE);

}
