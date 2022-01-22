// Business Logic
function beepBoop(num) {
  let output = [];
  if (isNaN(num) || num < 0 || num === "") {
    output.push("Please enter a number that is 0 or greater.");
  } 
  else {
    for (let i = 0; i <= parseInt(num); i++) {
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
    const userNum = $("#num-entry").val();
    const result = beepBoop(userNum).join(", ");
    $("#results").text(result);
    $("#results").show();
    $("#reverse").show();
  });
  $("#reverse").click(function(event){
    const userNum = $("#num-entry").val();
    const result = beepBoop(userNum).reverse().join(", ");
    $("#results").text(result);
    $("#results").show();
    $("#reverse").show();
    $("#reverse").hide();
  });
});
