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

  //0871

  p.preload = function() {
    imgPhone = p.loadImage("./assets/3_bis/phone.png");
    imgBackground = p.loadImage("./assets/3_bis/taxiback.png");
    imgPop = p.loadImage("./assets/3_bis/popup.png")
  };

  p.setup = function() {
    var canvas = p.createCanvas(1152, 648);

    canvas.parent('sketch3');


    p.stroke(0);
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.textFont('Montserrat');

    p.backgroundImage(imgBackground);

    p.push(); // popup
    p.imageMode(p.CENTER);
    let scaleG = Math.max(p.windowWidth / imgPop.width + 50, p.windowHeight / imgPop.height + 50);
    p.image(imgPop, p.windowWidth / 2 + 70, p.windowHeight / 2 - 180, imgPop.width / 5, imgPop.height / 7);
    p.pop(); //popup


    p.push(); // phone
    p.imageMode(p.CENTER);
    let scale = Math.max(p.windowWidth / imgPhone.width, p.windowHeight / imgPhone.height);
    p.image(imgPhone, p.windowWidth / 3 - 70, p.windowHeight - 299, imgPhone.width, imgPhone.height);
    p.pop(); //phone

    p.push(); //tasti
    p.ellipseMode(p.CENTER);
    p.stroke(0);
    p.strokeWeight(2);
    p.fill(255)
    p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 245, 45); //0
    p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 35, 45); //1
    p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 35, 45); //2
    p.ellipse(p.windowWidth / 2 - 210, p.windowHeight / 2 + 35, 45); //3
    p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 105, 45); //4
    p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 105, 45); //5
    p.ellipse(p.windowWidth / 2 - 210, p.windowHeight / 2 + 105, 45); //6
    p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 175, 45); //7
    p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 175, 45); //8
    p.ellipse(p.windowWidth / 2 - 210, p.windowHeight / 2 + 175, 45); //9
    p.pop(); //tasti


  };

  p.draw = function() {

    if (p.keyIsPressed == false) {
      p.push();
      p.fill(255);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 245, 45); //0
      p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 35, 45); //1
      p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 175, 45); //7
      p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 175, 45); //8
      p.pop();

      p.push();
      p.stroke(0)
      p.text('1', p.windowWidth / 2 - 330, p.windowHeight / 2 + 40);
      p.text('7', p.windowWidth / 2 - 330, p.windowHeight / 2 + 180);
      p.text('8', p.windowWidth / 2 - 270, p.windowHeight / 2 + 180);
      p.text('0', p.windowWidth / 2 - 270, p.windowHeight / 2 + 250);
      p.pop();

    }

    if ((p.keyIsPressed == true) && (p.key == '0') && (primostep === 0) && (schiaccio === 0)) {

      p.push();
      p.fill(200);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 245, 45); //0
      p.pop();

      p.text('0', p.windowWidth / 2 - 330, p.windowHeight / 2 - 30);

      primostep = 1;
      schiaccio = 1;

    }

    if ((p.keyIsPressed == true) && (p.key == '1') && (secondostep === 0) && (schiaccio === 1) && (schiacciodue === 1) && (schiacciotre === 1)) {

      p.push();
      p.fill(200);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 35, 45); //1
      p.pop();

      p.text('1', p.windowWidth / 3 + 25, p.windowHeight / 2 - 30);

      secondostep = 1;
      schiaccioquattro = 1;

    }

    if ((p.keyIsPressed == true) && (p.key == '2') && (terzostep === 1)) {

      p.text('2', p.windowWidth / 3 + 100, p.windowHeight / 2);

      terzostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '3') && (quartostep === 1)) {

      p.text('3', p.windowWidth / 3 + 120, p.windowWidth / 2);

      quartostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '4') && (quintostep === 1)) {

      p.text('4', width / 3 + 160, height / 2);

      quintostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '5') && (sestostep === 1)) {

      p.text('5', p.windowWidth / 3 + 140, p.windowHeight / 2);

      sestostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '6') && (settimostep === 1)) {

      p.text('6', p.windowWidth / 3 + 120, p.windowHeight / 2);

      settimostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '7') && (ottavostep === 0) && (schiaccio === 1) && (schiacciodue === 1)) {

      p.push();
      p.fill(200);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(p.windowWidth / 2 - 330, p.windowHeight / 2 + 175, 45); //7
      p.pop();

      p.text('7', p.windowWidth / 3, p.windowHeight / 2 - 30);

      ottavostep = 1;
      schiacciotre = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '8') && (nonostep === 0) && (schiaccio === 1)) {

      p.push();
      p.fill(200);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(p.windowWidth / 2 - 270, p.windowHeight / 2 + 175, 45); //8
      p.pop();


      p.text('8', p.windowWidth / 3 - 25, p.windowHeight / 2 - 30);

      nonostep = 1;
      schiacciodue = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '9') && (decimostep === 1)) {

      p.text('9', p.windowWidth / 3 + 180, p.windowHeight / 2);

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
    p.text('1', p.windowWidth / 2 - 330, p.windowHeight / 2 + 40);
    p.text('2', p.windowWidth / 2 - 270, p.windowHeight / 2 + 40);
    p.text('3', p.windowWidth / 2 - 210, p.windowHeight / 2 + 40);
    p.text('4', p.windowWidth / 2 - 330, p.windowHeight / 2 + 110);
    p.text('5', p.windowWidth / 2 - 270, p.windowHeight / 2 + 110);
    p.text('6', p.windowWidth / 2 - 210, p.windowHeight / 2 + 110);
    p.text('7', p.windowWidth / 2 - 330, p.windowHeight / 2 + 180);
    p.text('8', p.windowWidth / 2 - 270, p.windowHeight / 2 + 180);
    p.text('9', p.windowWidth / 2 - 210, p.windowHeight / 2 + 180);
    p.text('0', p.windowWidth / 2 - 270, p.windowHeight / 2 + 250);
    p.pop(); // text tasti

  };


  p.backgroundImage = function(imgBackground) {
    p.push();
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.imageMode(p.CENTER);
    let scale = Math.max(p.windowWidth / imgBackground.width, p.windowHeight / imgBackground.height);
    p.image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale)
    p.pop();
  }

  p.windowResized = function() {
    p.resizeCanvas(windowWidth, windowHeight);
  }

}

var sketch = new p5(sketch3);
