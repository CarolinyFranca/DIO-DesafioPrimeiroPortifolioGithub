var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var pontos = 0;

var x = canvas.width/2;
var y = canvas.height - 30;

var raqX = canvas.width/2 - 40;

var dx = 2;
var dy = -2;

var dir = false;
var esq = false;

var tijolos = [];

for (var i = 0; i < 5; i++) {
  tijolos[i] = [];
  for (var c = 0; c < 3; c++) {
    tijolos[i][c] = {x: 0, y:0, status: 1}
  }
}

function desenheTijolos() {
  for (var i = 0; i < 5; i++) {
    for (var c = 0; c < 3; c++) {
      if (tijolos[i][c].status == 1) {
        var tijoloX = (i * 90) + 20;
        var tijoloY = (c * 30) + 20;
        tijolos[i][c].x = tijoloX;
        tijolos[i][c].y = tijoloY;

        ctx.beginPath();
        ctx.rect(tijolos[i][c].x, tijolos[i][c].y, 80, 20);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function colisao() {
  for (var i = 0; i < 5; i++) {
    for (var c = 0; c < 3; c++) {
      var tijolo = tijolos[i][c];
      if (tijolo.status == 1) {
        if ( x > tijolo.x && x < tijolo.x + 80 && y > tijolo.y && y < tijolo.y + 20) {
          dy = -dy;
          tijolo.status = 0;
          pontos++;
          if (pontos >= 15) {
            alert("Você ganhou!!! ;)")
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
}

function desenho(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bola();
  raquete();
  desenheTijolos();
  colisao();

  if ( x > canvas.width-20 || x < 0){
    dx = -dx;
  }

  if ( y < 0){
    dy = -dy;
  } else if ( y > canvas.height - 30) {
    if ( x > raqX && x < raqX + 80) {
    dy = -dy;
    } else{
      alert("Você perdeu!!!");
      document.location.reload();
      clearInterval(interval);
    }
  }

  x += dx;
  y += dy;

  if (dir) {
    raqX = raqX + 10;
  } else if (esq) {
    raqX = raqX - 10;
  }
}
function teste(){
  console.log("teste");
}
function bola(){
  ctx.beginPath();
  ctx.rect(x, y, 20, 20);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}
function raquete(){
  ctx.beginPath();
  ctx.rect(raqX,canvas.height - 20, 80, 15);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

document.addEventListener("keydown", teclaPressionada);
document.addEventListener("keyup", teclaSolta);

function teclaPressionada(e) {
  if (e.key == "ArrowRight") {
    dir = true;
  } else if (e.key == "ArrowLeft") {
    esq = true;
  }
}
function teclaSolta(e){
  if (e.key == "Right" || e.key == "ArrowRight") {
    dir = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    esq = false;
  }
}

var interval = setInterval(desenho, 20);