// Business Logic

function beepBoop(num) {
  if (isNaN(num)) {
    return "Please enter a number";
  } 

  let numString = "";
  numString = numString.concat(num);
  console.log("numString Val:", num);
  if (numString.includes("0")) {
    console.log("Includes 0");
    return "0";
  }
  else if (numString.includes("1")) {
    console.log("Includes 1");
    return "Beep";
  }
  else if (numString.includes("2")) {
    console.log("Includes 2");
    return "Boop";
  }
  else if (numString.includes("3")) {
    console.log("Includes 3");
    return "Won't you be my neighbor";
  }
  // else {
  //   return false;
  // }
}