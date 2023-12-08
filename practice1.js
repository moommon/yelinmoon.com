function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  background(0);

  noStroke();

  fill(255, 255, 255);
  circle(mouseX, mouseY, mouseY);

  fill("#ff785a");
  triangle(100, 100, 85, 125, 115, 125);

  fill("#ff785a");
  triangle(400, 400, 385, 425, 415, 425);

  fill("ffd25a");
  triangle(200, 200, 185, 225, 215, 225);

  //fill('#fff05a');
  //ellipse(width/2,mouseY+20,mouseX-30);
  //fill('#fff05a');
  //ellipse(140,470,mouseX-50,100);

  //fill('#fff392');
  //ellipse(200,200,mouseX-100,mouseY+50);
  //fill('#fff392');
  //ellipse(width/2,height/2,200,100,mouseY);

  //fill('#ffaa5a');
  //rect(width/2,height/2,mouseX,100,20);

  //fill('#000000');
  //triangle(0, 0, 100, 0, 0, 100);

  //fill('#000000');
  //triangle(width/2, 250, width/2-50, 300, width/2+50, 300);

  //stroke('#ffffff');
  //strokeWeight(5);
  //fill('#000000');
  //triangle(500, 500, 400, 500, 500, 400);

  fill("#fff392");
  ellipse(150, 150, mouseX, mouseY);
  ellipse(350, 150, mouseX, mouseY);

  fill("#000000");
  ellipse(150, 150, 25, 25);
  ellipse(350, 150, 25, 25);

  fill("#FFFFFF");
  triangle(width / 2, 250, width / 2 - 50, 300, width / 2 + 50, 300);

  arc(250, 350, 80, 80, mouseY, mouseY / 3);

  fill("#ff785a");
  triangle(100, 100, 85, 125, 115, 125);
}
