var sketch5 = function(p) {

  var imgBackground;
  var man;
  var popup;
  var home;
  var title;
  var maxTitleSize = 15;
  var phase = -10;

  var correctCanvasWidth;
  var correctCanvasHeight;

  p.preload = function() {

    imgBackground = p.loadImage("./assets/5/sotto.png");
    man = p.loadImage("./assets/5/man.png");
    popup = p.loadImage("./assets/5/popup.png");
    home = p.loadImage("./assets/5/home.png");


    title = p.loadImage("./assets/5/title.png");
  };

  p.setup = function() {

    console.log(home.width / 3);
    console.log(home.height / 3);


    p.createCanvas(1152, 648);
    p.textFont('Montserrat');
    p.background(25);

    correctCanvasWidth = p.canvas.width / 2;
    correctCanvasHeight = p.canvas.height / 2;

  };

  p.draw = function() {

    p.changeCol()

    p.push();
    p.imageMode(p.CORNER);
    p.image(imgBackground, 0, 0);
    p.pop();

    p.push(); // man
    p.imageMode(p.CENTER);
    p.image(man, 250, correctCanvasHeight - 200, man.width / 3, man.height / 3);
    p.pop(); //man



    p.push(); // home
    p.imageMode(p.CORNER);
    p.image(home, 25, 25, home.width / 3, home.height / 3);
    p.pop(); // home


    p.push(); //title
    var x = correctCanvasWidth / 2 + 230;
    var y = correctCanvasHeight / 2 - 250;
    phase = p.frameCount / 5;
    var sizeOffset = (p.sin(phase) + 30);
    var titleSize = sizeOffset * maxTitleSize;
    p.imageMode(p.CENTER);
    p.image(title, x, y, titleSize * 1.2, titleSize / 5);
    p.pop(); //title






    p.push(); // popup
    p.rectMode(p.CORNER);
    p.fill("#fff250");
    p.rect(correctCanvasWidth / 2 - 50, correctCanvasHeight / 2 - 170, 560, 390, 5);
    p.pop();

    p.push(); //text popup
    p.textAlign(p.LEFT);
    p.textSize(19);
    p.text('In the information theory the word NOISE indicates everything that intervenes between the transmitter, and the receiver, compromising the effectiveness \nof the communication (it is essentially a technical interference). \nIn other cases the concept assumes a metaphorical value and refers to all types of disturbances that can intervene in the communicative process, reducing \nits effectiveness or even compromising the result. \nThe concept of INFORMATION NOISE in psychology and semiotics,"is a disorder caused by the excess \nof information, such that even the potentially useful element is not recognized, not even identified, \nor identified with difficulty". ',
    correctCanvasWidth / 2 - 20, correctCanvasHeight / 2 - 140, 520, 450, 5);
    p.pop(); // text pop

    p.push(); // button
    p.stroke(255, 242, 80);
    p.strokeWeight(2);
    p.rectMode(p.CENTER);
    p.fill(colRect);
    p.rect(correctCanvasWidth/2 + 230, correctCanvasHeight / 2 + 270, 200, 60, 30);
    p.pop();

    p.push(); // testo button

    p.textFont('Montserrat');
    p.textAlign(p.CENTER);
    p.textSize(30);
    p.textStyle(p.BOLD);
    p.fill(colText);
    p.text('Read more', correctCanvasWidth/2 + 230, correctCanvasHeight / 2 + 280);
    p.pop(); // testo button

  };



    p.mousePressed = function() {
    if (p.mouseX >= correctCanvasWidth/2 +130 &&
      p.mouseX <= correctCanvasWidth/2 + 330 &&
      p.mouseY >= correctCanvasHeight/2 + 240 &&
      p.mouseY <= correctCanvasHeight/2 + 260){
      window.open("https://en.wikipedia.org/wiki/Communication_noise");
    }

    if(p.mouseX >= 25 &&
      p.mouseX <= 25 + 58 &&
      p.mouseY >= 25 &&
      p.mouseY <= 25 + 58){
       window.open("index.html", "_self");

      }
  }

  p.changeCol = function() {
  if (p.mouseX >= correctCanvasWidth/2 +130 &&
    p.mouseX <= correctCanvasWidth/2 + 330 &&
    p.mouseY >= correctCanvasHeight/2 + 240 &&
    p.mouseY <= correctCanvasHeight/2 + 300) {
      p.push();
    colText = 0;
    colRect = '#fff250';
    p.pop();
  } else {
    p.push();
    colText = '#fff250';
    colRect = 0;
    p.pop();
  }
}




}

var sketch = new p5(sketch5);
