let wWidth, wHeight;
let x = 50, y = 50;
let xHomex = 335, yHomey = 290;
let gWidth = 50, gHeight = 100;
let gif_stand_still, gif_walk_right, gif_walk_away, gif_walk_left, gif_walk_towards, home_door_closed;
let dX = 350, dY = 460, dW = 150, dH = 50;


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
  contact_white = loadImage('images/contact_me_black.png');
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
  rect(wWidth*.19, wHeight*.33, wWidth*.107, wHeight*.208);
  // rectangle below 'home' - hit box
  rect(wWidth*.19, wHeight*.54, wWidth*.107, wHeight*.04);
  //rectangle around 'guy'
  rect(x, y, wWidth*.025, wHeight*.1);
  //rectangle below 'guy' - hit box
  rect(x, y+(wHeight*.1), wWidth*.025, wHeight*.01);
}

function Boundaries() {
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

  if (((x + wWidth*.025) > wWidth*.19) && ((x + wWidth*.025)< wWidth*.193) && (y > wHeight*.33) && (y < wHeight*.208)){                //left side of house
    x = x - 2;
  }  else if ((y < yHomey - 90) && (y > yHomey - 103) && (x + 50 > xHomex) && (x < xHomex + 175)){             //top of house
    y = y - 2;
  } else if ((y > yHomey) && (y < yHomey + 101) && (x + 50 > xHomex) && (x < xHomex + 175)){                   //bottom of house
    y = y + 2;                
  } else if ((x + 50 < xHomex + 233) && (x + 50 > xHomex) && (y > yHomey - 100) && (y < yHomey + 85)){         //bottom of house
    x = x + 2;  
  }

  if ( x + (wWidth*.025) >= wWidth*.19 && x <= wWidth*.107 && 
       y + (wHeight*.1) >= wHeight*.54 && y <= wHeight*.04){   //controls access to HOME

    image(home_door_open, wWidth*.17, wHeight*.3);
    if(keyIsDown(UP_ARROW) === true){
      window.location.href = "resume.html";
    } else {
      //skip
    }
  } else {
    image(home_door_closed, wWidth*.17, wHeight*.3);
    image(projects_door_closed, wWidth*.33, wHeight*.005);
    image(about_door_closed, wWidth*.52, wHeight*.0);
    image(contact_black, wWidth*.69, wHeight*.27);
  }



}


function Movement(){
  if (keyIsDown(LEFT_ARROW) === true) {
    x = x - 2;
    image(gif_walk_left, x, y);
  } else if (keyIsDown(RIGHT_ARROW) ===true )  {
    x = x + 2;
    image(gif_walk_right, x, y);
  } else if (keyIsDown(UP_ARROW) === true) {
    y = y - 2;
    image(gif_walk_away, x, y);
    SaveToServer();
  } else if (keyIsDown(DOWN_ARROW) === true) {
    y = y + 2;
    image(gif_walk_towards, x, y);
    SaveToServer();
  } else {
    image(gif_stand_still, x, y);
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
  





 



