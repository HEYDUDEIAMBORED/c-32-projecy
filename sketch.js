const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render
var ground,stage,polygon,polygonimg,chain;
var box1,box2,box3,box4,box5,box6;
var engine,world,options,bg;

function preload(){
polygonimg=loadImage("polygon.png")
}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
    world = engine.world;

  ground=new Ground(600,height,1200,10)

  stage=new Ground(450,425,250,10)
  box1=new Box(450,400,50,50)
  box2=new Box(400,400,50,50)
  box3=new Box(500,400,50,50)
  box4=new Box(475,350,50,50)
  box5=new Box(425,350,50,50)
  box6=new Box(450,300,50,50)

  stage2=new Ground(900,300,250,10)
  box7=new Box(900,290,50,50)
  box8=new Box(850,290,50,50)
  box9=new Box(950,290,50,50)
  box10=new Box(925,220,50,50)
  box11=new Box(875,220,50,50)
  box12=new Box(900,170,50,50)
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
  Render.run(render)
  ellipseMode(CENTER)
 options={
   isStatic:false,
   density:3
 }
  polygon=Bodies.circle(50,200,20,options)
  World.add(world,polygon)


 
  chain = new slingshot(this.polygon,{x:100,y:350})

}

function draw() {
  Engine.update(engine)
 // background(bg);  
 getBackgroundImg()
  ground.display()
  stage.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  chain.display()
  stage2.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  imageMode(CENTER)
  image(polygonimg,polygon.position.x,polygon.position.y,40,40)

} 

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}


function keyPressed(){
  if (keyCode === 82){
    chain.attach(this.polygon)
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
     background(225)
  }
  else{
     background(0);
  }

 
}