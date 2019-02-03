var frameTime = 0;
var clockTime = 0;
var clockSwitch = 1;
var counter = 25;
var b;
var x, y;
var variabile =1;


var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var song;
myRec.continuous = true; // do continuous recognition

var mySpeech = new p5.Speech();
mySpeech.setLang('en-UK');

 // speech synthesis object




function preload() {
 song = loadSound('speaking.mp3');
}

function setup()
{
  // graphics stuff:
  frameRate(30)
  createCanvas(windowWidth, windowHeight);

  fill(0, 0, 0, 255);

  textSize(32);

  myRec.onResult = showResult;
 mySpeech.setVolume(0.8);

 mySpeech.listVoices();
mySpeech.setVoice(3);
mySpeech.setRate(0.8);
mySpeech.setPitch(1);


song.setVolume(0.3);

setInterval(countdown, 1000);
background("green");
fill("green");
noStroke();
rectMode(CENTER);
rect(width/2, height/2, 80,80);

}

function draw()
{

  text(counter, width/2, height/2, x, y);
  fill(255, 255, 255);
  textSize(30);

  textSize(30);
  fill("white");
  textAlign(CENTER);
  text('Press Mouse to start talk with the driver', width/2, height/2 - 150);
    text('With noises is difficult to understand what you say so keep your voice louder', width/2, height/2 - 120);
  // why draw when you can talk?
}

function activate() {

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




function showResult(){
  if (myRec.onResult) {
    textAlign(CENTER);
    fill("blue");
    rect(width/2,height/2-250,600,100);
    fill("white");
      text(myRec.resultString, (width/2 ), height/2+50, 600,600);

  }
}


function mousePressed() {


 if (variabile === 1) {

    mySpeech.speak('Hey there! Where do you wanna go?');
    myRec.start();
    song.play();
    variabile = 2;




};

}


function countdown (){
  if (counter > 0 ) {
    counter--;
    fill("blue");
    rectMode(CENTER);
    rect(width/2, height/2, 80, 80)
  }
  if (counter == 0) {
  remove();
  }
}
