var text = "";
var color = "lightgrey";
var ff = "Arial";
var fs = 20;
var imageName = "None";

setText("feedbackOutput", "Looks fine to me");

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

onEvent("imageSelect","change", function () {
  imageName = getText("imageSelect");
  updateScreen();
});

function updateScreen() {
  setText("quoteOutput", text);
  setProperty("quoteOutput","font-family",ff);
  setProperty("colorOutput","background-color",color);
  setProperty("quoteOutput","font-size",fs);
  
  if (imageName != "None") {
    setProperty("quoteOutput", "text-color", rgb(256,256,256));
    setImageURL("image1",imageName);
  }
  
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