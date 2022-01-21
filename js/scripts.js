// Business Logic
function beepBoop(num) {
  let output = [];
  if (isNaN(num) || num < 0) {
    output.push("Please enter a number 0 or greater.");
  } 
  else {
    for (i = 0; i <= parseInt(num); i++) {
      if ((i === 3) || (i.toString().includes("3"))) {
        output.push("Won't you be my neighbor?");
      }  
      else if ((i === 2) || (i.toString().includes("2"))){
        output.push("Boop!");
      }
      else if ((i === 1) || (i.toString().includes("1"))) {
        output.push("Beep!");
      }
      else 
      output.push(i);
    }
  }
return output;
}

// UI Logic

$(document).ready(function(){
  $("#user-entry").submit(function(event) {
  event.preventDefault();
  let userNum = $("#num-entry").val();
  let result = beepBoop(userNum).join(", ");
  $("#results").hide();
  $("#results").text(result);
  $("#results").show();
  });
});