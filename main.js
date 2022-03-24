img = "";
Status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDectector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects"
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

}

function modelloaded() {
    console.log("I am loaded");
    Status = true;
    objectDectector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}