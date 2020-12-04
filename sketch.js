var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var backgroundImg, groundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundImg = loadImage("red.jpg");
	// groundImg = loadImage("ground.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 20, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	// packageSprite.velocityX = 2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	// helicopterSprite.velocityX = 2;

	// groundSprite=createSprite(400, 694, 200,10);
	// groundSprite.shapeColor = color( 0)
	
	// groundSprite=createSprite(400, 694, 20,180);
	// groundSprite.shapeColor = color( 0)


	// groundSprite=createSprite(490, 694, 20,180);
	// groundSprite.shapeColor = color( 0)

	// groundSprite=createSprite(300, 694, 20,180);
	// groundSprite.shapeColor = color( 0)
	
	// groundSprite=createSprite(395, 604, 210,20);
	// groundSprite.shapeColor = color( 0)
	// stroke(255)
	// fill(0);



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 240 , 5 , {restitution:0.6, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 682, 200, 10 , {isStatic:true} );
	 World.add(world, ground);
	//  stroke(255)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  rect(400, 682, 210,180);
fill(255)
  rect(400, 682, 210, 180);
  fill(0)
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	
	strokeWeight(8);
	helicopterSprite.velocityX = 2;
}
// 	if(Matter.Body.setStatic(packageBody, false)) {
// 	text("hurray", 50, 50);
// 	textSize(30)
// 	stroke(255);

//  }



}


 