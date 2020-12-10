const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    box1 = new Box(200,200,50,30);
    box2 = new Box(220,100,50,30);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
}