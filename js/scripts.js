// Business Logic

function beepBoop(num) {
  if (isNaN(num)) {
    return "Please enter a number";
  } 

  let numString = "";
  numString = numString.concat(num);
  console.log("numString Value:", num);
  let output = [];

  for (i=0; i<=parseInt(numString); i++) {
    console.log("value of i:", i);

    if (i === 0) {
      console.log("Includes 0");
      output.push("0");
    }
    else if (i === 3) {
      console.log("Includes 3");
      output.push("Won't you be my neighbor");
    }  
    else if (i === 2) {
      console.log("Includes 2");
      output.push("Boop");
    }
    else if (i === 1) {
      console.log("Includes 1");
      output.push("Beep");
    }
    else 
    output.push(i);
}
return output;
}