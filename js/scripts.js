// Business Logic

function beepBoop(num) {
  if (isNaN(num)) {
    return false;
  } 
  
  if (num === "1") {
    return "Beep";
  }
  else {
    return 0;
  }
}