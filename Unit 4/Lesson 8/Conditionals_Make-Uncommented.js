var day;
var age;

onEvent("calculateButton", "click", function() {
  var price = 0;
  
  day = getText("dayDropdown");
  age = getNumber("ageDropdown");

  if (age <= 18) {
    price = 5;
  }
  else if (age > 18 && age < 65) {
    price = 10;
  }
  else if (age >= 65) {
    price = 5;
  }
  
  if ((day == "Saturday" || day == "Sunday") && age <= 18) {
    price = price + 5;
  }
  if (getText("discountInput") == "FREEFRIDAY" && day == "Friday") {
    price = 0;
  }
  else if (getText("discountInput") == "NICE" && day == "Wednesday" && age == 69) {
    price = 0;
  }
  
  setText("ticketOutput", "Day: " + day + "\nAge: " + age + "\nPrice: $" + price);
});