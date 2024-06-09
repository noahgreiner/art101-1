// Lab 7 - Functions
// Author: Noah Greiner
//Date: 5/2/24

// sort UserName - a function that takes user input and sorts the letters of their name
function sortUserName() 
    let userName = window.prompt("Please enter your username:");
    console.log("userName =", userName);
// splits the string into an array
    let nameArray = userName.split('');
    console.log("nameArray =", nameArraySort);
// joins array back to a string
    let nameArraySort = nameArray.sort();
    console.log("nameArraySort")


//Output:
document.writeln("Here's your new name: " + nameSort(), "</br>");