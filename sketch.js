let perf = [0,0,0,0,0];
let drawWorm1, drawWorm2;
function setup() {
  createCanvas(1920, 1080, WEBGL);
  colorMode(HSB);
  drawWorm1 = worms(7, 300, 20, 100, 1)
  drawWorm2 = worms(13, 300, 20, 100,-1)
}                       

let colorNoise = 10

let rotation = 0;

function draw() {
  const datum_time = performance.now()
  background(0);
  
  let mainColor = noise(colorNoise)*360
  let complementingColor = (mainColor + 137) % 360
  
  spotLight(complementingColor , 100, 100, 0, 0, 2000, 0, 0, -1, PI, 100);
  pointLight(mainColor, 100, 30, -width/4, 0, -500);
  pointLight(complementingColor, 100, 30, width/4, 0, -500);
  pointLight(mainColor, 100, 30, 0, width/4, -500);
  pointLight(complementingColor, 100, 30, 0, -width/4, -500);
  //pointLight(complementingColor, 100, 50, 0, 0, -4000);
  //pointLight(mainColor         , 100, 10, 0, 0, 0);
  //pointLight(mainColor         , 100, 50, 0, 0, -500);
  
  push()
  translate(0,0,-500)
  //plane(500,500)
  pop()
  
  push()
  noStroke()
  translate(0,100,-500)  
  rotateZ(PI)
  drawWorm1()
  pop()
  
  push()
  noStroke()
  translate(0,100,-500)  
  rotateZ(0)
  drawWorm2()
  pop()
  
  push()
  noStroke()
  translate(0,0,-5000)
  drawBox(2000,10000)
  pop()

  
  colorNoise += 0.01
  //saveCanvas(`${frameCount}`,"png")
}

function drawBox(size, depth) {
  push()
  plane(size,size)
  pop()
  
  push()
  rotateY(PI/2)
  translate(-size/2,0,-size/2)
  plane(depth,size)
  pop()
  
  push()
  rotateY(-PI/2)
  translate(size/2,0,-size/2)
  plane(depth,size)
  pop()
  
  push()
  rotateX(PI/2)
  translate(0,+size/2,-size/2)
  plane(size,depth)
  pop()
  
  push()
  rotateX(-PI/2)
  translate(0, -size/2,-size/2)
  plane(size,depth)
  pop()
}

function worms(worms_num, segments, thickness, r, direction) {

  let rotation = 0;
  let w = [];
  for (let i = 0; i < worms_num; i++) {
    updateRadius = (_) => {
      const radius = r;
      
      let off = 10*(i+1)+direction;

      return () => {
        off += 0.05;
        return (radius + noise(off) * radius * 10) 
      };
    };
    let degree_offset = (TWO_PI/worms_num) * i 
    w.push(new Worm(segments, thickness, updateRadius(), direction, degree_offset));
  }
  
  return () => {
    let offset = 1;
    
    push();
//    rotateZ(rotation)
//    rotateX(-rotation)
    rotateY(+rotation*direction)
    for (let i = 0; i < worms_num; i++) {
      push();
      //rotateZ((i-1)*TWO_PI/worms_num);
      rotateY(i*TWO_PI/worms_num);
      w[i].draw();    
      pop();
    }
    rotation += (TWO_PI/180)
    offset += 0.01
    pop();
  };
}

class Worm {
  constructor(segments, length, radius, rotation_direction, degree_offset) {
    this.segNum = segments;
    this.segLen = length;
    this.r = radius;

    this.theta = degree_offset;
    this.x = [];
    this.y = [];
    
    this.rotation_direction = rotation_direction

    for (let i = 0; i < this.segNum; i++) {
      this.x[i] = 0;
      this.y[i] = 0;
    }
  }

  draw() {
    const datum_time = performance.now();
    let xpos = this.r() * Math.sin(this.theta);
    let ypos = this.r() * Math.cos(this.theta);
    specularMaterial(100);
    this.dragSegment(0, xpos, ypos);
    for (let i = 1; i < this.x.length; i++) {
      specularMaterial(100-(100/this.x.length)*i);
      this.dragSegment(i, this.x[i - 1], this.y[i - 1]);
    }    
    this.theta += this.rotation_direction * (TWO_PI / 180);
  }

  dragSegment(i, xin, yin) {
    const dx = xin - this.x[i];
    const dy = yin - this.y[i];
    const angle = Math.atan2(dy, dx);
    this.x[i] = xin - Math.cos(angle) * (this.segLen * .2);
    this.y[i] = yin - Math.sin(angle) * (this.segLen * .2);
    this.segment(this.x[i], this.y[i]);
  }

  segment(x, y) {
    push();
    translate(x, y, 0);
    sphere(this.segLen);
    pop();
  }
}
