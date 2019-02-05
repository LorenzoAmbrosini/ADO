var sketch3 = function(p) {


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

  var i; //0
  var k; //8
  var s; //7
  var t; //1

  var correctCanvasWidth;
  var correctCanvasHeight;

  //0871

  p.preload = function() {
    imgPhone = p.loadImage("./assets/3/phone.png");
    imgBackground = p.loadImage("./assets/3/taxiback.png");
    imgPop = p.loadImage("./assets/3/popup.png")
  };

  p.setup = function() {
    var canvas = p.createCanvas(1152, 648);

    correctCanvasWidth = p.canvas.width /2
    correctCanvasHeight = p.canvas.height /2

    canvas.parent('sketch3');

    p.stroke(0);
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.textFont('Montserrat');

    i = 0; //0

    k = 0; //8

    s = 0; //7

    p.background(255, 200, 0 )

  };

  p.draw = function() {

    p.push();
    p.imageMode(p.CORNER);
    p.image(imgBackground, 0, 0, imgBackground.width * 0.6, imgBackground.height * 0.6);
    p.pop();

    p.push(); // popup
    p.rectMode(p.CORNER);
    p.fill("#fff250");
    p.rect(correctCanvasWidth / 2 + 50, correctCanvasHeight / 2 - 150, 455, 300, 5);

    p.fill(0);
    p.textAlign(p.CENTER);
    p.textSize(20);
    p.text("All the trains to London have been cancelled, but you can't waste time! \n \nFortunately you can call a taxi, \ntype the number 0871 \non your keyboard and... \n  \n... Good luck!",
    correctCanvasWidth / 2 + 70, correctCanvasHeight / 2 - 110, 430, 300 );
    p.pop(); //popup


    p.push(); // phone
    p.imageMode(p.CENTER);
    let scale = Math.max(correctCanvasWidth / imgPhone.width, correctCanvasHeight / imgPhone.height);
    p.image(imgPhone, correctCanvasWidth / 3 - 70, correctCanvasHeight - 299, imgPhone.width, imgPhone.height);
    p.pop(); //phone

    if (p.keyIsPressed == true) {
      p.push(); // tasti
      p.fill('255');
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 140, 45); //0
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 80, 45); //1
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 80, 45); //2
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 80, 45); //3
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 10, 45); //4
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 10, 45); //5
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 10, 45); //6
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 65, 45); //7
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 65, 45); //8
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 65, 45); //9
      p.pop(); //tasti
    }

    if (p.keyIsPressed == false) {

      p.push(); // tasti
      p.fill(255);
      p.stroke(0);
      p.strokeWeight(2);

      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 80, 45); //1
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 80, 45); //2
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 80, 45); //3
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 10, 45); //4
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 10, 45); //5
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 10, 45); //6
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 65, 45); //7
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 65, 45); //8
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 65, 45); //9
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 140, 45); //0
      p.pop(); //tasti

      p.push(); //text tasti
      p.textSize(20);
      p.textAlign(p.CENTER);
      p.textFont('Montserrat');
      p.noStroke();
      p.text('1', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 75);
      p.text('2', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 75);
      p.text('3', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 75);
      p.text('4', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 5);
      p.text('5', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 5);
      p.text('6', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 5);
      p.text('7', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 70);
      p.text('8', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 70);
      p.text('9', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 70);
      p.text('0', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 145);
      p.pop(); //text tasti

    }

    if ((p.keyIsPressed == true) && (p.key == '0') && (primostep === 0) && (schiaccio === 0)) {

      i = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 140, 45); //0
      p.pop();

    }

    if (i == 1) {

      p.text('0', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 145);

      primostep = 1;
      schiaccio = 1;

    }

    if ((p.keyIsPressed == true) && (p.key == '1') && (secondostep === 0) && (schiaccio === 1) && (schiacciodue === 1) && (schiacciotre === 1)) {

      t = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 80, 45); //1
      p.pop();
    }
    if (t == 1) {

      p.text('1', correctCanvasWidth / 2 - 170, correctCanvasHeight / 2 - 145);

      secondostep = 1;
      schiaccioquattro = 1;

    }

    if ((p.keyIsPressed == true) && (p.key == '2') && (terzostep === 1)) {

      p.text('2', correctCanvasWidth / 3 + 100, correctCanvasHeight / 2);

      terzostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '3') && (quartostep === 1)) {

      p.text('3', correctCanvasWidth / 3 + 120, correctCanvasHeight / 2);

      quartostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '4') && (quintostep === 1)) {

      p.text('4', width / 3 + 160, height / 2);

      quintostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '5') && (sestostep === 1)) {

      p.text('5', correctCanvasWidth / 3 + 140, correctCanvasHeight / 2);

      sestostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '6') && (settimostep === 1)) {

      p.text('6', correctCanvasWidth / 3 + 120, correctCanvasHeight / 2);

      settimostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '7') && (ottavostep === 0) && (schiaccio === 1) && (schiacciodue === 1)) {

      s = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 65, 45); //7
      p.pop();
    }
    if (s == 1) {

      p.text('7', correctCanvasWidth / 2 - 195, correctCanvasHeight / 2 - 145);

      ottavostep = 1;
      schiacciotre = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '8') && (nonostep === 0) && (schiaccio === 1)) {

      k = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 65, 45); //8
      p.pop();
    }

    if (k == 1) {

      p.text('8', correctCanvasWidth / 2 - 220, correctCanvasHeight / 2 - 145);

      nonostep = 1;
      schiacciodue = 1;
    }

    if ((p.keyIsPressed == true) && (p.key == '9') && (decimostep === 1)) {

      p.text('9', correctCanvasWidth / 3 + 180, correctCanvasHeight / 2);

      decimostep = 1;
    }
    if (schiaccioquattro === 1) {
      window.open("4_webcam.html", "_self")
    }

    p.push(); // text tasti
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.textFont('Montserrat');
    p.noStroke();
    p.text('1', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 75);
    p.text('2', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 75);
    p.text('3', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 75);
    p.text('4', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 5);
    p.text('5', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 5);
    p.text('6', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 5);
    p.text('7', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 70);
    p.text('8', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 70);
    p.text('9', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 70);
    p.text('0', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 145);
    p.pop(); // text tasti

  };


  // p.backgroundImage = function(imgBackground) {
  //   p.push();
  //   p.translate(correctCanvasWidth / 2, p.canvas.height / 2);
  //   p.imageMode(p.CENTER);
  //   let scale = Math.max(correctCanvasWidth / imgBackground.width, correctCanvasHeight / imgBackground.height);
  //   p.image(imgBackground, correctCanvasWidth/2, correctCanvasHeight/2, imgBackground.width, imgBackground.height)
  //   p.pop();
  // }

  p.windowResized = function() {
    p.resizeCanvas(correctCanvasWidth, correctCanvasHeight);
  }

}

var sketch = new p5(sketch3);
