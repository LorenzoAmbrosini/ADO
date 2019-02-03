var capture;
var sfondo;
var data;
var x;
var y;

var ora;
var minuti;


var counter = 5;

var cities = [];

function preload() {
  data = loadJSON('./assets/2/data_train.json');

}

function setup() {
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


  setInterval(countdown, 1000);
}



function draw() {

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

}



function City(_x, _y, _name, _time, _code, _platform, _status) {

  this.x = _x;
  this.y = _y;


  this.display = function() {

    var c = capture.get(noise(capture.width / 2), noise(capture.height / 2));

    var colorRandomizer = random(0.6, 1);
    var bright = colorRandomizer * lightness(c);
    var correctBright = map(bright, 0, 25, 0, 255);

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


function mousePressed() {
  if (mouseX <= 80 && mouseY <= 80) {
    window.open("3_intermezzo.html", "_self");
  }
}

function countdown() {
  console.log(counter);
  if (counter > 0) {
    counter--;
  }
  if (counter == 0) {
    console.log("ajac");
  }
}
