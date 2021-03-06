function Frog() {
  this.x = width/2;
  this.y = height - scl / 2;
  this.r = 25;
  this.col = color(0, 120, 0);

  this.show = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.r);
  }

  this.update = function(dir) {
    switch (dir) {
      case "up":
        this.y -= scl;
        break;
      case "right":
        this.x += scl/2;
        break;
      case "down":
        this.y += scl;
        break;
      case "left":
        this.x -= scl/2;
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

  this.collide = function(obstacles) {
    for (var i = 0; i < obstacles.length; i++) {
      var d = dist(this.x, this.y, obstacles[i].x, obstacles[i].y);

      if (d < this.r) {
        console.log("collided");
      }
    }
  }
}
