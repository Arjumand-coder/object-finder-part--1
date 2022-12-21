objects = [];
status = "";
input = "";

function preload() {

}

function setup() {
 canvas = createCanvas(400,400);
 canvas.center();

 video = createCapture(VIDEO);
 video.size(400,400);
 video.hide();

}

function draw() {
image(video,0,0,400,400);
}

function start() {
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Started To Detect Objects";
input = document.getElementById("status").value;
}

function modelLoaded()  {
     console.log("Model Loaded! ")
}