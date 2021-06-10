let x = 0;
let y = 0;
let coeffs = [
    [0.01,     0,     0, 0,     0, 0.16,   0],
    [0.86,  0.85,  0.04, 0, -0.04, 0.85, 1.60],
    [0.93,  0.20, -0.26, 0,  0.23, 0.22, 1.60],
    [1.00, -0.15,  0.28, 0,  0.26, 0.24, 0.44]
  ];


function setup() {
  
  if(windowWidth < windowHeight) createCanvas(windowWidth, windowWidth);
  else createCanvas(windowHeight, windowHeight);
  
  background(24, 65, 103);
  
  
}

function draw() {
  for (let i = 0; i < 100; i++) {
    drawPoint();
    [x, y] = pickNext(x, y);
  }
}

const pickNext = (x, y) => {
  let x2, y2;
  let r = random(1);
  
  for(let i = 0; i < coeffs.length; i++) {
    
    if(r < coeffs[i][0]) {
      x2 = coeffs[i][1] * x + coeffs[i][2] * y + coeffs[i][3];
      y2 = coeffs[i][4] * x + coeffs[i][5] * y + coeffs[i][6];
      break;
    }
  }

  return [x2, y2];
};

const drawPoint = () => {
  stroke(160, 222, 194);
  strokeWeight(1);
  let px = map(x, -3.182, 3.6558, 0, width);
  let py = map(y, -1, 10.9983, height, 0);
  point(px, py);
};
 