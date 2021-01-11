var canvas;
var music;
var player;

var box1;
var box2;
var box3;
var box4;

var b;
var p;
var color;

var randFun
function preload(){
    music = loadSound("music.mp3");
}

function setup(){

    canvas = createCanvas(800,600);

    player = createSprite(400,300,20,20);
    box1 = createSprite(100,400,150,20);
    box1.shapeColor = "red";
    box2 = createSprite(250,400,150,20);
    box2.shapeColor = "green";
    box3 = createSprite(400,400,150,20);
    box3.shapeColor = "blue";
    box4 = createSprite(550,400,150,20);
    box4.shapeColor = "yellow";
}

function draw() {
    background(rgb(169,169,169));
    //movement,borderline
    if(player.x>0&&player.x<800&&player.y>0&&player.y<600){
        if(keyDown("left")){
            player.x = player.x - 5;
        }
        if(keyDown("right")){
            player.x = player.x + 5;
        }
        if(keyDown("down")){
            player.y = player.y + 5;
        }
        if(keyDown("up")){
            player.y = player.y -5;
        }
    }
    else{
        player.x = 400;
        player.y = 300;
    }

    randFun = Math.round(random(1,4));

    drawSprites();
    //makes no function called last or first
    switch(randFun){
        case 1: 
            color = "red";
            osTouching(player,box1);
            break;
        case 2 :
            color = "green";
            osTouching(player,box2);
            break;
        case 3 : 
            color = "blue";
            osTouching(player,box3);
            break;
        case 4 : 
            color = "yellow";
            osTouching(player,box4);
            break;
    }
}

function osTouching(p,b){
    //isTouching
    if(p.x  -  b.x < p.width/2 + b.width/2 &&
        b.x - p.x < p.width/2 + b.width/2 &&
        p.y - b.y < p.height/2 + b.height/2 &&
        b.y - p.y < p.height/2 + b.height/2){
            
        player.shapeColor = color;
    } 
}
