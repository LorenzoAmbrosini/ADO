function setup() {
   createCanvas(windowWidth, windowHeight)
}

function draw() {
  ellipse(50, 50, 80, 80);
  textAlign(CENTER)
  textSize(70)
  text('pagina in mezzo', windowWidth/2, windowHeight/2);
}

function mousePressed() {
  if ( mouseX <= 80 &&
       mouseY <= 80){
    window.open("4_webcam.html", "_self");
  }
}
