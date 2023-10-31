img = "";

function preload()
{
img = loadImage("water_bottle.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a water bottle.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 400, 250);
text("water bottle", 50, 20);
}