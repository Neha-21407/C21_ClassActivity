const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var roof, ground, leftWall, rightWall;

var pushBtn;
var ball;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  
  world = engine.world;

  roof = new Ground(300,10,600,20);

  ground = new Ground(300,590,600,20);

  leftWall = new Ground(10,300,20,600);

  rightWall = new Ground(590,300,20,600);

  var ballOption = {
    restitution: 1,
    density: 0.5,
  }

  ball = Bodies.circle (300,300,20,ballOption);
  World.add(world,ball);

  //html functions to create a button
  pushBtn = createImg("push.png");
  pushBtn.position(100,100);
  pushBtn.size(50,50);
  pushBtn.mouseClicked(aforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() {
  background(51);
  Engine.update(engine);

  roof.display();

  ground.display();

  leftWall.display();

  rightWall.display();


  push();
  fill("red");
  ellipse(ball.position.x, ball.position.y, 20,20);
  pop();
}

function aforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:-7,y:-20});
}