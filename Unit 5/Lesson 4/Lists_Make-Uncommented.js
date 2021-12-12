var reminders = [];
var index = 0;

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
  if (reminders.length != 0) {
    index = index + 1;
    update();
  }
});

onEvent("leftButton","click",function ( ) {
  if (reminders.length != 0) {
    index = index - 1;
    update();
  }
});

onEvent("delete","click",function ( ) {
  if (reminders.length > 0) {
    removeItem(reminders, index);
    update();
  }
});

function update() {
  if (index < 0) {
    index = reminders.length-1;
  }
  if (index > reminders.length-1) {
    index = 0;
  }
  
  setNumber("countOutput",index+1);
  
  if (reminders[index] != undefined) {
    setText("reminderOutput",reminders[index]);
  }
  else {
    setText("reminderOutput","");
  }
}