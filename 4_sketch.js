var sketch4 = function(p) {

var imgBackground;
var frameTime = 0;
var clockTime = 0;
var clockSwitch = 1;
var counter = 900;
var b;
var x, y;
var variabile = 1;

var interruttore;

var correctCanvasWidth;
var correctCanvasHeight;


var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var song;
myRec.continuous = true; // do continuous recognition

var mySpeech = new p5.Speech();
mySpeech.setLang('en-UK');

// speech synthesis object




 p.preload = function() {
  song = p.loadSound('assets/4/speaking.mp3');
  imgBackground = p.loadImage("assets/4/sfondointerazione.jpg");
};

 p.setup = function() {


  // graphics stuff:
  p.frameRate(30)
  var canvas = p.createCanvas(1152, 648);
  canvas.parent('sketch4');


  correctCanvasWidth = p.canvas.width / 2;
  correctCanvasHeight = p.canvas.height / 2;



  p.fill(0, 0, 0, 255);

  p.textSize(32);

  myRec.onResult = p.showResult;

  mySpeech.setVolume(0.8);

  mySpeech.listVoices();
  mySpeech.setVoice(49);
  mySpeech.setRate(0.8);
  mySpeech.setPitch(1);


  song.setVolume(0.3);


  p.noStroke();

  p.ellipseMode(p.CENTER);
  p.fill(50);
  p.ellipse(p.windowWidth - 130, 100, 70, 70)
  p.rectMode(p.CENTER);

  interruttore = 1;


}

  p.draw = function() {

  p.push();
  p.imageMode(p.CORNER);
  p.image(imgBackground, 0, -10, imgBackground.width * 0.6, imgBackground.height * 0.6);
  p.pop();


  p.push();
  p.fill(50);
  p.noStroke();
  p.ellipseMode(p.CENTER);
  p.ellipse(correctCanvasWidth - 70, 70, 70, 70);
  p.pop();

  p.push();
  p.textAlign(p.CENTER);

  p.textSize(30);
  p.fill(255)
  var correctCounter = p.round(counter /30);
  p.text(correctCounter, correctCanvasWidth - 70, 80, x, y)

  p.pop()

  p.textSize(15);
  p.fill("blue");
  p.textAlign(p.CENTER);

  p.textSize(30);
  p.fill("white"); // why draw when you can talk?

  if(interruttore === 1){
    p.push();
    p.rectMode(p.CORNER)
    p.fill(0, 0, 0, 230);
    p.rect(0, 0, correctCanvasWidth, correctCanvasHeight);
    p.pop();

    p.changeCol()

    p.push(); // button
    p.stroke(255, 242, 80);
    p.strokeWeight(2);
    p.rectMode(p.CENTER);
    p.fill(colRect);
    p.rect(correctCanvasWidth/2, correctCanvasHeight / 2 + 160, 100, 60, 30);
    p.pop();

    p.push(); // testo button

    p.textFont('Montserrat');
    p.textAlign(p.CENTER);
    p.textSize(30);
    p.textStyle(p.BOLD);
    p.fill(colText);
    p.text('Ok', correctCanvasWidth/2, correctCanvasHeight/2 + 170);
    p.pop(); // testo button

    p.push();
    p.textFont('Montserrat');
    p.rectMode(p.CENTER)
    p.textAlign(p.CENTER);
    p.textSize(20);
    p.fill('#fff250');
    p.text('You were lucky, the taxi you called arrived in perfect time. Now you have to tell the taxi driver your destination, which is the British Museum.\n Speak out loud because of traffic noise \nand the voices of the citizens are very strong. \nKeep the volume up and pay attention to the time!',
    correctCanvasWidth / 2, correctCanvasHeight / 2 + 20, 550, 200);
    p.pop();

  }

  if (interruttore === 0){
    p.countdown();
    p.showResult();
  }


  //console.log(interruttore);
}

  p.countdown = function() {
  if (counter > 0) {
    counter--;

  }
  if (counter == 0) {
    window.open("5_final.html", "_self")
  }
}



  p.showResult = function() {
  if (myRec.onResult) {
    //console.log("STO ASCOLTANDO");
    p.push()
    p.rectMode(p.CORNER)
    p.textAlign(p.CENTER);
    p.fill("white");
    p.rect(correctCanvasWidth/2 - 70, 105, 340, 80);
    p.fill("black");
    p.textAlign(p.LEFT);
    p.textSize(25);
    p.text(myRec.resultString, correctCanvasWidth/2 - 60, 110, 330, 100);
    p.fill(166, 237, 247);
    p.pop();
  }
}





    p.mousePressed = function(){
    if (p.mouseX >= correctCanvasWidth/2 - 50 &&
      p.mouseX <= correctCanvasWidth/2 + 50 &&
      p.mouseY >= correctCanvasHeight/2 + 130  &&
      p.mouseY <= correctCanvasHeight/2 + 190) {
        if (p.mouseButton == p.LEFT ) {
           interruttore = 0;
           console.log("click");
           mySpeech.speak('Hey there! Where do you wanna go?');
           myRec.start();
           song.play();


        }
    }
  }


  p.changeCol = function() {
  if (p.mouseX >= correctCanvasWidth/2 - 50 &&
    p.mouseX <= correctCanvasWidth/2 + 50 &&
    p.mouseY >= correctCanvasHeight/2 + 130  &&
    p.mouseY <= correctCanvasHeight/2 + 190) {
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

var sketch = new p5(sketch4);
