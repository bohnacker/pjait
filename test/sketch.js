/**
 * typo outline displayed as rotating lines
 *
 * KEYS
 * a-z                  : text input (keyboard)
 * backspace            : delete last typed letter
 * ctrl                 : save png
 */

var textTyped = "ABC";

var font;
var path;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  opentype.load('data/FreeSans.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  if (!font) return;

  background(0);
  // margin border
  translate(50, 300);

  if (textTyped.length > 0) {
    // get a path from OpenType.js
    var fontPath = font.getPath(textTyped, 0, 0, 300);
    // convert it to a g.Path object
    path = new g.Path(fontPath.commands);
    // resample it with equidistant points
    path = g.resampleByLength(path, mouseY/50 + 2);
    // path = g.resampleByAmount(path, 500);

    // This might be the place to change things. From here ... ---------

    // draw rotating lines
    noFill();
    stroke(255, 40, 180);
    var radius = mouseX / 10;

    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];

      // only if x and y are defined
      if (pnt.x != undefined && pnt.y != undefined) {
        push();
        translate(pnt.x, pnt.y);
        // calculate an angle from frame count and position on the screen
        var angle = radians(frameCount + pnt.x + pnt.y);
        rotate(angle);
        line(-radius, 0, radius, 0);
        pop();
      }
    }

    // ... to here -----------------------------------------------------

  }
}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, textTyped.length - 1);
    }
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
  }
}