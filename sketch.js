const Engine = Matter.Engine
const World  = Matter.World 
const Bodies = Matter.Bodies


var engine,world,object
var ground
var ball
function setup() {
  createCanvas(800,400);
  
   engine = Engine.create()

   world = engine.world;
var ballOptions={
  restitution:1.0
}
 
   var options = {
   	isStatic :true
   }
  
ground=Bodies.rectangle(200,390,800,20,options)

   ball=Bodies.circle(200,100,20,ballOptions)
World.add(world,ground)
   console.log(object)
World.add(world,ball)

   Engine.run(engine);


}

function draw() {
  background("lightblue");  
rectMode(CENTER)
  rect(ground.position.x,ground.position.y,80000,20)
ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}



