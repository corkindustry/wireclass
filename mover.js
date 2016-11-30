function Mover() {
  this.position = createVector(width/2, height/2);
  this.velocity = createVector(0, 0);
  this.acceleration = p5.Vector.random2D();
  this.topspeed = 2;
  
  this.update = function() {
    this.acceleration.mult(random(2));
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }
  
  this.display = function(r, g, b) {
    noStroke();
    fill(r, g, b);
    stroke(r, g, b  );
    ellipse(this.position.x, this.position.y, 8, 8)
    noFill();
    vertex(this.position.x, this.position.y);
  };

  this.checkEdges = function() {
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  };
}