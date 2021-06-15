const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var scene,snowimage;
var snowfall;
var boy,boyImage;
var fall=[];
function preload()

{
    scene=loadImage("snow2.jpg");
    snowimage=loadImage("snow4.webp");
    boyImage= loadImage("boy.png");
    
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 
  boy = createSprite(200,330,100,100);
  boy.addImage(boyImage);
  boy.scale=0.2;
 
  
}

function draw() {
  background(scene); 
  Engine.update(engine);
 
     if(frameCount%5===0)
    {
    fall.push(snowfall=new Flake());
    }
  
  for(var i=0;i<fall.length;i++)
  {
    fall[i].display();
  }
  console.log("snowfall") 
  drawSprites();
}

function keyPressed(){
  if(keyCode === 39){
      boy.x=boy.x+5;
  }
  if(keyCode === 37){
    boy.x=boy.x-5;
}
}


