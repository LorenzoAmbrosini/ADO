var sketch5 = function(p) {

  var imgBackground;
  var man;
  var popup;
  var home;
  var title;
  var maxTitleSize = 15;
  var phase = -10;

  p.preload = function() {

    imgBackground = p.loadImage("./assets/5/sotto.png");
    man = p.loadImage("./assets/5/man.png");
    popup = p.loadImage("./assets/5/popup.png");
    home = p.loadImage("./assets/5/home.png");
    title = p.loadImage("./assets/5/title.png");
  };

  p.setup = function() {

    p.createCanvas(1152, 648);
    p.textFont('Montserrat');
    p.background(25);

  };

  p.draw = function() {

    p.backgroundImage(imgBackground);

    p.push(); // man
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.imageMode(p.CENTER);
    let scale = Math.max(p.windowWidth / man.width, p.windowHeight / man.height);
    p.image(man, -480, 125, man.width / 4 * scale, man.height / 4 * scale);
    p.pop(); //man

    p.push(); // popup
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.imageMode(p.CENTER);
    let scaleG = Math.max(p.windowWidth / popup.width + 50, p.windowHeight / popup.height + 50);
    p.image(popup, 15, -40, popup.width / 4 * scale, popup.height / 5.5 * scale);
    p.pop(); //popup

    p.push(); // home
    p.imageMode(p.CENTER);
    let scaleH = Math.max(p.windowWidth / home.width, p.windowHeight / home.height);
    p.image(home, 100, 100, home.width / 30 * scaleH, home.height / 30 * scaleH);
    p.pop(); // home

    p.push(); //title
    var x = p.windowWidth / 2;
    var y = p.windowHeight / 2 - 300;
    phase = p.frameCount / 5;
    var sizeOffset = (p.sin(phase) + 30);
    var titleSize = sizeOffset * maxTitleSize;
    p.imageMode(p.CENTER);
    p.image(title, x, y, titleSize * 1.2, titleSize / 5);
    p.pop(); //title


    p.textAlign(p.CENTER);
    p.textSize(30);
    p.textFont()


    p.push(); //text popup
    p.textAlign(p.CENTER);
    p.textSize(18);
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.text('In the information theory the word NOISE indicates   ', 20, -200);
    p.text('everything that intervenes between the transmitte, ', 20, -175);
    p.text('and the receiver,  compromising the effectiveness ', 20, -150);
    p.text('of the communication (it is essentially ', 20, -125);
    p.text('a technical interference). In other cases ', 20, -100);
    p.text('the concept assumes a metaphorical value and refers', 20, -75);
    p.text('to all types of disturbances that can intervene ', 20, -50);
    p.text('in the communicative process, reducing its effectiveness ', 20, -25);
    p.text('or even compromising the result.', 20, 0);
    p.text('The concept of INFORMATION NOISE in psychology', 20, 25);
    p.text('and semiotics,"is a disorder caused by the excess of ', 20, 50);
    p.text('information, such that even the potentially useful   ', 20, 75);
    p.text(' element is not recognized, not even identified, ', 20, 100);
    p.text('or identified with difficulty". ', 20, 125);
    p.pop(); // text pop

  };

    p.backgroundImage = function(imgBackground) {

    p.push();
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.imageMode(p.CENTER);
    let scale = Math.max(p.windowWidth / imgBackground.width, p.windowHeight / imgBackground.height);
    p.image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale);
    p.pop();

  };

    p.mousePressed = function() {
    if (p.mouseX >= 0 &&
      p.mouseX <= 176 &&
      p.mouseY >= 0 &&
      p.mouseY <= 172)
      window.open("index.html", "_self");
  }


}

var sketch = new p5(sketch5);
