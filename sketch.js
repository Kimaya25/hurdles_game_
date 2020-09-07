var database;
var gameState = 0;
var playerCount;
var runner1, runner2, runner3, runner4,runners;
var allPlayers;
var Game , Form, player;

function preload(){
 hurdles = loadImage ("images/hurdles.jpg");
 runner11 = loadImage("images/runner1.jpg");
 runner22= loadImage("images/runner2.jpg");
 runner33 = loadImage("images/runner3.jpg");
 runner44 = loadImage("images/runner4.jpg");
 race_track = loadImage("images/race_track.png");
}

function setup() {
  createCanvas(400,400);
  database = firebase.database();
  Game = new game();
  Game.getState();
  Game.start();
}


function draw(){
  if(playerCount === 4){
    Game.update(1);
  }
  if(gameState === 1){
    clear();
    Game.play();
  }
  

  spawnObstacles();
 }

function spawnObstacles(){
  if(frameCount % 60 === 0){
    var hurdles1 = createSprite(200,300)
  }
}