Status = "";
BEDROOM_image = "";

function preload(){
    BEDROOM_image = loadImage("BEDROOM.jpg")
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(370,200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(BEDROOM_image, gotResults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(BEDROOM_image,0,0,640,350)
}