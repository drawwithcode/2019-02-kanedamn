var x = 0;
var y = 0;
var space = 80;

function preload(){
}

function setup() {

createCanvas(windowWidth, windowHeight);

background(0);

frameRate(6);

}

function draw() {

stroke(255);

for(var x = 0; x < windowWidth; x += space){
if(random() < 0.5){
line(x, y, x + space, y + space);
} else{
line(x, y + space, x + space, y);
}
}
x = x + space;
if(x > windowWidth){
  x = 0;
  y = y + space;
}

if(y > windowHeight + 500){
  textAlign(CENTER,CENTER);
  textSize(20);
  fill(255);
  text('PRESS FOR A NEW TEXTURE', windowWidth/2,windowHeight/2);
}
}

function mousePressed() {
  background(0);
  y = 0;
  redraw();
 }
