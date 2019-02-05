var imgBackground;

function preload() {
  imgBackground = loadImage("./assets/3/backtaxi.jpg");
}

function setup(){


  // graphics stuff:

  createCanvas(windowWidth, windowHeight);




}

function draw()
{
 backgroundImage(imgBackground);
}

function keyTyped() {

  if (key === '1' ) {

    //window.open("4_webcam.html", "_self")

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
