// Business Logic

function beepBoop(num) {
  if (isNaN(num)) {
    return "Please enter a number";
  } 

  let numString = "";
  numString = numString.concat(num);
  console.log("numString Val:", num);
  if (numString.includes("0")) {
    console.log("Got to first conditional");
    return "0";
  }
  else if (numString.includes("1")) {
    console.log("Got to second conditional");
    return "Beep";
  }
  // else {
  //   return false;
  // }
}