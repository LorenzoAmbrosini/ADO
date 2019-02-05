var imgBackground;
var man;
var popup;
var home;
var title;
function preload(){
  // put preload code here
    imgBackground = loadImage("./assets/5/sotto.png");
    man = loadImage("./assets/5/man.png");
      popup = loadImage("./assets/5/popup.png");
      home = loadImage("./assets/5/home.png");
      title = loadImage("./assets/5/title.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  textFont('Montserrat');
  background(25);
}

function draw() {
  // put drawing code here
   backgroundImage(imgBackground);
   push(); // man
   translate(width / 2, height / 2);
   imageMode(CENTER);
   let scale = Math.max(width / man.width, height / man.height);
   image(man, -480, 125, man.width / 4 * scale, man.height / 4 * scale);
   pop(); //man

   push(); // popup
   translate(width / 2, height / 2);
   imageMode(CENTER);
   let scaleG = Math.max(width / popup.width + 50, height / popup.height +50);
   image(popup,15, -40, popup.width / 4 * scale, popup.height / 5.5 * scale);
   pop(); //popup

   push(); // home
   imageMode(CENTER);
   let scaleH = Math.max(width / home.width, height / home.height);
   image(home, 50, 50, home.width / 30 * scaleH, home.height / 30 * scaleH);
   pop(); // home

   push(); // title
   imageMode(CENTER);
   translate(width / 2, height / 2);
   let scaleF = Math.max(width / title.width * 3, height / title.height* 3);
   image(title, 0, -350, title.width / 30 * scaleF, title.height / 30 * scaleF);
   pop(); // title

   textAlign(CENTER);
   textSize(30);
   textFont()

   //text popup
   push();
   textAlign(CENTER);
   textSize(18);
   // textStyle(BOLD);
   translate(width / 2, height / 2);
   text('In the information theory the word NOISE indicates   ', 20, -200);
   text('everything that intervenes between the transmitte, ', 20, -175);
   text('and the receiver,  compromising the effectiveness ', 20, -150);
   text('of the communication (it is essentially ', 20, -125);
   text('a technical interference). In other cases ', 20, -100);
   text('the concept assumes a metaphorical value and refers', 20, -75);
   text('to all types of disturbances that can intervene ', 20, -50);
   text('in the communicative process, reducing its effectiveness ', 20, -25);
   text('or even compromising the result.', 20, 0);
   text('The concept of INFORMATION NOISE in psychology', 20, 25);
   text('and semiotics,"is a disorder caused by the excess of ', 20, 50);
   text('information, such that even the potentially useful   ', 20, 75);
   text(' element is not recognized, not even identified, ', 20, 100);
   text('or identified with difficulty". ', 20, 125);
   pop();

}

function backgroundImage(imgBackground) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / imgBackground.width, height / imgBackground.height);
  image(imgBackground, 0, 0, imgBackground.width * scale, imgBackground.height * scale);
  pop();

}

function mousePressed() {
  if (mouseX >= 0  &&
    mouseX <= 176 &&
    mouseY >= 0  &&
    mouseY <= 172)
    window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
