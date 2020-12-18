var car, wall;
var speed, weight;
var carImg, wallImg;

function preload() {
  carImg = loadImage("car.png");
  wallImg = loadImage("wall.png");


}


function setup() {
  createCanvas(1600, 400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 250, 10, 10);
  car.addImage(carImg);
  car.scale = 0.3;
  car.width = 50;
  //console.log(car.width)
  wall = createSprite(1200, 200, 20, height / 2);
  wall.addImage(wallImg);

  car.velocityX = speed;
}

function draw() {
  background(0);
  textSize(20);
  textAlign(CENTER);
  fill(0);

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
      fill(color(255, 0, 0));
      text("Unsafe drive", 1200, 50);
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
      fill(color(230, 230, 0));
      text("Ok drive", 1200, 50);

    }
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
      fill(color(0, 255, 0));
      text("Good drive", 1200, 50);

    }
  }
  drawSprites();
}