// Business Logic

function beepBoop(num) {
  let numArray = [];

  if (isNaN(num)) {
    return "Please enter a number";
  } 

  if (num === "1") {
    numArray.push(num);
    console.log(numArray);
  }
  else {
    return false;
  }
}