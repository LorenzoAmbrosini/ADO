var sketch2 = function(p) {

var capture;
var sfondo;
var data;
var x;
var y;
var ora;
var minuti;


var counter = 600;
var interruttore;

var colText = '255, 242, 80';
var colRect = 0;

var cities = [];

p.preload = function() {
  data = p.loadJSON('./assets/2/data_train.json');

};

p.setup = function() {


  p.frameRate(30);
  var canvas =  p.createCanvas(p.windowWidth, p.windowHeight);
  canvas.parent('sketch2');
  capture = p.createCapture(p.VIDEO);
  capture.size(640, 480);
  capture.hide();

  //console.log(data.people.length);
  for (var i = 0; i < 14; i++) {

    // properties
    x = p.windowWidth / 9;
    y = i * 30 + p.windowHeight / 3;
    var name = data.people[i].name;
    var time = data.people[i].time;
    var code = data.people[i].code;
    var platform = data.people[i].platform;
    var status = data.people[i].status;


    // create the City object and add it to the array
    var myCity = new p.City(x, y, name, time, code, platform, status);
    cities.push(myCity);
  }

  interruttore = 1;



};



 p.draw = function() {

//console.log(interruttore)




  p.background(30, 29, 29);

  ora = p.hour();
  minuti = p.minute();

  p.push();
  p.fill(0);
  p.rect(x - 20, p.windowHeight / 3 - 40, 1000, 450, 5);
  p.rect(x + 850, 55, 130, 60, 5);


  p.push()
  p.fill(255, 255, 0);
  p.drawingContext.font = 'italic bold 40px Helvetica';
  p.text("Departures", x, 100);
  p.pop();

  p.push()
  p.fill(255);
  p.drawingContext.font = 'bold 18px Helvetica';
  p.text("TIME", x, 180);
  p.text("DESTINATION", x + 150, 180);
  p.text("NUMBER", x + 560, 180);
  p.text("PLAT.", x + 700, 180);
  p.text("STATUS", x + 800, 180);

  p.pop();

  p.push();

  p.fill(255, 200, 0);
  p.textFont('led');
  p.textSize(30);

  if (ora < 10){
    if (minuti < 10) {
      p.text("0" + ora + ":0" + minuti, x + 860, 100);
    } else {
      p.text("0" + ora + ":" + minuti, x + 860, 100);
      }
  }
  else{
    p.text(ora + ":" + minuti, x + 860, 100);
  }

  p.pop();


  for (var j = 0; j < cities.length; j++) {
    cities[j].display();
  }


  if(interruttore === 1){
    p.push();
    p.fill(0, 0, 0, 200);
    p.rect(0, 0, 1280, 720);
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
    p.text('Lorem ipsum dolor sit amet, consectetur adipisci elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.', p.windowWidth / 2, p.windowHeight / 2, 500, 100);
    p.pop();


  }

  if(interruttore === 0){
  p.countdown();
}

};



 p.City = function(_x, _y, _name, _time, _code, _platform, _status) {

  this.x = _x;
  this.y = _y;


  this.display = function() {

    var c = capture.get(p.noise(capture.width / 2), p.noise(capture.height / 2));

    var colorRandomizer = p.random(0.3, 1);
    var bright = p.lightness(c);
    var correctBright = colorRandomizer *  p.map(bright, 0, 25, 0, 255);

    var col = p.color(255, 200, 0, correctBright);
    var colLondon = p.color(255, 200, 0, correctBright + 200);

    if (ora == 23){
      var oraTreni = "00";
    } else{
      var oraTreni = ora + 1;
    }
    //console.log(oraTreni);

    p.textFont('led');
    p.textSize(20);

    if (_name == "London") {

      p.fill(col);
      if (bright * 5 < 50) {
        p.fill(colLondon);
      }

      p.text(oraTreni + _time, this.x, this.y);
      p.text(_name, this.x + 150, this.y);
      p.text(_code, this.x + 560, this.y);
      p.text(_platform, this.x + 700, this.y);
      p.text(_status, this.x + 800, this.y);

    } else {
      p.fill(col);
      p.text(oraTreni + _time, this.x, this.y);
      p.text(_name, this.x + 150, this.y);
      p.text(_code, this.x + 560, this.y);
      p.text(_platform, this.x + 700, this.y);
      p.text(_status, this.x + 800, this.y);
    }

  }
};

 p.changeCol = function() {
  if (p.mouseX >= p.windowWidth / 2 - 87.5 &&
    p.mouseX <= p.windowWidth / 2 - 87.5 + 175 &&
    p.mouseY >= p.windowHeight / 2 + 130 &&
    p.mouseY <= p.windowHeight / 2 + 130 + 60) {
    colText = 0;
    colRect = '#fff250';
  } else {
    colText = '#fff250';
    colRect = 0;
  }
};



 p.countdown = function() {
  console.log(counter);
  if (counter > 0) {
    counter--;
  }
  if (counter == 0) {
    window.open("3_intermezzo.html", "_self")
  }
};

 p.mousePressed = function(){
  if (p.mouseX >= p.windowWidth / 2 - 87.5 &&
    p.mouseX <= p.windowWidth / 2 - 87.5 + 175 &&
    p.mouseY >= p.windowHeight / 2 + 130 &&
    p.mouseY <= p.windowHeight / 2 + 130 + 60) {
      if (p.mouseButton == p.LEFT ) {
         interruttore = 0;
         console.log("click");
      }
  }
};

}

var sketch = new p5(sketch2);
