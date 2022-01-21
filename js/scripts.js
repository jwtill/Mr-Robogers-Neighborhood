// Business Logic

function beepBoop(num) {
  let numString = "0";

  if (isNaN(num)) {
    return "Please enter a number";
  } 

  if (num === "0") {
    numString.concat(num);
    console.log(numString);
  }
  else {
    return false;
  }
}