let score = 0;
let duckX;
let duckY;
let duckSpeed = 7;
let deerX;
let deerY;
let deerSpeed = 10;
let backgroundImage;
let deerButton;
let duckButton;
let gunshotAudio;
let targetImage;

function preload() {
  backgroundImage = loadImage("background.jpeg");
  targetImage = loadImage("target.png");
  deerButton = loadImage("deer.png");
  duckButton = loadImage("duck.png");
  gunshotAudio = loadSound("gunshot.mp3");
}

//GUN SHOT MECHANICS
function mousePressed(){
userStartAudio();
gunshotAudio.currentTime = 0;
gunshotAudio.play();
gunshotAudio.setVolume(0.2) 
  
//SCORE MECHANICS
 if(
  mouseX > duckX &&
  mouseX < duckX + 100 &&
  mouseY > duckY &&
  mouseY < duckY + 100
  ){
    score +=1;
  }
    if (
    mouseX > deerX &&
    mouseX < deerX + 200 &&
    mouseY > deerY &&
    mouseY < deerY + 150
  ) {
    score -= 1;
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

//DUCK STARTING POSITION + Y SPAWN RANGE
  duckX = -100;
  duckY = random(50, 250);
  
//DEER STARTING POSITION + Y SPAWN RANGE
  deerX = -100;
  deerY = random(height*0.5, height*0.8)
}

function draw() {
    background(0);
    image(backgroundImage, 0, 0, width, height);

  // DUCK MECHANICS
  duckX += duckSpeed;
  if (duckX > width + 100) {
    duckX = -100;
    duckY = random(35, 100);
  }
  
  image(duckButton, duckX, duckY, (width * 0.15), (height * 0.15));

  //DEER MECHANICS
deerX += deerSpeed;
  if (deerX > width + 100) {
    deerX = -100;
    deerY = random(height*0.5, height*0.8);
  }
  image(deerButton, deerX, deerY, (width*0.25), (height*0.20));

  
//SCOREBOARD MECHANICS
  fill("white");
  textSize(24);
  text("VOLUME: " + score, 15, 40);
}