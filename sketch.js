var mover,mover2,mover3,mover4,bt,bt2,bt3,button,button2,button3;
var inst,intr,bg;
let GameState = 1.0;

function preload(){
  bt = loadImage("./img/bt.png")
  bt2 = loadImage("./img/bt2.png")
  bt3 = loadImage("./img/bt3.png")
  inst = loadImage("./img/inst.png")
  bg = loadImage("./img/map.png")
}
function setup() {
  createCanvas(1500,700);
  mover = new Mover(700, 300);


  var mouse = createVector(mouseX, mouseY);
  c1 = color(255,0, 0);
  c2 = color(255,0,0);
  c3 = color(255,0,0);
  
  button = createSprite(700,500,100,100);
  button.addImage(bt);
  button2 = createSprite(590,500,100,100);
  button2.addImage(bt2);
  button3 = createSprite(810,500,100,100);
  button3.addImage(bt3);
}
function draw() {
  
  background(125);
  if(GameState===1){
  textSize(40);
  fill("black");
  text("AMONG US",600,100);
  mover.show();
  text("WHOS THE IMPOSTER?",500,600);
  }
  if(mousePressedOver(button)){
    GameState=2.0;
}
  if(mousePressedOver(button2)){
  GameState=1.1;
}
  if(mousePressedOver(button3)){
  
  }
  if(GameState===1.1){
    clear();
    button.visible=false;
    button2.visible=false;
    button3.visible=false;
    background(125);
    image(inst,500,100,500,500)
  }
  if(GameState===2.0){
    clear();
    button.destroy();
    button2.destroy();
    button3.destroy();
    background(bg);
    
  }






  drawSprites();
  


}