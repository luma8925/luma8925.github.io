let currentScore = 0;
let duckX;
let duckY;
let duckSpeed = 7;
let deerX;
let deerY;
let deerSpeed = 10;
let deerButton;
let duckButton;
let gunshotAudio;
let targetImage;
let backgroundImage;
let submitText = false;
let message = "";

function preload() {
  targetImage = loadImage("target.png");
  deerButton = loadImage("deer.png");
  duckButton = loadImage("duck.png");
  gunshotAudio = loadSound("gunshot.mp3");
  backgroundImage = loadImage("background.png");
  gameFont = loadFont("PressStart2P-Regular.ttf");
}

//GUN SHOT MECHANICS
function mousePressed(){
userStartAudio();
gunshotAudio.stop();
gunshotAudio.play();
gunshotAudio.setVolume(0.2) 
  
//SCORE MECHANICS
 if(
  mouseX > duckX &&
  mouseX < duckX + 150 &&
  mouseY > duckY &&
  mouseY < duckY + 150
  ){
    currentScore +=5;
  }
    if (
    mouseX > deerX &&
    mouseX < deerX + 200 &&
    mouseY > deerY &&
    mouseY < deerY + 200
  ) {
    currentScore -= 5;
  }
  currentScore=constrain(currentScore, 0, 100);
}

function setup() {
canvasSize = createCanvas(800, 700);

//SUBMIT BUTTON FORMAT
submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submit);
textFont(gameFont);
//DUCK STARTING POSITION
  duckX = -100;
  duckY = random(25, 250);
  
//DEER STARTING POSITION
  deerX = -100;
  deerY = random(height*0.5, height*0.8)
}

function draw() {
image(backgroundImage,0,0,width,height);
//SUBMIT MESSAGE FORMAT
if (submitText) {
    textAlign(CENTER);
    textSize(40);
    text(message, width/2, height/1.5);
}
  // DUCK MECHANICS
  duckX += duckSpeed;
  if (duckX > width + 100) {
    duckX = -100;
    duckY = random(10, 250);
  }
  
  image(duckButton, duckX, duckY, (width * 0.15), (height * 0.15));

  //DEER MECHANICS
deerX += deerSpeed;
  if (deerX > width + 100) {
    deerX = -100;
    deerY = random(height*0.5, height*0.8);
  }
  image(deerButton, deerX, deerY, (width*0.25), (height*0.20));

  
//SCOREBOARD
  fill("black");
  textSize(24);
  textAlign(CENTER);
  text("VOLUME: " + currentScore, width/2, height/7);
  
}
//SUBMIT MESSAGE 
function submit () {
message = "VOLUME SUBMITTED!";
submitText = true;
setTimeout(hideText, 3000);
}
function hideText () {
    submitText = false;
}