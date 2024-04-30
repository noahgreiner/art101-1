// index.js - purpose and description here
// Author: Noah Greiner
// Due: May 9th

// Constants

// Arrays/Objects

var myTransport= ['feet', 'car', 'bus', 'skateboard'];
var myMainRide = {
  make: "Toyota",
  model: "echo", 
  year: 2005,
  color: "blue", 
  currentYear: 2023,
  age: function() {
    return this.currentYear - this.age;
  }
}

// output
document.writeln("Getting around: "+ myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>" );

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
