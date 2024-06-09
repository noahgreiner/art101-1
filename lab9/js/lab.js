// Lab 9 - Libraries & jQuery
// Author: Noah Greiner
//Date: 5/17/24

//Buttons
    // Challenge Button
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Problems Button
    $("#problems").append("<button id= 'button-problems'>Make Special</button>");

    //Results Button
    $("#results").append("<button id= 'button-results'>Make Special</button>");

    // Event Listeners toggle the special class upon button press
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    })

    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });
    