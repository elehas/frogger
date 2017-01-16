function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(0,0,0);

  this.show = function() {
    fill(this.col);
    rect(this.x*scl, this.y*scl, scl, scl);
  }

  this.safeZones = function() {
    fill(this.col);
    rect(grid[this.y][this.x]*scl, grid[this.y][this.x]*scl, scl, scl);
  }

  this.highway = function() {
    rect(grid[this.y][this.x]*scl, grid[this.y][this.x]*scl, scl, scl);
  }

  this.river = function() {
    fill(this.col);
    rect(grid[this.y][this.x]*scl, grid[this.y][this.x]*scl, scl, scl);
  }
}
