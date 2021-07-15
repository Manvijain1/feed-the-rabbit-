var garden,rabbit;
var gardenImg,rabbitImg;
var apple, applesGroup, appleImage;
var leaves , leavesGroup, leaveImage;
var leaf , leafsGroup,leafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage ("apple.png");
  leaveImage = loadImage("orangeLeaf.png");
  leafImage = loadImage("redImage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

rabbit.x = World.mouseX;
  createApples ();
  createLeaves ();
  createLeaf ();
  drawSprites();
}

function createApples () {

  if (frameCount %  80 === 0){
    apple = createSprite(200,50,10,10);
    apple.addImage(appleImage)
    apple.y = Math.round(random(10,80))
    apple.scale = 0.1;
    apple.velocityY = 2;
    apple.lifetime = 200;

   apple.depth = rabbit.depth
   rabbit.depth = rabbit.depth+1;

  }

}

function createLeaves () {

if (frameCount % 80 === 0){
  leaves = createSprite(300,50,10,10);
  leaves.addImage(leaveImage)  
  leaves.y = Math.round(random(10,80))
  leaves.scale = 0.1;
  leaves.velocityY = 2;
  leaves.lifetime = 200;

  leaves.depth = rabbit.depth
  rabbit.depth = rabbit.depth+1;
  

}

}



function createLeaf () {

  if (frameCount % 80 === 0){
    leaf = createSprite(100,50,10,10);
    leaf.addImage(leafImage)  
    leaf.y = Math.round(random(10,80))
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.lifetime = 200;
  
  leaf.depth = rabbit.depth
    rabbit.depth = rabbit.depth+1;
    
  
  }

  }
