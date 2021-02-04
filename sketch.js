var canvas, backgroundImage;

var gameState=0;

var database;

var form, player, game;
var jet;

function preload(){
  backgroundImage=loadImage('images/download.jpg');
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);

}
