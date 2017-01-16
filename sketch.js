//Vars for the main game screen
var rows, cols;
var scl;
var grid = [];

//Game's zones that contain obstacles based on our grid
var safeZones = [0, 6, 12];
var highway = [7, 8, 9, 10, 11];
var river = [1, 2, 3, 4, 5];

//Our player object
var frog;

//Our vehicles on the highway
var vehicles = [];

function setup() {
  createCanvas(800, 800);
  noStroke();

  scl = width/13;

  rows = width/scl;
  cols = height/scl;

  for (var y = 0; y < rows; y++) {
    grid[y] = new Array();
    for (var x = 0; x < cols; x++) {
      grid[y][x] = new Cell(x, y);
    }
  }

  for (var i = 0; i < highway.length; i++) {
    var row = highway[i];
    for (var j = 0; j < grid[i].length; j++) {
      vehicles.push(new Vehicle(row, j));
      j += floor(random(2, 5));
    }
  }

  frog = new Frog();
}

function draw() {
  background(0);

  DrawGameSpace();
  DrawZones();

  GenerateVehicles();

  RenderFrog();

}

function GenerateVehicles() {
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].show();
    vehicles[i].update();
    vehicles[i].edges();
  }

}

function RenderFrog() {
  frog.show();
  frog.edges();
}

function DrawGameSpace() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j].show();
    }
  }
}

function DrawZones() {
  for (var i = 0; i < safeZones.length; i++) {
    var row = safeZones[i];
    for (j = 0; j < grid.length; j++) {
      grid[row][j].col = color(0, 200, 0);
      grid[row][j].safeZones();
    }
  }

  for (var i = 0; i < highway.length; i++) {
    var row = highway[i];
    for (j = 0; j < grid.length; j++) {
      grid[row][j].highway();
    }
  }

  for (var i = 0; i < river.length; i++) {
    var row = river[i];
    for (j = 0; j < grid.length; j++) {
      grid[row][j].col = color(0, 0, 180);
      grid[row][j].river();
    }
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.update("up");
  } else if (keyCode == RIGHT_ARROW) {
    frog.update("right");
  } else if (keyCode == DOWN_ARROW) {
    frog.update("down");
  } else if (keyCode == LEFT_ARROW) {
    frog.update("left");
  }
}














//
