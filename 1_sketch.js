var imgBackground;
var logo;
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
  push(); // logo
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / logo.width, height / logo.height);
  image(logo, 0, -100, logo.width / 4 * scale, logo.height / 4 * scale);
  pop(); // logo


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

  textAlign(CENTER);
  translate(width / 2, height / 2);
  textStyle(BOLD);
  textSize(35);
  fill(255, 242, 80);
  text('Sometimes it\'s hard communicate.',-10, 70);
  text('Sometimes it\'s hard understand.',-10, 120);

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

/*function mouseClicked() {
  if (mouseX >= width / 2 - 87.5 &&
    mouseX <= width / 2 - 87.5 + 175 &&
    mouseY >= height / 2 + 130 &&
    mouseY <= height / 2 + 130 + 60) {
    button = true;
    }
}*/

function changeCol() {
  if (mouseX >= width / 2 - 87.5 &&
    mouseX <= width / 2 - 87.5 + 175 &&
    mouseY >= height / 2 + 130 &&
    mouseY <= height / 2 + 130 + 60) {
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
