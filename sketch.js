const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;
var iron;
var ground;
var sand1, sand2, sand3, sand4, sand5, sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stone = new Stone(700,320,100,100)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    iron = new Iron(300,350);
    sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(530,450,10);
  
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    stone.display();
    hammer.display();
    rubber.display();
    iron.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    ground.display();
    
    
 
}