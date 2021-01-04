var garden,gardenImage;
var jerry1,jerry1Image;
var tom1,tom1Image
function preload() {
    gardenImage = loadImage("garden.png");
    jerry1Image = loadImage("jerry1.png");
    tom1Image = loadImage("tom1.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(50,315,20,20);
    jerry1 = createSprite(600, 300 , 20, 20);
    jerry1.scale = 0.2;

    tom1 = createSprite(200, 300, 20,20);
    tom1.scale = 0.2;
}

function draw() {

    background(255);
   
 keyPressed();
    drawSprites();
} 

function keyPressed(){
if(keyCode === LEFT_ARROW){}
tom1.velocity =  -5 ;
tom1.addAnimation("tom1Running", tom1Image1);
tom1.changeAnimation("catRunning");
}
