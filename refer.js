
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dus1,dus2,dus3,paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dus1=new Dustbin(800,750,150,20);
dus2=new Dustbin(680,750,70,70);
dus3=new Dustbin(580,700,70,70);
paper=new Paper(30,680,30);
	
ground=new Ground(500,980,800,20);

	Engine.run(engine);
  
}


function draw() {

  background(0);
  
  paper.display();
  ground.display();
  dus1.display();
  dus2.display();
  dus3.display();
  


 
 
}
function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{ x: 85,y :-85});
    }
}




class Dustbin{

    constructor(x,y,width,height)
{
var boxoptions={

isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2


}
    this.body=Bodies.rectangle(x,y,width,height,boxoptions);
    this.width=width;
    this.height=height;
    World.add(world,this.body);


}

display(){
var pos =this.body.position;
var angle=this.body.angle;
push();
 translate(pos.x,pos.y);
 rotate(angle);
rectMode(CENTER);
stroke("white");
    fill("white");
    rect(0,0,this.width,this.height);
    pop();






}


}





class Ground {
    constructor(x, y, width, height){

    var options = {
    
        isStatic:true,
        friction:1.0
    }
    this.body=Bodies.rectangle(x, y, width, height,options);
    this.width=width;
    this.height=height;

    World.add(world, this.body);
    }
     display(){
          var pos=this.body.position;
     push();
     rectMode(CENTER);
     fill("yellow");
     rect(pos.x,pos.y,this.width,this.height);
     pop();
     }
}



class Paper{

    constructor(x,y,radius){
        
        var options={
            isStatic :false,
            restitution:0.3,
            friction:0.5,
            density:1.2


    }

        this.body=Bodies.circle(x, y,radius,options);
        this.radius=radius;
        World.add(world, this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    pop();
}





}