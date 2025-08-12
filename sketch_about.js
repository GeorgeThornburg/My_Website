let wWidth;
let wHeight;

function preload() {
  // Code to run before the rest of the sketch.
  //textOutput(LABEL);

}



function setup() {

  wWidth = windowWidth - 20.5;
  wHeight = windowHeight - 20.5;
  createCanvas(wWidth, wHeight);
}



function draw() {
  background(155, 161, 157);



  Navigation();
  MouseLocation();

}




function Navigation(){

  //navigation bar
  textSize(wWidth/50);
  fill('white');
  rect(0, 0, wWidth, wHeight/10);
  fill('black');
  textAlign(CENTER, CENTER);
  rect(wWidth/1.2, wHeight/100, wWidth/6, wHeight);
  text("Contact", wWidth/1.5, wHeight/100, wWidth/6, wHeight/12);
  text("Resume",wWidth/2, wHeight/100, wWidth/6, wHeight/12);
  text("Home", wWidth/6, wHeight/100, wWidth/6, wHeight/12);
  fill('red');
  rect(wWidth/1.2, wHeight/100, wWidth/6, wHeight);
  rect(wWidth/wWidth, wHeight/100, wWidth/6, wHeight);


  fill('black');
  rect(wWidth/3, wHeight/100, wWidth/6, wHeight/12);
  fill('white');
  text("About",wWidth/3, wHeight/100, wWidth/6, wHeight/12);

}

function MouseLocation() {

  if (mouseX >= wWidth/6 && mouseX <= (wWidth/1.5 + wWidth/6) && mouseY >= wHeight/100 && mouseY <= wHeight/12) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

}

function mouseClicked() {

    if (mouseX >= wWidth/6 && mouseX <= wWidth/3 && mouseY >= wHeight/100 && mouseY <= wHeight/12){
      window.location.href = "index.html";
  } else if (mouseX >= wWidth/2 && mouseX <= wWidth/1.5 && mouseY >= wHeight/100 && mouseY <= wHeight/12){
      window.location.href = "resume.html";
  }

}