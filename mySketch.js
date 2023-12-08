let movingX;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  textFont("Arimo");
  //frameRate(24);
}

function draw() {
  moving = sin(frameCount / 2) * 300;

  translate(0, 0);
  noFill();
  //stroke(255);
  noStroke();

  push();

  push(); //main artboard
  fill(0);
  rect(0, 0, windowWidth - 520, 750);

  fill(255);
  noStroke();
  textSize(100);
  text("YELIN MOON", moving, moving * 2);

  pop();

  //push(); //3D button
  //rect(1400, 0, 520, 250);
  //pop();

  //push(); //Interation
  //rect(1400, 250, 520, 250);
  //pop();

  //push(); //
  //rect(1400, 500, 520, 250);
  //pop();

  push(); //bottom
  rect(0, 750, windowWidth, 330);
  pop();

  pop();

  //text
  fill(255);
  noStroke();
  textSize(100);
  text("YELIN MOON", moving, moving * 2);

  //mouse
  noFill();
  stroke(255);
  ellipse(mouseX, mouseY, 80);
  textSize(30);
  text("Hi", mouseX, mouseY);
}
function windowResized() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}
