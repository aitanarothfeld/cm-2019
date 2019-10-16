// Define global variables
let y = 100;
let frank_img; // Declare variable 'frank_img'
let beer_img; // Declare variable 'beer_img'
let frank_x_pos = 200;
let beer_x_pos = 100;
let frank_rate = 3;
let song; 
let snowflakes = []; // array to hold snowflake objects

function preload(){
    song = loadSound('Intro.mp3'); // Load the sound
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(windowWidth, windowHeight); // Size must be the first statement
  frameRate(30);
  frank_img = loadImage('frank.png'); // Load the image
  beer_img = loadImage('beer_1.jpg'); // Load the image
  noStroke();

}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  
  if (!song.isPlaying()) {
    song.play() 
  }
  

  frank_x_pos = frank_x_pos - frank_rate; 
  if (frank_x_pos < 0 ) {
      frank_x_pos = width;
  }

  beer_x_pos = beer_x_pos - 10;
  if (beer_x_pos < 0) {
      beer_x_pos = width;
  }

  if (frank_x_pos - beer_x_pos > 300) {
    frank_rate = 15
  }
  else if (frank_x_pos - beer_x_pos < 0) {
    frank_rate = 5
  }

  image(frank_img, frank_x_pos, height / 2 - frank_img.height / 20, frank_img.width / 10, frank_img.height / 10);
  image(beer_img, beer_x_pos, height / 2 - frank_img.height / 20, beer_img.width / 5, beer_img.height / 5);
  
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

}


// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

