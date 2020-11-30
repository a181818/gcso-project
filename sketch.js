var line1 , line2 , line3;
var car1 , car2 , car3, car4;
var wall;
var speed , weight;
var d;


function setup() {
  createCanvas(1200,600);
  
  line1 = createSprite(600,150,1200,10);
  line1.shapeColor = "white";

  line2 = createSprite(600,300,1200,10);
  line2.shapeColor = "white";

  line3 = createSprite(600,450,1200,10);
  line3.shapeColor = "white";

  car1 = createSprite(1100,75,60,30);
  car1.shapeColor = "grey";

  car2 = createSprite(1100,220,60,30);
  car2.shapeColor = "grey";
  
  car3 = createSprite(1100,380,60,30);
  car3.shapeColor = "grey";

  car4 = createSprite(1100,525,60,30);
  car4.shapeColor = "grey";

  wall = createSprite(10,300,20,600);
  wall.shapeColor = "grey";

}

function draw() {
  background("black");  

if(keyDown("space"))
{
  car1.velocityX = -62;
  car2.velocityX = -70;
  car3.velocityX = -86;
  car4.velocityX = -97;
}

if(car1.isTouching(wall)){
  car1.collide(wall);
  car1.shapeColor = "red"
}

if(car2.isTouching(wall)){
  car2.collide(wall);
  car2.shapeColor = "green"
}

if(car3.isTouching(wall)){
  car3.collide(wall);
  car3.shapeColor = "white"
}

if(car4.isTouching(wall)){
  car4.collide(wall);
  car4.shapeColor = "yellow"
}
  drawSprites();
}