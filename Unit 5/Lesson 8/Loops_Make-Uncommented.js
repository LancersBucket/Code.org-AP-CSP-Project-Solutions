var iconsList = ["icon://fa-heart", "icon://fa-music","icon://fa-smile-o", "icon://fa-globe", 
"icon://fa-tree", "icon://fa-bolt", "icon://fa-moon-o", "icon://fa-star"];
var randShape = 0;
var newRandShape = 0;

init();

onEvent("colorsButton", "click", function( ) {
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"icon-color",rgb(randomNumber(0,255),randomNumber(0,255),
    randomNumber(0,255),Math.random()));
  }
  
  setProperty("homeScreen","background-color",rgb(randomNumber(0,255),randomNumber(0,255),
  randomNumber(0,255)));
  playSound("sound://category_app/app_button_1.mp3");
});

onEvent("locationsButton", "click", function( ) {
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"x",randomNumber(0,320));
    setProperty("icon"+i,"y",randomNumber(0,450));
    setProperty("icon"+i,"width",randomNumber(0,320));
    setProperty("icon"+i,"height",randomNumber(0,450));
  }
  playSound("sound://category_app/app_button_1.mp3");
});

onEvent("shapesButton", "click", function( ) {
  newRandShape = randomNumber(0,iconsList.length-1);
  
    if (newRandShape != randShape) {
    randShape = newRandShape;
  }
  else {
        if ((newRandShape + 1) > iconsList.length-1) {
      randShape = 0;
    }
    else {
      randShape = newRandShape + 1;
    }
  }
  
  for (var i=0; i<20; i++) {
    setProperty("icon"+i,"image",iconsList[randShape]);
  }
  playSound("sound://category_app/app_button_1.mp3");
});

onEvent("save", "click", function( ) {
  hideElement("locationsButton");
  hideElement("colorsButton");
  hideElement("shapesButton");
  hideElement("save");
  
  playSound("sound://category_app/app_button_1.mp3");
});

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