// no need to change anything from here ... ----------------------

var letters = {};

var marginLeft = 20;
var marginTop = 50;
var textX = marginLeft;
var textY = 150;
var lineHeight = 150;
var lastWidth = 0;
var typedText = "A";

var hueValue = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    initLetters();
    noFill();
    strokeWeight(0.25);

    colorMode(HSB, 360, 100, 100, 100);
}

function draw() {

    scale(1.5);

}

function mouseMoved() {
    stroke(hueValue, 100, 100, 30);
    hueValue = hueValue + 5;
    if (hueValue > 360) {
        hueValue = 0;
    }

    var c = typedText[typedText.length - 1];

    if (letters[c]) {
        push();
        translate(textX, textY);
        lastWidth = letters[c]();
        pop();
    }

}

function keyTyped() {
    var k = key;
    if (!letters[k]) {
        k = k.toUpperCase();
    }
    if (letters[k]) {
        textX += lastWidth; 
        typedText += k;
    }
    if (keyCode == RETURN) {
        typedText += "\n";
        textX = marginLeft;
        textY += lineHeight;
        lastWidth = 50;
    }
    if (keyCode == BACKSPACE || keyCode == DELETE) {
        if (typedText.length > 1)
            typedText = typedText.slice(0, -1);
        console.log(typedText);
    }

    //loop();
}
// ... to here -----------------------------------------------------


function initLetters() {
    // Add your calls to the letter functions here

    letters = {
        A: draw_A,
        B: draw_B,
        C: draw_C,
        D: draw_D,
        E: draw_E,
        F: draw_F,
        G: draw_G,
        H: draw_H,
        I: draw_I,
        J: draw_J,
        K: draw_K,
        L: draw_L,
        M: draw_M,
        N: draw_N,
        O: draw_O,
        P: draw_P,
        R: draw_R,
        S: draw_S,
        T: draw_T,
        U: draw_U,
        W: draw_W,
        Z: draw_Z,

        " ": function() { return 30 },
    };
}

// A function for each letter

function draw_A() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(5 + dx, 0 + dy, 35 + dx, -100 + dy);
    line(65 + dx, 0 + dy, 35 + dx, -100 + dy);
    line(15 + dx, -40 + dy, 55 + dx, -40 + dy);

    return 70;
}

function draw_B() {
    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    arc(11 + dx, -75 + dy, 47, 50, radians(-90), radians(90));
    arc(11 + dx, -25 + dy, 67, 50, radians(-90), radians(90));

    return 75;
}

function draw_C() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    arc(30 + dx, -49.5 + dy, 67, -100, radians(-90), radians(90));


    return 50;
}

function draw_D() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 9 + dx, -100 + dy);
    arc(10 + dx, -49.5 + dy, 67, -100, radians(90), radians(-90));

    return 60;
}

function draw_E() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    line(10.5 + dx, -100 + dy, 45 + dx, -100 + dy)
    line(10.5 + dx, -50 + dy, 45 + dx, -50 + dy);
    line(10.5 + dx, 0 + dy, 45 + dx, 0 + dy);

    return 80;
}

function draw_F() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    line(10.5 + dx, -50 + dy, 45 + dx, -50 + dy);
    line(10.5 + dx, -100 + dy, 45 + dx, -100 + dy);

    return 80;
}

function draw_G() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    arc(30 + dx, -49.5 + dy, 67, -100, radians(-90), radians(90));
    line(30 + dx, -49.5 + dy, 10 + dx, -50 + dy);
    line(30 + dx, -49.5 + dy, 30 + dx, 0.5 + dy);


    return 50;
}

function draw_H() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    line(10 + dx, -50 + dy, 80 + dx, -50 + dy);
    line(80 + dx, 0 + dy, 80 + dx, -100 + dy);


    return 80;
}

function draw_I() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);

    return 50;
}

function draw_J() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    arc(0 + dx, -0.5 + dy, 20, 20, radians(0), radians(90));


    return 30;

}

function draw_K() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    line(10.5 + dx, -50 + dy, 45 + dx, -100 + dy);
    line(10.5 + dx, -50 + dy, 45 + dx, 0 + dy)

    return 70;
}

function draw_L() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    line(10.5 + dx, 0 + dy, 45 + dx, 0 + dy);



    return 70;
}

function draw_M() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 10.5 + dx, -100 + dy);
    line(10 + dx, -100 + dy, 45 + dx, -50 + dy);
    line(80 + dx, -100 + dy, 45 + dx, -50 + dy);
    line(80 + dx, 0 + dy, 80 + dx, -100 + dy);

    return 100;

}


function draw_N() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 9 + dx, -100 + dy);
    line(60 + dx, 0 + dy, 9 + dx, -100 + dy);
    line(60 + dx, 0 + dy, 59 + dx, -100 + dy);

    return 100;

}

function draw_O() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    arc(10 + dx, -49.5 + dy, 67, -100, radians(90), radians(-90));
    arc(10 + dx, -49.5 + dy, 67, -100, radians(-90), radians(-90));

    return 70;
}


function draw_P() {


    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 9 + dx, -100 + dy);
    arc(11 + dx, -75 + dy, 47, 50, radians(-90), radians(90));


    return 60;

}

function draw_R() {


    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 9 + dx, -100 + dy);
    arc(11 + dx, -75 + dy, 47, 50, radians(-90), radians(90));
    line(60 + dx, 0 + dy, 9 + dx, -50 + dy);


    return 80;

}

function draw_S() {
    dx = mouseX / 10;
    dy = mouseY / 10;


    arc(11 + dx, -25 + dy, 47, 50, radians(-87), radians(125));
    arc(15 + dx, -75 + dy, 47, 50, radians(95), radians(-90));


    return 75;
}

function draw_T() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, 0 + dy, 9 + dx, -100 + dy);
    line(-20 + dx, -100 + dy, 40 + dx, -100 + dy);

    return 70;
}

function draw_U() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(10 + dx, -30 + dy, 9 + dx, -100 + dy);
    arc(35 + dx, -30 + dy, 50, 50, radians(0), radians(180));
    line(60 + dx, -30 + dy, 59 + dx, -100 + dy);

    return 90;
}

function draw_W() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(60 + dx, 0 + dy, 15 + dx, -100 + dy);
    line(60 + dx, 0 + dy, 80 + dx, -50 + dy);
    line(100 + dx, 0 + dy, 80 + dx, -50 + dy);
    line(100 + dx, 0 + dy, 135 + dx, -100 + dy);

    return 50;
}

function draw_Z() {

    dx = mouseX / 10;
    dy = mouseY / 10;

    line(-20 + dx, -100 + dy, 40 + dx, -100 + dy);
    line(-30 + dx, 0 + dy, 40 + dx, -100 + dy);
    line(-30 + dx, 0 + dy, 40 + dx, 0 + dy);

    return 70;
}