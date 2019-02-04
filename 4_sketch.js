var imgBackground;
var frameTime = 0;
var clockTime = 0;
var clockSwitch = 1;
var counter = 900;
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




function preload() {
  song = loadSound('assets/4/speaking.mp3');
  imgBackground = loadImage("assets/4/sfondointerazione.jpg");
}

function setup() {

  console.log(windowWidth);
  console.log(windowHeight);
  // graphics stuff:
  frameRate(30)
  createCanvas(windowWidth, windowHeight);
  background(0);


  fill(0, 0, 0, 255);

  textSize(32);

  myRec.onResult = showResult;
  mySpeech.setVolume(0.8);

  mySpeech.listVoices();
  mySpeech.setVoice(3);
  mySpeech.setRate(0.8);
  mySpeech.setPitch(1);


  song.setVolume(0.3);


  fill(166, 237, 247);
  noStroke();

  ellipseMode(CENTER);
  fill("blue");
  ellipse(windowWidth - 130, 100, 70, 70)
  rectMode(CENTER);

  interruttore = 1;


}

function draw() {
  imageMode(CENTER);
  image(imgBackground, windowWidth/2, windowHeight/2, 0.8 * imgBackground.width, 0.8 * imgBackground.height);

  push();
  fill("blue");
  noStroke();
  ellipseMode(CENTER);
  ellipse(windowWidth - 130, 100, 70, 70);
  pop();

  push();
  textAlign(CENTER);

  textSize(30);
  fill(255)
  var correctCounter = round(counter /30);
  text(correctCounter, windowWidth - 130, 110, x, y)

  pop()

  textSize(15);
  fill("blue");
  textAlign(CENTER);

  textSize(30);
  fill("white"); // why draw when you can talk?

  if(interruttore === 1){
    push();
    rectMode(CORNER)
    fill(0, 0, 0, 200);
    rect(0, 0, windowWidth, windowHeight);
    pop();

    changeCol()

    push(); // button
    stroke(255, 242, 80);
    strokeWeight(2);
    rectMode(CENTER);
    fill(colRect);
    rect(windowWidth / 2, windowHeight / 2 + 160, 100, 60, 30);
    pop();

    push(); // testo button

    textFont('Montserrat');
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    fill(colText);
    text('Ok', windowWidth / 2, windowHeight / 2 + 170);
    pop(); // testo button

    push();
    textFont('Montserrat');
    rectMode(CENTER)
    textAlign(CENTER);
    textSize(20);
    fill('#fff250');
    text('Lorem ipsum dolor sit amet, consectetur adipisci elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.', windowWidth / 2, windowHeight / 2, 500, 100);
    pop();

  }

  if (interruttore === 0){
    countdown();
  }
  console.log(interruttore);
}

function countdown() {
  if (counter > 0) {
    counter--;

  }
  if (counter == 0) {
    window.open("2_webcam.html", "_self")
  }
}



function backgroundImage(imgBackground) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / imgBackground.width, height / imgBackground.height);
  image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale);
  pop();

}

/* function showResult(){
  if (myRec.onResult) {
  b = height/2;
  for (let i = 0; i < 20; i++) {
    textAlign(CENTER);
      text(myRec.resultString, (width/2 ), b, 600,600)
    b += 20;
  }
  }
}

*/





function showResult() {
  if (myRec.onResult) {
    push()
    rectMode(CORNER)
    textAlign(CENTER);
    fill("white");
    rect(0.44 * windowWidth, 90, 400, 200);
    fill("blue");
    textAlign(LEFT);
    textSize(25);
    text(myRec.resultString, 0.44 * windowWidth, 90, 450, 300);
    fill(166, 237, 247);
    pop();
  }
}





  function mousePressed(){
    if (mouseX >= width / 2 - 87.5 &&
      mouseX <= width / 2 - 87.5 + 175 &&
      mouseY >= height / 2 + 130 &&
      mouseY <= height / 2 + 130 + 60) {
        if (mouseButton == LEFT ) {
           interruttore = 0;
           console.log("click");
           mySpeech.speak('Hey there! Where do you wanna go?');
           myRec.start();
           song.play();


        }
    }
  }


function changeCol() {
  if (mouseX >= width / 2 - 87.5 &&
    mouseX <= width / 2 - 87.5 + 175 &&
    mouseY >= height / 2 + 130 &&
    mouseY <= height / 2 + 130 + 60) {
      push();
    colText = 0;
    colRect = '#fff250';
    pop();
  } else {
    push();
    colText = '#fff250';
    colRect = 0;
    pop();
  }
}
