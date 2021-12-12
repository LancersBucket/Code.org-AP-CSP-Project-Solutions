// Init lists
var cityList = getColumn("Daily Weather", "City");
var forecastNumberList = getColumn("Daily Weather", "Forecast Number");
var conditionImg = getColumn("Daily Weather", "Icon");
var conditionList = getColumn("Daily Weather", "Condition Description");
var condition = getColumn("Daily Weather", "Main Condition");
var tempHigh = getColumn("Daily Weather", "High Temperature");
var tempLow = getColumn("Daily Weather", "Low Temperature");

// Init filtered lists
var filteredCityList = [];
var filteredConditionList = [];
var filteredConditionImg = [];
var filteredTempHigh = [];
var filteredTempLow = [];
var filteredConditions = [];

// Loops through each list and "filters" them if they are the weather for tommorow.
for (var i = 0; i<cityList.length ;i++) {
  if (forecastNumberList[i] == 1) {
    appendItem(filteredCityList,cityList[i]);
    appendItem(filteredConditionImg,conditionImg[i]);
    appendItem(filteredConditionList,conditionList[i]);
    appendItem(filteredTempHigh,tempHigh[i]);
    appendItem(filteredTempLow,tempLow[i]);
    appendItem(filteredConditions,condition[i]);
  }
}

onEvent("forecastButton", "click", function( ) {
  // Creates a random number between 0 and the total list length.
  var tmp = randomNumber(0,filteredCityList.length-1);
  
  // Sets all the text and images of the outputs.
  setText("cityOutput",filteredCityList[tmp]);
  setText("highTempOutput",filteredTempHigh[tmp]);
  setText("lowTempOutput",filteredTempLow[tmp]);
  setText("conditionOutput",filteredConditionList[tmp]);
  setImageURL("iconOutput",filteredConditionImg[tmp]);
  
  /* EXTENSION */
  stopSound();
  if (filteredConditions[tmp] == "Rain") {
    playSound("sound://category_background/rain_thunderstorm.mp3",true);
  }
  else if (filteredConditions[tmp] == "Clear") {
    playSound("sound://category_nature/forest_woodland_ambience.mp3",true);
  }
  else if (filteredConditions[tmp] == "Snow") {
    playSound("sound://category_loops/vibrant_game_harping_down_forever_loop_1.mp3",true);
  }
});