var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")


	engine = Engine.create();
	world = engine.world;
	var options = {
	restitution:0.4,
	isStatic:true,	
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	

	//Create a Ground
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	fill("red")
 	World.add(world, ground);
	rect1 = Bodies.rectangle(400,650,100,50,{isStatic:true});
	World.add(world,rect1)

	rect2 = Bodies.rectangle(330,610,100,50,{isStatic:true});
	World.add(world,rect1)

	rect3 = Bodies.rectangle(470,610,100,50,{isStatic:true});
	World.add(world,rect1)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(rect1.position.x,rect1.position.y,150,20)
  rect(rect2.position.x,rect2.position.y,20,100)
  rect(rect3.position.x,rect3.position.y,20,100)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}