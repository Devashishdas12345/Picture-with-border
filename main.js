function preload() {

}

function setup() {
    canvas = createCanvas(640 , 480);
    canvas.position(150 , 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video , 200 , 150 , 220 , 200);

    fill(0 , 128 , 0);
    stroke(0 , 128 , 0);
    rect(90 , 40 , 460 ,20);

    fill(0 , 128 , 0);
    stroke(0 , 128 , 0);
    rect(90 , 420 , 460 , 20);

    fill(0 , 128 , 0);
    stroke(0 , 128 , 0);
    rect(45, 75, 20, 350);

    fill(0 , 128 , 0);
    stroke(0 , 128 , 0);
    rect(535, 75, 20, 350);

    fill(0 , 0 , 255);
    stroke(0 , 0 , 255);
    circle(50 , 50 ,80);

    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle(550 , 50 ,80);

    fill(134 , 139 , 193);
    stroke(255 , 0 , 0);
    circle(550 , 430 ,80);

    fill(255 , 139 , 123);
    stroke(255 , 0 , 0);
    circle(50 , 430 ,80);
}

function take_snapshot() {
    var x = document.getElementById("user_name").value;
    var z = document.getElementById("time_name").value;
    if(x == "" && z == "" || x == "" || z == "") {
        window.alert("Enter your name and the seconds you want to wait to take your selfie!");
        console.error("Enter your name and the seconds you want to wait to take your selfie!");
        console.log("Enter your name and the seconds you want to wait to take your selfie!");
    }
    else {
        var image_name = document.getElementById("user_name").value;
        var timeout = document.getElementById("time_name").value;
        setTimeout(function() {
            save(image_name + ".png");
        } , timeout * 1000);
    }
}