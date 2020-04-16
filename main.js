let bird;
let pipes = []; 

function setup() {
  createCanvas(450, 500);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.show();
  bird.update();
  
  if (frameCount % 110 == 0) {
    pipes.push(new Pipe());
  }
  
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    
    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }
    
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
}

function percentage(width, percentile){
  return (parseFloat(width) * parseFloat(percentile)) / 100;
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }  
}

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








