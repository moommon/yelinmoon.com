let canvas = document.getElementById("main-canvas");
var context = canvas.getContext("2d");

var window_height = window.innerHeight - 90;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#222";

// 바꿀 수 있는 배경 이미지 URL
let backgroundImageUrl = "./images/main-background.png";

let is_drawing = false;

// 배경 이미지 로드
let background = new Image();
background.src = backgroundImageUrl;

background.onload = function () {
  context.drawImage(background, 0, 0, 1920, 1080);
};

window.onresize = function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 90;
  context.drawImage(background, 0, 0, 1920, 1080);
};

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mouseover", start, false);
canvas.addEventListener("mousemove", draw, false);

function start(event) {
  is_drawing = true;

  context.beginPath();
  context.moveTo(
    event.clientX - canvas.offsetLeft,
    event.pageY - canvas.offsetTop
  );
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(
      event.clientX - canvas.offsetLeft,
      event.pageY - canvas.offsetTop
    );
    context.strokeStyle = "#fff";
    context.lineWidth = "10";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
}
