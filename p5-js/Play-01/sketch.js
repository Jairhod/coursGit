function setup() {
	createCanvas(800, 400);
}

function draw() {
  background(150, 0, 100);
  ellipse(mouseX, mouseY, 100, 100);
  fill (mouseX, 0, mouseY);

}
