
function preload(){
  //pre-load images

  boyimg=loadAnimation("Runner-1.png","Runner-2.png")
  pathimg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY=4
  path.scale=1.5

  boy=createSprite(180,340,30,30)
  boy.addAnimation("running",boyimg)
  boy.scale=0.10

  leftboundary=createSprite(0,0,100,800)
  leftboundary.visible=false;

  rightboundary=createSprite(410,0,100,800)
  rightboundary.visible=false;


}

function draw() {
  background(0);

  edges=createEdgeSprites()
  boy.collide(edges[3])
  boy.collide(leftboundary)
  boy.collide(rightboundary)


  //for infinite ground
  if(path.y>400){
    path.y=height/2
  }

  boy.x=World.mouseX;

  // if(keyDown(LEFT_ARROW)){
  //   boy.x=boy.x-2
  // }

  // if(keyDown(RIGHT_ARROW)){
  //   boy.x=boy.x+2
  // }
  drawSprites()
}
