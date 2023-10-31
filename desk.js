img = "";

function preload()
{
img = loadImage("desk.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
document.getElementById("Object").innerHTML = "Object status: Object Detected";
document.getElementById("what").innerHTML = "The system identified a desk.";
}

function draw()
{
image(img, 0, 0, 500, 300);
stroke("red");
noFill();
rect(50, 30, 400, 250);
text("desk", 50, 20);
}