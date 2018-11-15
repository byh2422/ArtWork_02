var theta = 0;
var thetaSpeed = 1;
var radius = 10;

function setup() {
  createCanvas(800,600);
  background(255);
  noStroke();
  frameRate(30);
}

function draw() {
  translate(width/2,height/2);
  ellipse(0,0,10,10);
  hurricane();
}

function hurricane(){
  if(radius<=1000){
    ColorHurricane();
    ellipse(radius*cos(theta*thetaSpeed),radius*sin(theta*thetaSpeed),radius,radius);
    radius+=1;
    theta+=1;
    hurricane();
  }
}

function ColorHurricane(){
    if(radius%10==0){
      fill(255);
    }else if(radius%5==1){
      fill(51);
    }else if(radius%5==2){
      fill(102);
    }else if(radius%5==3){
      fill(153);
    }else if(radius%5==4){
      fill(204);
    }else{
      fill(255);
    }
}

function mousePressed(){
  background(255);
  thetaSpeed = random(0,5);
  radius=10;
}
