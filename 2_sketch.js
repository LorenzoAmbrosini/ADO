var capture;
var sfondo;
var data;
var x;
var y;

var ora;
var minuti;


var counter = 900;
var interruttore;

var colText = '255, 242, 80';
var colRect = 0;

var cities = [];

function preload() {
  data = loadJSON('./assets/2/data_train.json');

}

function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  //console.log(data.people.length);
  for (var i = 0; i < 14; i++) {

    // properties
    x = windowWidth / 9;
    y = i * 30 + windowHeight / 3;
    var name = data.people[i].name;
    var time = data.people[i].time;
    var code = data.people[i].code;
    var platform = data.people[i].platform;
    var status = data.people[i].status;


    // create the City object and add it to the array
    var myCity = new City(x, y, name, time, code, platform, status);
    cities.push(myCity);
  }

  interruttore = 1;



}



function draw() {

console.log(interruttore)




  background(30, 29, 29);

  ora = hour();
  minuti = minute();

  push();
  fill(0);
  rect(x - 20, windowHeight / 3 - 40, 1000, 450, 5);
  rect(x + 850, 55, 130, 60, 5);


  push()
  fill(255, 255, 0);
  drawingContext.font = 'italic bold 40px Helvetica';
  text("Departures", x, 100);
  pop();

  push()
  fill(255);
  drawingContext.font = 'bold 18px Helvetica';
  text("TIME", x, 180);
  text("DESTINATION", x + 150, 180);
  text("NUMBER", x + 560, 180);
  text("PLAT.", x + 700, 180);
  text("STATUS", x + 800, 180);

  pop();

  push();

  fill(255, 200, 0);
  textFont('led');
  textSize(30);

  if (minuti < 10) {
    text(ora + ":0" + minuti, x + 860, 100);
  } else {
    text(ora + ":" + minuti, x + 860, 100);
  }

  pop();


  for (var j = 0; j < cities.length; j++) {
    cities[j].display();
  }


  if(interruttore === 1){
    push();
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

  if(interruttore === 0){
  countdown();
}

}



function City(_x, _y, _name, _time, _code, _platform, _status) {

  this.x = _x;
  this.y = _y;


  this.display = function() {

    var c = capture.get(noise(capture.width / 2), noise(capture.height / 2));

    var colorRandomizer = random(0.3, 1);
    var bright = lightness(c);
    var correctBright = colorRandomizer *  map(bright, 0, 25, 0, 255);

    var col = color(255, 200, 0, correctBright);
    var colLondon = color(255, 200, 0, correctBright + 200);

    var oraTreni = ora + 1;
    //console.log(oraTreni);

    textFont('led');
    textSize(20);

    if (_name == "London") {

      fill(col);
      if (bright * 5 < 50) {
        fill(colLondon);
      }

      text(oraTreni + _time, this.x, this.y);
      text(_name, this.x + 150, this.y);
      text(_code, this.x + 560, this.y);
      text(_platform, this.x + 700, this.y);
      text(_status, this.x + 800, this.y);

    } else {
      fill(col);
      text(oraTreni + _time, this.x, this.y);
      text(_name, this.x + 150, this.y);
      text(_code, this.x + 560, this.y);
      text(_platform, this.x + 700, this.y);
      text(_status, this.x + 800, this.y);
    }

  }
}

function changeCol() {
  if (mouseX >= width / 2 - 87.5 &&
    mouseX <= width / 2 - 87.5 + 175 &&
    mouseY >= height / 2 + 130 &&
    mouseY <= height / 2 + 130 + 60) {
    colText = 0;
    colRect = '#fff250';
  } else {
    colText = '#fff250';
    colRect = 0;
  }
}



function countdown() {
  console.log(counter);
  if (counter > 0) {
    counter--;
  }
  if (counter == 0) {
    window.open("3_intermezzo.html", "_self")
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
      }
  }
}
