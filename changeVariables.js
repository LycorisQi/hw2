function setup() {
    createCanvas(400, 400);
    background(220);
    // HSB with H range 0-400, S range 0-400, B range 0-100:
    colorMode(HSB, 400, 400, 100);
}

function draw() {
    let h = random(width);
    let s = random(height);
    fill(h, s, 100);
    noStroke()
    ellipse(h, s, 20);
}





2. version

function setup() {
  createCanvas(400, 400);
	
}

function draw() {
  background(220);

  let hi = random(width);
  let bye = random(height);
  fill(hi, bye, 100);
  noStroke()
  ellipse(hi, bye, 20);
}
