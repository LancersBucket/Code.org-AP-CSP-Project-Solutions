// Inits vars
var reminders = [];
var index = 0;

// Adds input to the list 
onEvent("addButton","click",function ( ) {
  // Checks if the input is not empty
  if (getText("reminderInput") != "") {
    // Adds input to list and wipes input box
    appendItem(reminders, getText("reminderInput"));
    setText("reminderInput","");
  }
  update();
});

onEvent("rightButton","click",function ( ) {
  // Only increments if there is stuff in the list
  if (reminders.length != 0) {
    index = index + 1;
    update();
  }
});

onEvent("leftButton","click",function ( ) {
  // Only decrements if there is stuff in the list
  if (reminders.length != 0) {
    index = index - 1;
    update();
  }
});

/* Extension */
onEvent("delete","click",function ( ) {
  // Checks if there is stuff in the list and removes the current item
  if (reminders.length > 0) {
    removeItem(reminders, index);
    update();
  }
});

// Updates the screen
function update() {
  /* Extension */
  // Loops through the list using the List Scrolling pattern
  if (index < 0) {
    index = reminders.length-1;
  }
  if (index > reminders.length-1) {
    index = 0;
  }
  
  // Increments the countOutput value
  setNumber("countOutput",index+1);
  
  // Checks if reminders[] is not undefined, and sets reminderOutput to the current element
  if (reminders[index] != undefined) {
    setText("reminderOutput",reminders[index]);
  }
  
  // Otherwise, set reminderOutput to ""
  else {
    setText("reminderOutput","");
  }
}