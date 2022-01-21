// Business Logic
function beepBoop(num) {
  if (isNaN(num)) {
    return "Please enter a number";
  } 

  let numString = "";
  numString = numString.concat(num);
  let output = [];

  for (i=0; i<=parseInt(numString); i++) {
    if (i === 0) {
      output.push("0");
    }
    else if ((i === 3) || (i.toString().includes("3"))) {
      output.push("Won't you be my neighbor");
    }  
    else if ((i === 2) || (i.toString().includes("2"))){
      output.push("Boop");
    }
    else if ((i === 1) || (i.toString().includes("1"))) {
      output.push("Beep");
    }
    else 
    output.push(i);
}
return output;
}