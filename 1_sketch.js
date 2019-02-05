var imgBackground;
var logo;
var maxLogoSize = 20;
var phase = -10;
var colText = '255, 242, 80';
var colRect = 0;

function preload() {
  imgBackground = loadImage("./assets/1/sfondo.png");
  logo = loadImage("./assets/1/logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Montserrat');
  background(25);
}

function draw() {
  backgroundImage(imgBackground);

  //logo
  push();
  var x = windowWidth / 2;
  var y = windowHeight / 2 - 180;
  phase = frameCount / 5;
  var sizeOffset = (sin(phase) + 30);
  var logoSize = sizeOffset * maxLogoSize;
  imageMode(CENTER);
  image(logo, x, y, logoSize * 1.1, logoSize / 2);
  pop();
  //logo

  changeCol(); // cambia colore button

  push(); // button
  stroke(255, 242, 80);
  strokeWeight(2);
  rectMode(CENTER);
  fill(colRect);
  rect(width / 2, height / 2 + 200, 175, 60, 30, 30, 30, 30);
  pop(); // button
  push(); // testo button
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);
  fill(colText);
  text('Start', width / 2, height / 2 + 210);
  pop(); // testo button

  //claim
  textAlign(CENTER);
  translate(width / 2, height / 2);
  textStyle(BOLD);
  textSize(35);
  fill(255, 242, 80);

  text('Sometimes it\'s hard to communicate', -10, 70);
  text('Sometimes it\'s hard to understand', -10, 120);
  //claim
}

function mousePressed() {
  if (mouseX >= width / 2 - 87.5 &&
    mouseX <= width / 2 - 87.5 + 175 &&
    mouseY >= height / 2 + 130 &&
    mouseY <= height / 2 + 130 + 60)
    window.open("2_webcam.html", "_self");
}


function backgroundImage(imgBackground) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / imgBackground.width, height / imgBackground.height);
  image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale);
  pop();

}


function changeCol() {
  if (mouseX >= width / 2 - 87.5 &&
    mouseX <= width / 2 + 87.5 &&
    mouseY >= height / 2 + 200 - 30 &&
    mouseY <= height / 2 + 200 + 30) {
    colText = 0;
    colRect = '#fff250';
  } else {
    colText = '#fff250';
    colRect = 0;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
