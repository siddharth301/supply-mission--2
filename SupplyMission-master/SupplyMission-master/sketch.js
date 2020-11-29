var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var log1,log2,log3;
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
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;
	
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	log1 = createSprite(400,650,200,20);
	log1.shapecolor = "red";
	log2 = createSprite(300,620,20,100);
	log2.shapecolor = "red";
	log3 = createSprite(500,620,20,100);
	log3.shapecolor = "red";
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
packageSprite.collide(log1);
if(keyDown(DOWN_ARROW)){
	
	packageSprite.visible = true;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
}

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
 }
}



