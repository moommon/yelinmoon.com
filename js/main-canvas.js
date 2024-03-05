let canvas = document.getElementById("main-canvas");
var context = canvas.getContext("2d");

var window_height = window.innerHeight - 155;
var window_width = 1200;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#222";

// window.onresize = function (event) {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight - 90;
//   context.drawImage(background, 0, 0, 1920, 1080);
// };
canvas.onclick = function (event) {
  // 캔버스의 위치를 고려해 마우스 좌표를 취득
  const x = event.clientX - (window_width - 1200);
  const y = event.clientY - 80;
  alert(x);
  // 마우스 클릭한 곳에 사각형 그리기

  context.fillRect(x - 15, y - 15, 30, 30);
  context.fillStyle = "#fff";
};

context.fillStyle = "#555";
context.fillRect(565, 320, 80, 80);
//원그리기
context.beginPath();
// 4. 원 모양 설정
// context.arc(605, 360, 13, 0, 2 * Math.PI);
// context.arc(725, 360, 13, 0, 2 * Math.PI);
context.arc(605, 360, 13, 0, 2 * Math.PI);
context.arc(725, 360, 13, 0, 2 * Math.PI);
// 6. 원 내부 색 채우기
context.fillStyle = "#fff";
context.fill();
