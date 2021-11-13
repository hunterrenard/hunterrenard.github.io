let tenticles = [];
let t;
let canvas;
let height;

function setup() {
  height = 336;
  if($(document).width() <= 1024)
    height = 305;
  canvas = createCanvas($('#p5-canvas').width(), height);
  canvas.parent('p5-canvas');
  canvas.background(255);
}

function windowResized() {
  resizeCanvas($('#p5-canvas').width(), height);
}

function draw() {
  canvas.background(255,255,255,5)
  for(let i = 0; i < tenticles.length; i++)
  {
    tenticles[i].show();
    if(tenticles[i].getSize() <= 5)
    tenticles.splice(i,1);
  }
}

function mousePressed() {
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    t = new tenticle(mouseX, mouseY, round(random(0,2)));
    tenticles.push(t);
    t = new tenticle(mouseX, mouseY, round(random(1,3)));
    tenticles.push(t);
    t = new tenticle(mouseX, mouseY, round(random(2,4)));
    tenticles.push(t);
  }
}

class tenticle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.turn = 5;
    this.switch = true;
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.direction = d
    if(this.direction == 4)
      this.direction = 0;

    this.mod = round(random(1,100));
  }

  getSize() {
      return(this.size);
  }

  show() {
    this.color = color(red(this.color) + 5, green(this.color) + 5, blue(this.color) + 5)
    fill(this.color);
    ellipse(this.x, this.y, this.size);

    this.size -= 1;

    if(this.size  % this.mod == 0)
    {
      this.direction = round(random(0,3));
      this.mod = round(random(1,this.size));
    }
    if(this.direction == 0 || this.direction == 4) {
      this.x += random(-(100 / this.size), random(50 / 4, 50 / 2));
      this.y += random(-(100 / this.size), random(50 / 4, 50 / 2));
    }
    if(this.direction == 1 || this.direction == 5) {
      this.x += random(-(100 / this.size), random(50 / 4, 50 / 2));
      this.y -= random(-(100 / this.size), random(50 / 4, 50 / 2));
    }
    if(this.direction == 2 || this.direction == 6) {
      this.x -= random(-(100 / this.size), random(50 / 4, 50 / 2));
      this.y -= random(-(100 / this.size), random(50 / 4, 50 / 2));
    }
    if(this.direction == 3 || this.direction == 7) {
      this.x -= random(-(100 / this.size), random(50 / 4, 50 / 2));
      this.y += random(-(100 / this.size), random(50 / 4, 50 / 2));
    }
  }
}
