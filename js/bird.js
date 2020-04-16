function Bird() {
  this.y = percentage(height, 50);
  this.x = percentage(width, 25);

  this.gravity = 0.5;
  this.velocity = 0;
  this.lift = -10;
  
  this.show = function() {
    fill(255); 
    ellipse(this.x, this.y, 32, 32);
  }
  
  this.up = function() {
    this.velocity = this.lift;
  }
 
  this.update = function() {
    this.y += this.velocity;
    this.velocity *= 0.9;
    this.velocity += this.gravity;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}