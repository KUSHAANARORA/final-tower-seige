const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2;
var Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10,Box11,Box12,Box13,Box14,Box15,Box16;
var Boxs1,Boxs2,Boxs3,Boxs4,Boxs5,Boxs6,Boxs7,Boxs8,Boxs9;
var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img,backgroundImg;
var bg = "images/light.jpg";
var score = 0
function preload() {
  getBackgroundImage();
  polygon_img=loadImage("images/polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450,390,920,20)
  stand1 = new Ground(390,300,250,10)
  stand2 = new Ground(700,200,200,10)

  //level one
  Box1 = new Box(300,275,30,40);
  console.log(Box1);
  Box2 = new Box(330,275,30,40);
  Box3 = new Box(360,275,30,40);
  Box4 = new Box(390,275,30,40);
  Box5 = new Box(420,275,30,40);
  Box6 = new Box(450,275,30,40);
  Box7 = new Box(480,275,30,40);
  //level two
  Box8 = new Box(330,235,30,40);
  Box9 = new Box(360,235,30,40);
  Box10 = new Box(390,235,30,40);
  Box11 = new Box(420,235,30,40);
  Box12 = new Box(450,235,30,40);
  //level three
  Box13 = new Box(360,195,30,40);
  Box14 = new Box(390,195,30,40);
  Box15 = new Box(420,195,30,40);
  //top
  Box16 = new Box(390,155,30,40);
  //set 2 for second stand
  //level one
  Boxs1 = new Box(640,175,30,40);
  Boxs2 = new Box(670,175,30,40);
  Boxs3 = new Box(700,175,30,40);
  Boxs4 = new Box(730,175,30,40);
  Boxs5 = new Box(760,175,30,40);
  //level two
  Boxs6 = new Box(670,135,30,40);
  Boxs7 = new Box(700,135,30,40);
  Boxs8 = new Box(730,135,30,40);
  //top
  Boxs9 = new Box(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  if(backgroundImg)
    background(backgroundImg);
   Engine.update(engine);
   background(0); 
  
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("SCORE : "+score,750,40);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display() 
  stand1.display() 
  stand2.display()
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  fill("pink");
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  fill("turquoise");
  Box13.display();
  Box14.display();
  Box15.display();
  fill("grey");
  Box16.display();
  fill("skyblue");
  Boxs1.display();
  Boxs2.display();
  Boxs3.display();
  Boxs4.display();
  Boxs5.display();
  fill("turquoise");
  Boxs6.display();
  Boxs7.display();
  Boxs8.display();
  fill("pink")
  Boxs9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  // Box1.score();
  // Box2.score();
  // Box3.score();
  // Box4.score();
  // Box5.score();
  // Box6.score();
  // Box7.score();
  // Box8.score();
  // Box9.score();
  // Box10.score();
  // Box11.score();
  // Box12.score();
  // Box13.score();
  // Box14.score();
  // Box15.score();
  // Box16.score();

  // Boxs1.score();
  // Boxs2.score();
  // Boxs3.score();
  // Boxs4.score();
  // Boxs5.score();
  // Boxs6.score();
  // Boxs7.score();
  // Boxs8.score();
  // Boxs9.score();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.Fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "images/light.jpg";
  } else {
    bg = "images/dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
