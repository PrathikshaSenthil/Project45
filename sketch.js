const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine,world;
var backgroundImg;
var ground,platform;
var box1,box2,box3,box4,box5;
var log1,log2;
var rock1,rock2,rock3,rock4;
var v1,v2;

var rocks=[];

function preload(){

  backgroundImg = loadImage("assets/background_1.png");
}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,100);
    platform = new Ground(150,height-120,300,170);

    box1 = new Box(700,height-100,70,100);
    box2 = new Box(920,height-100,70,100);
    box3 = new Box(700,240,70,100);
    box4 = new Box(920,240,70,100);
    box5 = new Box(810,160,70,100);

    log1 = new Log(810,height - 160,300,PI/2)
    log2 = new Log(810,180,300,PI/2);

    rock1 = new Rock(200,50);
    rock2 = new Rock(150,170);
    rock3 = new Rock(100,170);
    rock4 = new Rock(50,170);

    rocks.push(rock4)
    rocks.push(rock3)
    rocks.push(rock2)
    rocks.push(rock1)


    v1 = new Viking(810,height-100);
    v2 = new Viking(810,height-220);

}

function draw(){

    background(backgroundImg);
    Engine.update(engine);


    ground.display();
    platform.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();


    rock1.display();
    rock2.display();
    rock3.display();
    rock4.display();

    v1.display();
    v2.display();
}
