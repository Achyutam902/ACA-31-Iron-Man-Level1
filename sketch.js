function preload(){
  // Load the images
   bg=loadImage("images/bg.jpg");
   IronManImg=loadImage("images/iron.png");
  }
  
  function setup(){
       
      //Create the canvas
      createCanvas(1200,600);
  
      //Create Background
      back=createSprite(600,300,1200,600);
      back.addImage(bg);
      back.velocityY = 4;
      back.scale = 2;

  
      //Create Iron Man and Adjust Image
      IronMan=createSprite(random(300,700),450,80,200);
      IronMan.addImage(IronManImg);
      IronMan.scale=0.25;
      IronMan.setCollider("rectangle",20,0,250,850);
      IronMan.velocityY = 5;
      
  
      //Create all edges
      edges=createEdgeSprites();

  
  }
  
  function draw(){
    
  
  //Make background and draw all Sprites
  background(0);
  drawSprites();



      //Make Scrollable background from top to bottom
  if(back.y>700){
      back.y=250;
  }
  //Make Iron Man Move up Using up arrow
  if(keyDown("up")){
      IronMan.velocityY=-10;
  }
  

//Make Iron Man Move left Using left arrow
if(keyDown("left")){
    IronMan.velocityX=-6;
    IronMan.velocityY=0;
}

//Make Iron Man Move right Using right arrow
if(keyDown("right")){
    IronMan.velocityX=6;
    IronMan.velocityY=0;
}
}

if(keyDown("down")){
  IronMan.velocityY=+10;
}

  
  //Make Iron Man Bounce off edges and Give Gravity
  IronMan.bounceOff(edges)
  IronMan.velocityY-=0.275;

  