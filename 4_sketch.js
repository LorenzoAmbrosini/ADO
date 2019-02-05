var sketch4 = function(p) {

var imgBackground;
var frameTime = 0;
var clockTime = 0;
var clockSwitch = 1;
var counter = 600;
var b;
var x, y;
var variabile = 1;

var interruttore;


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
  p.background(0);


  p.fill(0, 0, 0, 255);

  p.textSize(32);

  myRec.onResult = p.showResult;

  mySpeech.setVolume(0.8);

  mySpeech.listVoices();
  mySpeech.setVoice(3);
  mySpeech.setRate(0.8);
  mySpeech.setPitch(1);


  song.setVolume(0.3);


  p.fill(166, 237, 247);
  p.noStroke();

  p.ellipseMode(p.CENTER);
  p.fill("blue");
  p.ellipse(p.windowWidth - 130, 100, 70, 70)
  p.rectMode(p.CENTER);

  interruttore = 1;


}

  p.draw = function() {
  p.imageMode(p.CENTER);
  p.image(imgBackground, p.windowWidth/2, p.windowHeight/2, 0.8 * imgBackground.width, 0.8 * imgBackground.height);

  p.push();
  p.fill("blue");
  p.noStroke();
  p.ellipseMode(p.CENTER);
  p.ellipse(p.windowWidth - 130, 100, 70, 70);
  p.pop();

  p.push();
  p.textAlign(p.CENTER);

  p.textSize(30);
  p.fill(255)
  var correctCounter = p.round(counter /30);
  p.text(correctCounter, p.windowWidth - 130, 110, x, y)

  p.pop()

  p.textSize(15);
  p.fill("blue");
  p.textAlign(p.CENTER);

  p.textSize(30);
  p.fill("white"); // why draw when you can talk?

  if(interruttore === 1){
    p.push();
    p.rectMode(p.CORNER)
    p.fill(0, 0, 0, 200);
    p.rect(0, 0, p.windowWidth, p.windowHeight);
    p.pop();

    p.changeCol()

    p.push(); // button
    p.stroke(255, 242, 80);
    p.strokeWeight(2);
    p.rectMode(p.CENTER);
    p.fill(colRect);
    p.rect(p.windowWidth / 2, p.windowHeight / 2 + 160, 100, 60, 30);
    p.pop();

    p.push(); // testo button

    p.textFont('Montserrat');
    p.textAlign(p.CENTER);
    p.textSize(30);
    p.textStyle(p.BOLD);
    p.fill(colText);
    p.text('Ok', p.windowWidth / 2, p.windowHeight / 2 + 170);
    p.pop(); // testo button

    p.push();
    p.textFont('Montserrat');
    p.rectMode(p.CENTER)
    p.textAlign(p.CENTER);
    p.textSize(20);
    p.fill('#fff250');
    p.text('You were lucky, the taxi you called arrived in perfect time. Now you have to tell the taxi driver your destination, which is the British Museum.\n Speak out loud because the traffic noise and the voices of the citizens are very strong, and pay attention to the time!', p.windowWidth / 2, p.windowHeight / 2, 500, 200);
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



  p.backgroundImage = function(imgBackground) {
  p.push();
  p.translate(p.windowWidth / 2, p.windowHeight / 2);
  p.imageMode(p.CENTER);
  let scale = Math.max(p.windowWidth / imgBackground.width, p.windowHeight / imgBackground.height);
  p.image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale);
  p.pop();

}



  p.showResult = function() {
  if (myRec.onResult) {
    //console.log("STO ASCOLTANDO");
    p.push()
    p.rectMode(p.CORNER)
    p.textAlign(p.CENTER);
    p.fill("white");
    p.rect(0.43 * p.windowWidth, 75, 430, 100);
    p.fill("black");
    p.textAlign(p.LEFT);
    p.textSize(25);
    p.text(myRec.resultString, 0.43 * p.windowWidth, 90, 450, 300);
    p.fill(166, 237, 247);
    p.pop();
  }
}





    p.mousePressed = function(){
    if (p.mouseX >= p.width / 2 - 87.5 &&
      p.mouseX <= p.width / 2 - 87.5 + 175 &&
      p.mouseY >= p.height / 2 + 130 &&
      p.mouseY <= p.height / 2 + 130 + 60) {
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
  if (p.mouseX >= p.width / 2 - 87.5 &&
    p.mouseX <= p.width / 2 - 87.5 + 175 &&
    p.mouseY >= p.height / 2 + 130 &&
    p.mouseY <= p.height / 2 + 130 + 60) {
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
