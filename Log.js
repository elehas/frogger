function Log(row, j) {
  this.x = j;
  this.y = row;
  this.dir = 1;
  this.speed = 0.02;
  this.size = 1;
  this.r = 40;

  this.show = function() {
    if (this.y == 2 || this.y == 5) {
      fill(0, 170, 0);
      ellipse(this.x * scl, (this.y * scl) + (scl / 2), this.r);
    } else {
      fill("brown");
      rect(this.x * scl, this.y * scl + 12, scl * this.size, scl * 0.6);
    }
  }

  this.update = function() {
    if (this.y % 2 == 1) {
      this.dir = -1;
    } else {
      this.dir = 1;
    }

    if (this.y == 3) {
      this.size = 3;
    }

    if (this.y == 4) {
      this.size = 2;
      this.speed = 0.04;
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
    } else if (this.size == 3) {
      if (this.x < -3) {
        this.x = 13;
      }
    }

    if (this.x > 13) {
      this.x = -1;
    }
  }
}
