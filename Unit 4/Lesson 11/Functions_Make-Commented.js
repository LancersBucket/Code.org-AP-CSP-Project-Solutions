// Initializing variables (Includes default values)
var text = "";
var color = "lightgrey";
var ff = "Arial";
var fs = 20;
var imageName = "None";

// Sets default feedbackOutput text
setText("feedbackOutput", "Looks fine to me");

// Get inputs, set them to variables, and call updateScreen();
onEvent("quoteInput", "input", function( ) {
	text = getText("quoteInput");
	updateScreen();
});
onEvent("fontFamilyInput", "change", function( ) {
	ff = getText("fontFamilyInput");
	updateScreen();
});
onEvent("colorInput", "change", function( ) {
	color = getText("colorInput");
	updateScreen();
});
onEvent("fontSizeInput", "input", function( ) {
	fs = getNumber("fontSizeInput");
	updateScreen();
});

// Extension. Gets image name and calls updateScreen();
onEvent("imageSelect","change", function () {
  imageName = getText("imageSelect");
  updateScreen();
});

// Creates updateScreen() function
function updateScreen() {
  
  //Sets all the properties of quoteOutput
  setText("quoteOutput", text);
  setProperty("quoteOutput","font-family",ff);
  setProperty("colorOutput","background-color",color);
  setProperty("quoteOutput","font-size",fs);
  
  // Extension: Sets background image. Also changes text color to white when an image is chosen
  if (imageName != "None") {
    setProperty("quoteOutput", "text-color", rgb(256,256,256));
    setImageURL("image1",imageName);
  }
  
  // Changes text in feedbackOutput based on inputs
  if (color == "lightblue" && ff == "Comic" ) {
    setText("feedbackOutput", "Do you want to have a bad time?");
  } 
  else if (fs == 30 && ff == "Lucida Console" ) {
    setText("feedbackOutput", "code.org interface be like:"); 
  } 
  else {
    setText("feedbackOutput", "Looks fine to me");
  }
}