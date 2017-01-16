function Frog() {
  this.x = width/2;
  this.y = height - scl / 2;
  this.col = color(0, 120, 0);

  this.show = function() {
    fill(this.col);
    ellipse(this.x, this.y, 25);
  }

  this.update = function(dir) {
    switch (dir) {
      case "up":
        this.y -= scl;
        break;
      case "right":
        this.x += scl;
        break;
      case "down":
        this.y += scl;
        break;
      case "left":
        this.x -= scl;
        break;
      default:
        break;
    }
  }

  this.edges = function() {
    if (this.x < 0 || this.x > width) {
      return undefined;
    }

    if (this.y < 0 || this.y > height) {
      return undefined;
    }
  }
}
