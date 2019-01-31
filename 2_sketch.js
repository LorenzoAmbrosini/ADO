var capture;
var sfondo;
var data;

var balls = [];

function preload() {
  sfondo = loadImage("./assets/4/Departures.png");
  data = loadJSON('./assets/4/data-24-10-2017.json');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  //console.log(data.people.length);
  for (var i = 0; i < 18; i++) {

    // properties
    var x = 120;
    var y = i * 30 + 150;
    var k = round(random(0, 9))
    var name = data.people[k].name;

    var colorRandomizer = random(0.4, 1);

    // create the ball object and add it to the array
    var myBall = new Ball(x, y, colorRandomizer, name);
    balls.push(myBall);
  }
}



function draw() {

  background(0);
  background(sfondo);
  //imageMode(CENTER)
  //image(sfondo, windowWidth/2, windowHeight/2, sfondo.width/2, sfondo.height/2);


  for (var j = 0; j < balls.length; j++) {

    var randomCorrect = random(0.4, 1);
    balls[j].display(randomCorrect);
  }

}



function Ball(_x, _y, _colorRandomizer, _name) {

  this.x = _x;
  this.y = _y;


  this.display = function(_randomCorrect) {

    var c = capture.get(noise(capture.width / 2), noise(capture.height / 2));
    var bright = _colorRandomizer * lightness(c);
    var col = color(255, 255, 0, bright * 5);

    textSize(20);
    if (_name == "London") {

      console.log(_randomCorrect);
      bright = _randomCorrect * bright + 30;
      col = color(255, 255, 0, bright * 10);
      fill(col);
      text(_name, this.x, this.y);
    } else {
      fill(col);
      text(_name, this.x, this.y);
    }

  }
}


function mousePressed() {
  if (mouseX <= 80 && mouseY <= 80) {
    window.open("3_intermezzo.html", "_self");
  }
}
