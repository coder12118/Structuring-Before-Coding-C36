var ball;
var database; //Step 1
var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var game, form, player;

function setup(){
    canvas = createCanvas(400,400);

    //Step 2 
    database = firebase.database(); //namespacing

    game = new Game();
    game.getState();
    game.start();

   
    
}

function draw(){
    background("white");
   
}


