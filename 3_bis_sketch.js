var primostep = 0;
var secondostep = 0;
var terzostep = 0;
var quartostep = 0;
var quintostep = 0;
var sestostep = 0;
var settimostep = 0;
var ottavostep = 0;
var nonostep = 0;
var decimostep = 0;

var schiaccio = 0;
var schiacciodue = 0;

var schiacciotre = 0;
var schiaccioquattro = 0;

var imgBackground;
var imgPhone;
var imgPop;

//0871

function preload() {
  imgPhone = loadImage("./assets/3_bis/phone.png");
  imgBackground = loadImage("./assets/3_bis/taxiback.png");
  imgPop = loadImage("./assets/3_bis/popup.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  stroke(0);
  textSize(20);
  textAlign(CENTER);
  textFont('Montserrat');

  backgroundImage(imgBackground);

  push(); // popup
  imageMode(CENTER);
  let scaleG = Math.max(width / imgPop.width + 50, height / imgPop.height + 50);
  image(imgPop, windowWidth / 2 + 70, windowHeight / 2 - 180, imgPop.width / 5, imgPop.height / 7);
  pop(); //popup


  push(); // phone
  imageMode(CENTER);
  let scale = Math.max(width / imgPhone.width, height / imgPhone.height);
  image(imgPhone, windowWidth / 3 - 70, windowHeight - 299, imgPhone.width, imgPhone.height);
  pop(); //phone

  push(); //tasti
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(2);
  fill(255)
  ellipse(windowWidth / 2 - 270, windowHeight / 2 + 245, 45); //0
  ellipse(windowWidth / 2 - 330, windowHeight / 2 + 35, 45); //1
  ellipse(windowWidth / 2 - 270, windowHeight / 2 + 35, 45); //2
  ellipse(windowWidth / 2 - 210, windowHeight / 2 + 35, 45); //3
  ellipse(windowWidth / 2 - 330, windowHeight / 2 + 105, 45); //4
  ellipse(windowWidth / 2 - 270, windowHeight / 2 + 105, 45); //5
  ellipse(windowWidth / 2 - 210, windowHeight / 2 + 105, 45); //6
  ellipse(windowWidth / 2 - 330, windowHeight / 2 + 175, 45); //7
  ellipse(windowWidth / 2 - 270, windowHeight / 2 + 175, 45); //8
  ellipse(windowWidth / 2 - 210, windowHeight / 2 + 175, 45); //9
  pop(); //tasti


}

function draw() {

  if (keyIsPressed == false) {
    push();
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(windowWidth / 2 - 270, windowHeight / 2 + 245, 45); //0
    ellipse(windowWidth / 2 - 330, windowHeight / 2 + 35, 45); //1
    ellipse(windowWidth / 2 - 330, windowHeight / 2 + 175, 45); //7
    ellipse(windowWidth / 2 - 270, windowHeight / 2 + 175, 45); //8
    pop();

    push();
    stroke(0)
    text('1', windowWidth / 2 - 330, windowHeight / 2 + 40);
    text('7', windowWidth / 2 - 330, windowHeight / 2 + 180);
    text('8', windowWidth / 2 - 270, windowHeight / 2 + 180);
    text('0', windowWidth / 2 - 270, windowHeight / 2 + 250);
    pop();

  }

  if ((keyIsPressed == true) && (key == '0') && (primostep === 0) && (schiaccio === 0)) {

    push();
    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(windowWidth / 2 - 270, windowHeight / 2 + 245, 45); //0
    pop();

    text('0', width / 2 - 330, height / 2 - 30);

    primostep = 1;
    schiaccio = 1;

  }

  if ((keyIsPressed == true) && (key == '1') && (secondostep === 0) && (schiaccio === 1) && (schiacciodue === 1) && (schiacciotre === 1)) {

    push();
    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(windowWidth / 2 - 330, windowHeight / 2 + 35, 45); //1
    pop();

    text('1', width / 3 + 25, height / 2 - 30);

    secondostep = 1;
    schiaccioquattro = 1;

  }

  if ((keyIsPressed == true) && (key == '2') && (terzostep === 1)) {

    text('2', width / 3 + 100, height / 2);

    terzostep = 1;
  }
  if ((keyIsPressed == true) && (key == '3') && (quartostep === 1)) {

    text('3', width / 3 + 120, height / 2);

    quartostep = 1;
  }
  if ((keyIsPressed == true) && (key == '4') && (quintostep === 1)) {

    text('4', width / 3 + 160, height / 2);

    quintostep = 1;
  }
  if ((keyIsPressed == true) && (key == '5') && (sestostep === 1)) {

    text('5', width / 3 + 140, height / 2);

    sestostep = 1;
  }
  if ((keyIsPressed == true) && (key == '6') && (settimostep === 1)) {

    text('6', width / 3 + 120, height / 2);

    settimostep = 1;
  }
  if ((keyIsPressed == true) && (key == '7') && (ottavostep === 0) && (schiaccio === 1) && (schiacciodue === 1)) {

    push();
    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(windowWidth / 2 - 330, windowHeight / 2 + 175, 45); //7
    pop();

    text('7', width / 3, height / 2 - 30);

    ottavostep = 1;
    schiacciotre = 1;
  }
  if ((keyIsPressed == true) && (key == '8') && (nonostep === 0) && (schiaccio === 1)) {

    push();
    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(windowWidth / 2 - 270, windowHeight / 2 + 175, 45); //8
    pop();


    text('8', width / 3 - 25, height / 2 - 30);

    nonostep = 1;
    schiacciodue = 1;
  }
  if ((keyIsPressed == true) && (key == '9') && (decimostep === 1)) {

    text('9', width / 3 + 180, height / 2);

    decimostep = 1;
  }
  if (schiaccioquattro === 1) {
    window.open("4_webcam.html", "_self")
  }

  push();// text tasti
  textSize(20);
  textAlign(CENTER);
  textFont('Montserrat');
  noStroke();
  text('1', windowWidth / 2 - 330, windowHeight / 2 + 40);
  text('2', windowWidth / 2 - 270, windowHeight / 2 + 40);
  text('3', windowWidth / 2 - 210, windowHeight / 2 + 40);
  text('4', windowWidth / 2 - 330, windowHeight / 2 + 110);
  text('5', windowWidth / 2 - 270, windowHeight / 2 + 110);
  text('6', windowWidth / 2 - 210, windowHeight / 2 + 110);
  text('7', windowWidth / 2 - 330, windowHeight / 2 + 180);
  text('8', windowWidth / 2 - 270, windowHeight / 2 + 180);
  text('9', windowWidth / 2 - 210, windowHeight / 2 + 180);
  text('0', windowWidth / 2 - 270, windowHeight / 2 + 250);
  pop(); // text tasti

}


function backgroundImage(imgBackground) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / imgBackground.width, height / imgBackground.height);
  image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale)
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
