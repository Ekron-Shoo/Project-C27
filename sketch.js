
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var ball1,ball2,ball3,ball4,ball5;
var roof; 
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1275, 645);


	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(356,530,150);
	ball2=new Ball(495,530,150);
	ball3=new Ball(634,530,150);
	ball4=new Ball(773,530,150);
	ball5=new Ball(912,530,150);
	
	roof=new Roof(640,70,1255,80);

	rope1= new Rope(ball1,{x:100,y:300});





	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope1.display();

  drawSprites();

 
}



