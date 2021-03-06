var canvas;
var music;

var player;
var box1
var box2;
var box3;
var box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);
    
    player = createSprite(400,100,10,10);
    
    player.shapeColor = "grey";

    box1 = createSprite(100,500,50,20);
    box1.shapeColor = "red";
    box2 = createSprite(200,500,50,20);
    box2.shapeColor = "blue";
    box3 = createSprite(300,500,50,20);
    box3.shapeColor = "green";
    box4 = createSprite(400,500,50,20);
    box4.shapeColor = "purple";
    player.velocityX = -1;
    player.velocityY = 3



    
  
}

function draw() {
    if(player.isTouching(box1)&&player.bounceOff(box1)){
        player.shapeColor = "red";
        player.velocity(0,0);
        music.stop();
    }
    if(player.isTouching(box2)&&player.bounceOff(box2)){
        player.shapeColor= "blue";
    }
    
    if(player.isTouching(box3)&&player.bounceOff(box3)){
        player.shapeColor= "green";
        music.play()
    }
    
    if(player.isTouching(box4)&&player.bounceOff(box4)){
        player.shapeColor= "purple";
    }
    background(rgb(169,169,169));
    //create edgeSprite
    

    //add condition to check if box touching surface and make it box
    drawSprites();
}