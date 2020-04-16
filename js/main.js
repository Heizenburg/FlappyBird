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

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }  
}










