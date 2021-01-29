const Engine = Matter.Engine     //main modules    //var, const
const World  = Matter.World
const Bodies = Matter.Bodies

// Rishab = Rishab Shyam




var mygame_engine,box 



function setup() {
  createCanvas(400,400);

  mygame_engine = Engine.create()
  world = mygame_engine.world



  var ground_options = {     //json format
    isStatic : true 
  }
  

 ground = Bodies.rectangle( 200,390,400,20,ground_options)
 World.add(world, ground)

// console.log(box)



var ball_options = {     //json format
restitution  : 1
}

 ball = Bodies.circle(200,200,40, ball_options)
 World.add(world, ball)


}

function draw() {
  background(0); 
  
 Engine.update(mygame_engine)
fill('yellow')
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)


fill ('blue')
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,60,30)



}



