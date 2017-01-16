function Vehicle(row, j) {
  this.x = j;
  this.y = row;
  this.size = 1;
  this.dir;
  this.speed = 0.02;

  this.show = function() {
    var offset = scl;
    fill(255);

    rect(this.x*scl, this.y*scl, scl*this.size, scl);
  }

  this.update = function() {
    if (this.y % 2 == 1) {
      this.dir = -1;
    } else {
      this.dir = 1;
    }

    if (this.y == 8) {
      this.speed = 0.05;
    }

    if (this.y == 11) {
      this.speed = 0.03;
    }

    if (this.y == 7) {
      this.size = 2;
    }
    this.x += this.speed * this.dir;
  }

  this.edges = function() {
    if (this.size == 1) {
      if (this.x < -1) {
        this.x = 13;
      }
    } else if (this.size == 2) {
      if (this.x < -2) {
        this.x = 13;
      }
    }
    if (this.x > 13) {
      this.x = -1;
    }
  }
}
