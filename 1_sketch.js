var imgBackground;
var frameTime = 0;
var clockTime = 0;
var clockSwitch = 1;
var counter = 35;
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
 imgBackground = loadImage("sfondointerazione.jpg");
}

function setup()
{
  // graphics stuff:
  frameRate(30)
  createCanvas(windowWidth, windowHeight);
  backgroundImage(imgBackground);

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

  fill(166,237,247);
noStroke();
rectMode(CENTER);
  rect(width/2 + 636, height/2 - 300, 44, 44)

}

function draw()
{

  text(counter, width/2 + 632, height/2 - 295, x, y);
  fill(255, 255, 255);
  textSize(30);

  textSize(15);
  fill("blue");
  textAlign(CENTER);
  text('Press Mouse to start talk with the driver', width/2 + 632, height/2 - 165, 150 ,150 );
    text('- bo -', width/2 + 632, height/2 - 155);
  textSize(30);
  fill("white");// why draw when you can talk?
}

function countdown (){
  if (counter > 0 ) {
    counter--;
    fill(166,237,247);
  noStroke();
  rectMode(CENTER);
  rect(width/2 + 636, height/2 - 300, 46, 46);
  }
  if (counter == 0) {
   window.open("index.html", "_self")
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





function showResult(){
  if (myRec.onResult) {
    textAlign(CENTER);

    rect(width/2 + 130,height/2-225,470,100);
    fill("blue");
    textAlign(LEFT);
    textSize(25);
      text(myRec.resultString, (width/2 + 145 ), height/2 - 225, 470,100);
  fill(166,237,247);
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
