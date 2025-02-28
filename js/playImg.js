var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var music = document.getElementById("bgMusic"); // Get the audio element

function showImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function play() {
    if (music.paused) {
        music.play();  // Start music when button is clicked
    }

    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
    }

    // Set image size when play starts
    myImage.style.width = "40%";  // Adjust width
    myImage.style.height = "auto"; // Maintain aspect ratio

    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;

    if (t == 0) {
        setInterval(showImage, 2500);
    }

    t++;
}

function preshowImage() {
    document.getElementById("imgTxt").style.opacity = 0;
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function buttonFadeIn() {
    if (btnVal < 1) {
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    } else {
        clearInterval(buttonInterval);
        if (ok == 3) {
            ok += 1;
        }
    }
}

function event() {
    showImageInterval = setInterval(preshowImage, 100);

    imgInterval = setInterval(function () {
        if (ok == 3) {
            setTimeout(function () {
                buttonInterval = setInterval(buttonFadeIn, 50);
            }, 1500);
            clearInterval(imgInterval);
        }
    }, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
