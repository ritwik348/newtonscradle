const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	ground=new Ground(400,300,300,25);
  bob1=new Bob(400,500,30)

chain1=new Chain(bob1.body,{x:450,y:300})
	Engine.run(engine);
  
bob2=new Bob(400,350,30)
chain2=new Chain(bob2.body,){x:450,250}

}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display();
 bob1.display();
 chain1.display();
  
  
  drawSprites();
 
}



