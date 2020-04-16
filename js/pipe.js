function Pipe() {
  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.x = width;
  this.w = 25; 
  this.speed = 1;
  this.highlight = false;
  
  this.show = function() {
    fill(255);
    if (this.highlight) { 
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.top);
  }
  
  this.hits= function(bird) {
     if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true;
          return true;
        }
     }
    this.highlight = false;
    return false;
  }
  
  this.update = function() {
    this.x -= this.speed;
  }
  
  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } 
  }
 }
