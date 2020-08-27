const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,80,50);
    box = new Box(240,200,40,70)

    ground = new Ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box.display();
    ground.display();

}