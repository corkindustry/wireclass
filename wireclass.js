var m = new Mover(6);
var n = new Mover(6);


function setup() {
  createCanvas(640,640);
  strokeWeight(2);
  frameRate(60);
  for(var i = 1; i < m.length; i++) {
    m[i] = new Mover();
  }
  
  for(var i = 1; i < n.length; i++) {
    n[i] = new Mover();
  }
  
}

function draw() {
  background(255);
  
  beginShape();
  for(var i = 1; i < m.length; i++) {
    m[i].update();
    m[i].checkEdges();
    m[i].display(0,0,255);
  }
endShape(CLOSE);
  
  beginShape();
  for(var i = 1; i < n.length; i++) {    
    n[i].update();
    n[i].checkEdges();
    n[i].display(0,255,0);    
  }
  endShape(CLOSE);

function Mover() {
    position = createVector(width/2, height/2);
    velocity = createVector(0, 0);
    var topspeed = 10;
  }

  function update() {

    acceleration = createVector.random2D();
    acceleration.mult(random(2));

    velocity.add(acceleration);
    velocity.limit(topspeed);
    position.add(velocity);
  }

  function display(var r, var g, var b) {
    noStroke();
    fill(r, g, b);
    stroke(r, g, b);
    vertex(position.x, position.y);
  }

  function checkEdges() {
    if ((position.x > width-100) || (position.x < 100)) {
      velocity.x = velocity.x * -1;
    }
    if ((position.y > height-100) || (position.y < 100)) {
      velocity.y = velocity.y * -1;
    }
  }


}
