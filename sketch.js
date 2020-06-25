var form;
var gameState = 0;
var dartBoard;
var score = 0;
var bow;
var arrow;
var blockA, blockB;


function preload() {
  backgroundImg = loadImage("images/images.jpg");
  stage = loadImage("images/dart_wall.jpg");
  dartBoardImg = loadImage("images/archery.png");
  instructionImg = loadImage("images/instructions.png");
  bowImg = loadImage("images/bow.png");
  arrowImg = loadImage("images/arrow.png");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight-115);
  form = new Form();
  blockA = createSprite(displayWidth/6,displayHeight/2 - 200,70,10);
  blockB = createSprite(displayWidth/6,displayHeight/2 + 300,70,10);
  dartBoard = createSprite(displayWidth/2 + 200,displayHeight/2);
  dartBoard.addImage(dartBoardImg);
  dartBoard.scale = 1.0;
  bow = createSprite(displayWidth/6,displayHeight/2 + 70);
  bow.addImage(bowImg);
  bow.bounceOff(blockA);
  bow.bounceOff(blockB);
  bow.velocityY = 1;
  bow.scale = 0.25;
  arrow = createSprite(displayWidth/6,displayHeight/2 + 100);
  arrow.addImage(arrowImg);
  arrow.scale = 0.25; 
}


function draw() {
  if(gameState === 0){
    background(backgroundImg);
  }
  else if(gameState === 2){
    form.displayInstructions();
  }
    else{
    background(stage);
    drawSprites();
  }
  noStroke();
  textSize(65);
  fill("black");
  text("Target Shooter !",displayWidth/2 - 200, 100);
  textSize(35);
  text("Showcase your talent in archery and save the day !",displayWidth/3 - 100, 150);
  form.display();
}