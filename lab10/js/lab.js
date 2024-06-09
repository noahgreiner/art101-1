// Lab 10 - Javascript for the Web
// Author: Noah Greiner
//Date: 5/17/24

function generateRandomText() {
    const text = "Please please please dont prove im right and please please please dont bring me to tears when I just did my makeup so nice heartbreak is one thing but my egos another I beg you dont embarass me motherfucker oh please please please - sabrina carpenter ";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
});

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');