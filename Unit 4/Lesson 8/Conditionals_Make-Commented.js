// Creates variables
var day;
var age;

onEvent("calculateButton", "click", function() {
  // Creates price as a temporary variable
  var price = 0;
  
  // Pulls info from dropdowns.
  day = getText("dayDropdown");
  age = getNumber("ageDropdown");

  // Checks if your a child or adult and sets default price accordingly
  if (age <= 18) {
    price = 5;
  }
  else if (age > 18 && age < 65) {
    price = 10;
  }
  else if (age >= 65) {
    price = 5;
  }
  
  // Checks if it's Saturday or Sunday and if your 18 or younger and adds $5 to the price. 
  if ((day == "Saturday" || day == "Sunday") && age <= 18) {
    price = price + 5;
  }
  // Checks for the discount code and if the day is correct. Sets price accordingly.
  if (getText("discountInput") == "FREEFRIDAY" && day == "Friday") {
    price = 0;
  }
  else if (getText("discountInput") == "NICE" && day == "Wednesday" && age == 69) {
    price = 0;
  }
  
  // Text output
  setText("ticketOutput", "Day: " + day + "\nAge: " + age + "\nPrice: $" + price);
});