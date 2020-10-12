
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage, groundImage;
var FoodGroup, obstacleGroup;
var score ;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  score = 0;
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background("lightblue");

  stroke("yellow");
  textSize(20);
  fill("white");
  text(" score: " + score, 500 ,50)
  
  stroke("black");
  textSize(20);
  fill("pink");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text(" Survival Time: "+ SurvivalTime, 100 ,50);
  
  
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  
  drawSprites();
}

function spawnFood() {

  if (frameCount % 80 === 0) {
   banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    
    monkey.depth = banana.depth + 1;
    banana.lifetime = 300;
    
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacle() {

  if (frameCount % 300 === 0) {
   obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
  
    

    obstacle.scale = 0.13;
    
    obstacle.lifetime = 300;
     obstacle.addImage(obstacleImage);
    
    obstaclesGroup.add(obstacle);
  }
}


