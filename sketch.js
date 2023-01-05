const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var city;
var hotel;
var school;
var coins;
var girl;

function preload(){
    backgroundImg = loadImage("./assets/city.png")
    schoolImg = loadImage("./assets/School-building.png")
    hotelImg = loadImage("./assets/hotel.png")
    coinsImg = loadImage ("./assets/goldCoin.png")
    girlImg = loadImage("./assets/girl.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
  world = engine.world;
building1 = new Building(windowWidth-100,windowHeight-100,200,400)
girl = new Girl(windowWidth-1000,windowHeight-80,180,180)
school1 = new School(windowWidth-800,windowHeight-100,200,400)
}

function draw(){
    background(backgroundImg)
    building1.display()
    girl.display()
    school1.display()
    Engine.update(engine);
}