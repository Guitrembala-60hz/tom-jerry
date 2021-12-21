var tomimg, tomimg2, tomimg3, jerryimg, jerryimg2, jerryimg3, garden;
var tom, jerry;


function preload() {
    //load the images here
    tomimg = loadAnimation("images/cat1.png");
    tomimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomimg3 = loadAnimation("images/cat4.png");
    jerryimg = loadAnimation("images/mouse1.png");
    jerryimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryimg3 = loadAnimation("images/mouse4.png");
    garden = loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomparado", tomimg);
    tom.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addAnimation("jerryparado", jerryimg);
    jerry.scale = 0.1;
    
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if( tom.x - jerry.x < tom.width/2 - jerry.width/2) {
        tom.velocityX = 0;
        tom.addAnimation("tom3", tomimg3);
      tom.changeAnimation("tom3");
      tom.x = 300;
      jerry.addAnimation("jerry3", jerryimg3);
      jerry.changeAnimation("jerry3");
      
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5;
      tom.addAnimation("tomandando", tomimg2);
      tom.changeAnimation("tomandando");
      jerry.addAnimation("jerry2", jerryimg2);
      jerry.changeAnimation("jerry2");
  }

}
