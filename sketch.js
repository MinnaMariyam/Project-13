var garden,rabbit,apple,rand,leaf;
var gardenImg,rabbitImg,appleImage,leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  leafImage=loadImage("leaf.png")
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
  rabbit.x=mouseX

  var rand=Math.round(random(1,2));

  apples();
  leaves();

  drawSprites();
}

function apples(){
  if(frameCount%80==0){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.velocityY=8;
  apple.scale=0.06;
  

 
  }

  

  }
  


  function leaves(){
    if(frameCount%100==0){
    leaf=createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImage); 
    leaf.scale=0.06;
    leaf.velocityY=8;


  
    } 
  
  }