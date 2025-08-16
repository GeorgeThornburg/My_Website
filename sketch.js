let wWidth, wHeight;
let x = 50, y = 50;
//let xHomex = 335, yHomey = 290;
//let gWidth = 50, gHeight = 100;
let gif_stand_still, gif_walk_right, gif_walk_away, gif_walk_left, gif_walk_towards, home_door_closed;
let dX = 350, dY = 460, dW = 150, dH = 50;
let MoonWalk = false;
let LeftWalk = false;
let RightWalk = false;
let FrontWalk = false;
let AwayWalk = false;


function preload() {
  background_image = loadImage('images/background_image.jpg');
  gif_stand_still = loadImage('images/stand_still.gif');
  gif_walk_right = loadImage('images/walk_right.gif');
  gif_walk_left = loadImage('images/walk_left.gif');
  gif_walk_towards = loadImage('images/walk_towards.gif');
  gif_walk_away = loadImage('images/walk_away.gif');
  home_door_closed = loadImage('images/home_door_closed.png');
  home_door_open = loadImage('images/home_door_open.png');
  projects_door_closed = loadImage('images/projects_door_closed.png');
  projects_door_open = loadImage('images/projects_door_open.png');
  about_door_closed = loadImage('images/about_door_closed.png');
  about_door_open = loadImage('images/about_door_open.png');
  contact_black = loadImage('images/contact_me_black.png');
  contact_white = loadImage('images/contact_me_white.png');
  fountain = loadImage('images/fountain.gif');
  GetCoor();

}



function setup() {

  wWidth = windowWidth - 20.5;
  wHeight = windowHeight - 20.5;
  createCanvas(wWidth, wHeight);
  background_image.resize(wWidth, wHeight);
  gif_stand_still.resize(wWidth*.05, wHeight*.1);
  gif_walk_left.resize(wWidth*.05, wHeight*.1);
  gif_walk_right.resize(wWidth*.05, wHeight*.1);
  gif_walk_towards.resize(wWidth*.05, wHeight*.1);
  gif_walk_away.resize(wWidth*.05, wHeight*.1);
  home_door_closed.resize(wWidth*.15, wHeight*.3);
  home_door_open.resize(wWidth*.15, wHeight*.3);
  projects_door_closed.resize(wWidth*.15, wHeight*.3);
  projects_door_open.resize(wWidth*.15, wHeight*.3);
  about_door_closed.resize(wWidth*.15, wHeight*.3);
  about_door_open.resize(wWidth*.15, wHeight*.3);
  contact_black.resize(wWidth*.15, wHeight*.3);
  contact_white.resize(wWidth*.15, wHeight*.3);
  fountain.resize(wWidth*.15, wHeight*.3);

}



function draw() {
  image(background_image, 0, 0);
  image(fountain, wWidth*.43, wHeight*.22);
  noFill();
  noFill();
  Boundaries();
  Movement();
  // rectangle around 'home'
/*   rect(wWidth*.19, wHeight*.33, wWidth*.107, wHeight*.208);
  // rectangle around 'fountain'
  rect(wWidth*.429, wHeight*.33, wWidth*.152, wHeight*.188);
  // rectangle around 'projects'
  rect(wWidth*.342, wHeight*.055, wWidth*.126, wHeight*.199);
  //rectangle around 'guy'
  rect(x, y, wWidth*.025, wHeight*.1);
  // rectangle around 'About'
  rect(wWidth*.54, wHeight*.047, wWidth*.11, wHeight*.204);
  // rectangle around 'Contact Me'
  rect(wWidth*.701, wHeight*.295, wWidth*.127, wHeight*.25);
  
  
  //rectangle below 'guy' - hit box
  rect(x, y+(wHeight*.1), wWidth*.025, wHeight*.01);
  //rectangle below 'projects' - hit box
  rect(wWidth*.342, wHeight*.250, wWidth*.126, wHeight*.04);
  // rectangle below 'home' - hit box
  rect(wWidth*.19, wHeight*.54, wWidth*.107, wHeight*.04);
  // rectangle below - 'About' - hit box
  rect(wWidth*.54, wHeight*.251, wWidth*.11, wHeight*.04);
  // rectangle around 'Contact Me' - hit
  rect(wWidth*.701, wHeight*.545, wWidth*.127, wHeight*.04);
  // rectangle around 'Jackson Highway' - hit
  rect(0, wHeight*.735, wWidth, wHeight*.135); */
  Layers();
}

function Boundaries() {
  image(home_door_closed, wWidth*.17, wHeight*.3);
  image(projects_door_closed, wWidth*.33, wHeight*.005);
  image(about_door_closed, wWidth*.52, wHeight*.0);
  image(contact_black, wWidth*.69, wHeight*.27);
  //screen boundaries for 'guy'
  if (x < 0) {                                                                                       //left wall
    x = x + 2;
  } else if (y < 0) {                                                                                //ceiling
    y = y + 2;
  } else if (x + 50 > wWidth) {                                                                      //right wall
    x = x - 2;
  } else if (y + 100 > wHeight) {                                                                    //floor
    y = y - 2;
  }




if (
  x < (wWidth * 0.19 + wWidth * 0.107) &&
  (x + wWidth * 0.025) > (wWidth * 0.19) &&
  (y + wHeight * 0.1) < (wHeight * 0.54 + wHeight * 0.04) &&
  (y + wHeight * 0.1 + wHeight * 0.01) > (wHeight * 0.54)
){   //controls access to HOME

    image(home_door_open, wWidth*.17, wHeight*.3);
    if(keyIsDown(UP_ARROW) === true){
      window.location.href = "home.html";
    } else {
      //skip
    }
  } else if (
      (
  x < (wWidth * 0.342 + wWidth * 0.126) &&
  (x + wWidth * 0.025) > (wWidth * 0.342) &&
  (y + wHeight * 0.1) < (wHeight * 0.250 + wHeight * 0.04) &&
  (y + wHeight * 0.1 + wHeight * 0.01) > (wHeight * 0.250)
)
  ){
      image(projects_door_open, wWidth*.33, wHeight*.005);
      if(keyIsDown(UP_ARROW) === true){
        window.location.href = "projects.html";
      } else {
        //skip
      }
  } else if (
      (

  x < (wWidth * 0.54 + wWidth * 0.11) &&
  (x + wWidth * 0.025) > (wWidth * 0.54) &&
  (y + wHeight * 0.1) < (wHeight * 0.251 + wHeight * 0.04) &&
  (y + wHeight * 0.1 + wHeight * 0.01) > (wHeight * 0.251)

)
  ){
      image(about_door_open, wWidth*.52, wHeight*.0);
      if(keyIsDown(UP_ARROW) === true){
        window.location.href = "about.html";
      } else {
        //skip
      }
  } else if (
      (

  x < (wWidth * 0.701 + wWidth * 0.127) &&
  (x + wWidth * 0.025) > (wWidth * 0.701) &&
  (y + wHeight * 0.1) < (wHeight * 0.545 + wHeight * 0.04) &&
  (y + wHeight * 0.1 + wHeight * 0.01) > (wHeight * 0.545)

)
  ){
      image(contact_white, wWidth*.69, wHeight*.27);
      if(keyIsDown(UP_ARROW) === true){
        window.location.href = "contact.html";
      } else {
        //skip
      }
  } else if (
      (

  x < (0 + wWidth) &&
  (x + wWidth * 0.025) > 0 &&
  (y + wHeight * 0.1) < (wHeight * 0.735 + wHeight * 0.135) &&
  (y + wHeight * 0.1 + wHeight * 0.01) > (wHeight * 0.735)

)
  ){
    MoonWalk = true;
  } else {
    MoonWalk = false;
  }



}













function Movement(){
  
// Collision with fountain
let collision = (
  x < (wWidth * 0.429 + wWidth * 0.152) &&
  (x + wWidth * 0.025) > (wWidth * 0.429) &&
  y < (wHeight * 0.33 + wHeight * 0.1) &&
  (y + wHeight * 0.1) > (wHeight * 0.33)
) ||
// Collision with Home  
(
  x < (wWidth * 0.19 + wWidth * 0.107) &&
  (x + wWidth * 0.025) > (wWidth * 0.19) &&
  y < (wHeight * 0.33 + wHeight * 0.1) &&
  (y + wHeight * 0.1) > (wHeight * 0.33)
) ||
// Collision with Projects 
( 
  x < (wWidth * 0.342 + wWidth * 0.126) &&
  (x + wWidth * 0.025) > (wWidth * 0.342) &&
  y < (wHeight * 0.055 + wHeight * 0.1) &&
  (y + wHeight * 0.1) > (wHeight * 0.055)
) ||
// Collision with About
( 
  x < (wWidth * 0.54 + wWidth * 0.11) &&
  (x + wWidth * 0.025) > (wWidth * 0.54) &&
  y < (wHeight * 0.047 + wHeight * 0.1) &&
  (y + wHeight * 0.1) > (wHeight * 0.047)  
) ||
// Collision with Contact Me
(  
  x < (wWidth * 0.701 + wWidth * 0.127) &&
  (x + wWidth * 0.025) > (wWidth * 0.701) &&
  y < (wHeight * 0.295 + wHeight * 0.13) &&
  (y + wHeight * 0.1) > (wHeight * 0.295)
);


  if (!collision){
    if (MoonWalk){ 
      if (keyIsDown(LEFT_ARROW) === true) {
        x = x - 2;
        image(gif_walk_right, x, y);
      } else if (keyIsDown(RIGHT_ARROW) ===true )  {
        x = x + 2;
        image(gif_walk_left, x, y);
      } else if (keyIsDown(UP_ARROW) === true) {
        y = y - 2;
        image(gif_walk_towards, x, y);
        SaveToServer();
      } else if (keyIsDown(DOWN_ARROW) === true) {
        y = y + 2;
        image(gif_walk_away, x, y);
        SaveToServer();
      } else {
        image(gif_stand_still, x, y);
      }
    } else {
        if (keyIsDown(LEFT_ARROW) === true && !LeftWalk) {
          x = x - 2;
          image(gif_walk_left, x, y);
          RightWalk = false;
          FrontWalk = false;
          AwayWalk = false;
          SaveToServer();
        } else if (keyIsDown(RIGHT_ARROW) ===true && !RightWalk)  {
          x = x + 2;
          image(gif_walk_right, x, y);
          LeftWalk = false;
          FrontWalk = false;
          AwayWalk = false;
          SaveToServer();
        } else if (keyIsDown(UP_ARROW) === true && !AwayWalk) {
          y = y - 2;
          image(gif_walk_away, x, y);
          FrontWalk = false;
          LeftWalk = false;
          RightWalk = false;
          SaveToServer();
        } else if (keyIsDown(DOWN_ARROW) === true && !FrontWalk) {
          y = y + 2;
          image(gif_walk_towards, x, y);
          AwayWalk = false;
          LeftWalk = false;
          RightWalk = false;
          SaveToServer();
        } else {
          image(gif_stand_still, x, y);
        }
    }
  } else {
          if (keyIsDown(LEFT_ARROW) === true) {
        x = x + 4;
        image(gif_walk_left, x, y);
        LeftWalk = true;
      } else if (keyIsDown(RIGHT_ARROW) ===true)  {
        x = x - 4;
        image(gif_walk_right, x, y);
        RightWalk = true;
      } else if (keyIsDown(UP_ARROW) === true) {
        y = y + 4;
        image(gif_walk_away, x, y);
        AwayWalk = true;
      } else if (keyIsDown(DOWN_ARROW) === true) {
        y = y - 4;
        image(gif_walk_towards, x, y);
        FrontWalk = true;
      } else {
        image(gif_stand_still, x, y);
      }
  }
  
} 








function SaveToServer(){

  // POST request using fetch()
  fetch("http://3.144.125.234/parse/classes/Web_Page/XZXv6FDamz", {

      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify({
          "x": x,
          "y": y
      }),

      // Adding headers to the request
      headers: {
          'X-Parse-Application-Id': 'myappID'
      }
  })

      // Converting to JSON
      .then(response => response.json())

      // Displaying results to console
      .then(json => console.log(json));
}


function GetCoor(){

  fetch("http://3.144.125.234/parse/classes/Web_Page/XZXv6FDamz", {
    method: "GET",
    headers: {
        'X-Parse-Application-Id': 'myappID'
    }
  })
  .then(response => response.json())
  .then(data => {
      x = data.x;
      y = data.y;
      console.log("x:", x, "y:", y);
  })
  .catch(error => console.error("Error:", error));

}
  



function Layers() {
  if(y < wHeight*.3){
    image(fountain, wWidth*.43, wHeight*.22);
  }else{
    //skip
  };
}

 



