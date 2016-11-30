function Mover() {
  this.position = createVector(width/2, height/2);
  this.velocity = createVector(0, 0);
  this.acceleration = p5.Vector.random2D();
  this.topspeed = 5;
  
  this.update = function() {
    this.acceleration.mult(random(2));
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }
  
  this.display = function(r, g, b) {
    noStroke();
    fill(r, g, b);
    stroke(r, g, b);
    vertex(this.position.x, this.position.y);
  };

  this.checkEdges = function() {
    if ((this.position.x > width-100) || (this.position.x < 100)) {
      this.velocity.x = this.velocity.x * -1;
    }
    
    if ((this.position.y > height-100) || (this.position.y < 100)) {
      this.velocity.y = this.velocity.y * -1;
    }
  };
}