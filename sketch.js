var rain = []
function setup() {

  createCanvas(800,400);
for(var i=0;i<100;i++){
var drop= new Drop(random(0,800),random(0,400))
rain.push(drop)
}
  
}

function draw() {
  background(0);
for(var i=0;i<rain.length;i++) {
rain[i].display()
rain[i].fall()

} 
  drawSprites();
}