Status = "";
FRUIT_BASKET_image = "";

function preload(){
    FRUIT_BASKET_image = loadImage("FRUIT_BASKET.jpg")
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
    object_detector.detect(FRUIT_BASKET_image, gotResults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(FRUIT_BASKET_image,0,0,640,350)
}