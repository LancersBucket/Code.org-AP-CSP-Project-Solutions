// Init vars
var iconsList = ["icon://fa-heart", "icon://fa-music","icon://fa-smile-o", "icon://fa-globe", 
"icon://fa-tree", "icon://fa-bolt", "icon://fa-moon-o", "icon://fa-star"];
var randShape = 0;
var newRandShape = 0;

// Intialization function
init();

onEvent("colorsButton", "click", function( ) {
  // Loops through icons to randomize colors
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"icon-color",rgb(randomNumber(0,255),randomNumber(0,255),
    randomNumber(0,255),Math.random()));
  }
  
  // Randomized home screen color
  setProperty("homeScreen","background-color",rgb(randomNumber(0,255),randomNumber(0,255),
  randomNumber(0,255)));
  /* EXTENSION */
  playSound("sound://category_app/app_button_1.mp3");
});

onEvent("locationsButton", "click", function( ) {
  // Randomized x, y, height, and width
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"x",randomNumber(0,320));
    setProperty("icon"+i,"y",randomNumber(0,450));
    setProperty("icon"+i,"width",randomNumber(0,320));
    setProperty("icon"+i,"height",randomNumber(0,450));
  }
  /* EXTENSION */
  playSound("sound://category_app/app_button_1.mp3");
});

onEvent("shapesButton", "click", function( ) {
  /* EXTENSION */
  // Gets random number
  newRandShape = randomNumber(0,iconsList.length-1);
  
  // Checks if new random number is the same as the old random number
  if (newRandShape != randShape) {
    randShape = newRandShape;
  }
  else {
    // If you add 1 to the new random number and it is over the list length, set it to 0
    if ((newRandShape + 1) > iconsList.length-1) {
      randShape = 0;
    }
    // Otherwise add one
    else {
      randShape = newRandShape + 1;
    }
  }
  
  // Loops through icons and sets their image
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"image",iconsList[randShape]);
  }
  /* EXTENSION */
  playSound("sound://category_app/app_button_1.mp3");
});

/* EXTENSION */
onEvent("save", "click", function( ) {
  hideElement("locationsButton");
  hideElement("colorsButton");
  hideElement("shapesButton");
  hideElement("save");
  
  playSound("sound://category_app/app_button_1.mp3");
});

// Initialization function that randomized everything to start
function init() {
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"image",iconsList[0]);
    setProperty("icon"+i,"icon-color",rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255),
    Math.random()));
    setProperty("icon"+i,"x",randomNumber(0,320));
    setProperty("icon"+i,"y",randomNumber(0,450));
    setProperty("icon"+i,"width",randomNumber(0,320));
    setProperty("icon"+i,"height",randomNumber(0,450));
  }
  setProperty("homeScreen","background-color",rgb(randomNumber(0,255),randomNumber(0,255),
  randomNumber(0,255)));
}