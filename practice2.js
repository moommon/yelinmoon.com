function setup() {
  createCanvas(600, 600);
  background(255);

  angleMode(DEGREES);
}

function draw() {
  // translate(x, y);
  //translate(10, 10);
  //ellipse(100, 100, 50, 50);

  //translate(100, 100);
  //rect(100, 300, 50, 50);

  //arc(300,300,100,100,0,-90);

  noStroke();

  //6
  push();
  rectMode(CENTER);
  translate(500, 300);
  fill("#FF9853");
  rect(0, 0, 200, 200);
  fill("#000");
  rect(-49, -49, mouseX - 300, mouseX - 300, 0, 0, 20, 0);
  rect(49, -49, mouseX - 300, mouseX - 300, 0, 0, 0, 20);
  rect(-49, 49, mouseX - 300, mouseX - 300, 0, 20, 0, 0);
  rect(49, 49, mouseX - 300, mouseX - 300, 20, 0, 0, 0);
  pop();

  //7
  push();
  translate(0, 400);

  fill("#000");
  rect(0, 0, 200, 200);
  fill("#F74F92");
  ellipse(100, 100, 200, 200);
  fill("#000");
  ellipse(100, 100, mouseY - 50, mouseY - 50);
  fill("#fff");
  ellipse(100, 100, mouseY - 100, mouseY - 100);
  pop();

  //1
  fill("#1098f7");
  rect(0, 0, 200, 200);
  fill("#FFE15D");
  arc(0, 200, mouseX, mouseX, 270, 0);

  //2
  fill("#fff");
  rect(200, 0, 200, 200);
  fill("#000");
  triangle(200, 0, 200, 50, 250, 0);
  triangle(250, 0, 250, 50, 300, 0);
  triangle(300, 0, 300, 50, 350, 0);
  triangle(350, 0, 350, 50, 400, 0);
  triangle(200, 50, 200, 100, 250, 50);
  triangle(250, 50, 250, 100, 300, 50);
  triangle(300, 50, 300, 100, 350, 50);
  triangle(350, 50, 350, 100, 400, 50);
  triangle(200, 100, 200, 150, 250, 100);
  triangle(250, 100, 250, 150, 300, 100);
  triangle(300, 100, 300, 150, 350, 100);
  triangle(350, 100, 350, 150, 400, 100);
  triangle(200, 150, 200, 200, 250, 150);
  triangle(250, 150, 250, 200, 300, 150);
  triangle(300, 150, 300, 200, 350, 150);
  triangle(350, 150, 350, 200, 400, 150);

  //3
  fill("#F74F92");
  rect(400, 0, 200, 200);
  fill("#1098f7");
  arc(600, 200, 400, 400, 180, 270);

  //4
  push();
  translate(0, 200);
  fill("#FFE15D");
  rect(0, 0, 200, 200);
  fill("#FF9853");
  arc(200, 200, 400, 400, 180, 270);
  pop();

  //5
  fill("#F74F92");
  rect(200, 200, 200, 200);
  fill("#000");
  ellipse(230, 250, 10, 50);
  ellipse(230, 300, 10, 50);
  ellipse(230, 350, 10, 50);
  ellipse(245, 250, 20, 50);
  ellipse(245, 300, 20, 50);
  ellipse(245, 350, 20, 50);
  ellipse(270, 250, 30, 50);
  ellipse(270, 300, 30, 50);
  ellipse(270, 350, 30, 50);
  ellipse(305, 250, 40, 50);
  ellipse(305, 300, 40, 50);
  ellipse(305, 350, 40, 50);
  ellipse(350, 250, 50, 50);
  ellipse(350, 300, 50, 50);
  ellipse(350, 350, 50, 50);

  fill(255, 255, 255);
  rect(200, 400, 600, 200);

  //8
  push();
  translate(200, 400);
  fill("#1098f7");
  rect(0, 0, 200, 200);
  pop();

  //9
  fill("#FFE15D");
  rect(400, 400, 200, 200);

  push();
  translate(450, 450);
  fill("#1098f7");
  rotate(mouseY);
  ellipse(0, 0, 50, 100);
  pop();
  push();
  translate(550, 450);
  fill("#1098f7");
  rotate(45);
  ellipse(0, 0, 50, 100);
  pop();
  push();
  translate(450, 550);
  fill("#1098f7");
  rotate(45);
  ellipse(0, 0, 50, 100);
  pop();
  push();
  translate(550, 550);
  fill("#1098f7");
  rotate(mouseY);
  ellipse(0, 0, 50, 100);
  pop();

  /**
	push();
	translate(x, y);
	ellipse(100, 100, 50, 50);
	pop();
	**/
}
