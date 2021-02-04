var  backgroundIMG, b1 ,b2,b3
var balloon



function preload(){
backgroundIMG=loadImage("bg.png");
b1=loadImage("b1.png");
b2=loadImage("b2.png");
b3=loadImage("b3.png");
}


function setup() {

  database=firebase.database();

  createCanvas(1500,400);
 balloon= createSprite(400, 200, 50, 50);
 balloon.addAnimation("hotairballoon",b1);
 balloon.scale=0.5;
var balloonheight=database.ref('balloon/position')
balloonheight.on("value",readPosition,showError);

}

function draw() {
  background(backgroundIMG);  

  if(keyDown(LEFT_ARROW)){
  WritePosition(-10,0)
  balloon.addAnimation("hotairballoon",b1);

  }
  if(keyDown(RIGHT_ARROW)){
WritePosition(10,0) 
balloon.addAnimation("hotairballoon",b1);

 }
  if(keyDown(UP_ARROW)){
WritePosition(0,-10)
balloon.addAnimation("hotairballoon",b1);
balloon.scale=balloon.scale-0.05

  }
  if(keyDown(DOWN_ARROW)){
    WritePosition(0,10)
    balloon.addAnimation("hotairballoon",b1);
    balloon.scale=balloon.scale+0.05

  }
  drawSprites();
}
function readPosition(data){
  position=data.val()
  balloon.x=position.x
  balloon.y=position.y
  console.log(balloon.x)
  }
  
  function WritePosition(x,y){
      database.ref('balloon/position').set({
          'x': position.x+x,
          'y':position.y+y
      })
  }
  
  function showError(){
      console.log("error in database");
  }