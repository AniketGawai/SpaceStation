var SpaceCraft,SpaceCraft1,Spacecraft2,SpaceCraft3,SpaceCraft4;
var SpaceStation;
var bg,hasDock = false;


function preload(){
  SpaceStationImg = loadImage("Images/iss.png") 
  bg = loadImage("Images/spacebg.jpg")
  SpaceCraft1Img = loadImage("Images/spacecraft1.png")
  SpaceCraft2Img = loadImage("Images/spacecraft2.png")
  SpaceCraft3Img = loadImage("Images/spacecraft3.png")
  SpaceCraft4Img = loadImage("Images/spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  SpaceCraft = createSprite (300,330,60,60)
  SpaceCraft.addImage(SpaceCraft1Img )
  SpaceCraft.scale = 0.2


  SpaceStation = createSprite (360,160,100,100)
  SpaceStation.addImage(SpaceStationImg )
  SpaceStation.scale = 0.9

}
function draw() {
 
  background("Blue");
  SpaceCraft.addImage(SpaceCraft1Img )  

  if(!hasDock){
  

 if(keyDown("LEFT_ARROW") ){
   SpaceCraft.x = SpaceCraft.x - 1
   SpaceCraft.addImage(SpaceCraft3Img);
   console.log("LEFT");
 
  }

 if(keyDown("RIGHT_ARROW") ){
  SpaceCraft.x = SpaceCraft.x + 1
  SpaceCraft.addImage(SpaceCraft4Img);
  console.log("RIGHT");
}

if(keyDown("UP_ARROW") ){
  SpaceCraft.y = SpaceCraft.y - 1
 // SpaceCraft.addImage(SpaceCraft4Img);
  console.log("UP");

}


if(keyDown("DOWN_ARROW") ){
  SpaceCraft.y = SpaceCraft.y + 1
 SpaceCraft.addImage(SpaceCraft2Img);
  console.log("DOWN");
}
}
  if(SpaceCraft.x<= 300 && SpaceCraft.y<= 220){
  textSize(25);
  fill("red");
  text("DOCKING SUCCESSFUL",350,290)

  hasDock =true;
  
}


  drawSprites();
  



  text(mouseX + "," + mouseY, mouseX,mouseY)
}