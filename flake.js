class Flake{
  constructor()
  {
      var option={isStatic:false}
      this.snowfall=Bodies.rectangle(random(1,800),10,10,10,option);  
      World.add(world,this.snowfall); 
  }
  display()
  {
      imageMode(CENTER);
      image(snowimage,this.snowfall.position.x,this.snowfall.position.y,10,10);
  }
}