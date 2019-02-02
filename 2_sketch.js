var capture;
var sfondo;
var data;

var cities = [];

function preload() {
  data = loadJSON('./assets/4/data_train.json');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  //console.log(data.people.length);
  for (var i = 0; i < 14; i++) {

    // properties
    var x = windowWidth/9;
    var y = i * 35 + windowHeight/4;
    var name = data.people[i].name;
    var time = data.people[i].time;
    var code = data.people[i].code;
    var platform = data.people[i].platform;
    var status = data.people[i].status;

    var colorRandomizer = random(0.4, 1);

    // create the City object and add it to the array
    var myCity = new City(x, y, colorRandomizer, name, time, code, platform, status);
    cities.push(myCity);
  }
}



function draw() {

  background(0);
  //imageMode(CENTER)
  //image(sfondo, windowWidth/2, windowHeight/2, sfondo.width/2, sfondo.height/2);


  for (var j = 0; j < cities.length; j++) {

    var randomCorrect = random(0.4, 1);
    cities[j].display(randomCorrect);
  }

}



function City(_x, _y, _colorRandomizer, _name, _time, _code, _platform, _status) {

  this.x = _x;
  this.y = _y;


  this.display = function(_randomCorrect) {

    var c = capture.get(noise(capture.width / 2), noise(capture.height / 2));
    var bright = _colorRandomizer * lightness(c);
    var col = color(255, 255, 0, bright * 5);
    var colLondon = color(255, 255, 0, bright * 5 + 60);

    textFont('led');
    textSize(17);

    if (_name == "London") {

      //console.log(_randomCorrect);
      bright = bright + 30;
      colLondon = color(255, 255, 0, bright * 5);
      fill(colLondon);
      text(_name, this.x, this.y);
      text(_time, this.x + 350, this.y);
      text(_code, this.x + 600, this.y);
      text(_platform, this.x + 725, this.y);
      text(_status, this.x + 800, this.y);

    } else {
      fill(col);
      text(_name, this.x, this.y);
      text(_time, this.x + 350, this.y);
      text(_code, this.x + 600, this.y);
      text(_platform, this.x + 725, this.y);
      text(_status, this.x + 800, this.y);
    }

  }
}


function mousePressed() {
  if (mouseX <= 80 && mouseY <= 80) {
    window.open("3_intermezzo.html", "_self");
  }
}
