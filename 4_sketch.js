var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var song;
myRec.continuous = true; // do continuous recognition

var mySpeech = new p5.Speech();
mySpeech.setLang('en-UK');

 // speech synthesis object




function preload() {
 song = loadSound('./assets/2/speaking.mp3');
}

function setup()
{
  // graphics stuff:

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



}

function draw()
{

    ellipse(50, 50, 80, 80);
}

function activate() {

}

function showResult()
{

    background(192, 255, 192);
if (myRec.onResult) {
  textAlign(CENTER);
    text(myRec.resultString, (width/2) - 300, (height/2) - 100 ,600,600)
  }

}

function mousePressed() {
if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {

    mySpeech.speak('Hey there! Where do you wanna go?');
    myRec.start();
    song.play();
    background(0,255,0);

  }
}
