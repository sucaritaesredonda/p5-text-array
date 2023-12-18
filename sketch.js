var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})


speed=0.5
var n = 6
var a = () => shape(4,0.4).repeat(n,n)
a().add(a().scroll([0.5/n,n,0.7/n,1],[0.2/n,n,0.5/n, 0.2/n])).
diff(src(o0,0.1).scale([1,0.9])).thresh(0.5,0,0.9,1)
.modulate(o1,()=>mouse.x*0.003)

.out(o0)

shape(4,0.5,0.001).repeat(3)
  .scroll(0,()=>mouse.y*0.001 )
.scroll(0,()=>mouse.x*0.001 )


  .out(o1)

render(o0)
	
let text_x = 100, text_y = 100; // Initial text position
let offset_x = 0; // Offset for x-coordinate movement
let offset_y = 0; // Offset for y-coordinate movement
let is_dragging = false; // Flag to check if text is being dragged
let texts = ["Click me!", "Move me","Remember that", "no matter", "how fast", "you can run", "you will", "never scape."]; // Array to store different text values
let currentText = 0; // Index to track the current text to display
let text_size = 65;
let hc, pg;


function setup() {
  createCanvas(window.innerWidth,window.innerHeight, P2D);
  textSize(text_size);
  textAlign(CENTER, CENTER);
  fill(250, 10, 20, 0.6);
  stroke(0);
  strokeWeight(2);
  
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
  // Display Hydra visual in the background
  image(hc, 0, 0, width, height);

  // Smooth translation effect while dragging
  if (is_dragging) {
    text_x = mouseX - offset_x;
    text_y = mouseY - offset_y;
  }

  // Draw line following the text movement
  if (is_dragging) {
    line(mouseX, mouseY, text_x, text_y);
  }

  text(texts[currentText], mouseX, mouseY);
}

function mouseMoved() {
  // Update offsets based on mouse movement
  offset_x = mouseX;
  offset_y = mouseY;
}

function mouseClicked() {
  // Change text on mouse click
  if (dist(mouseX, mouseY, text_x, text_y) >textSize()) {
    currentText = (currentText + 1) % texts.length;
  }
}


function mouseReleased() {
  // Set dragging flag to false when the mouse is released
  is_dragging = false;
}