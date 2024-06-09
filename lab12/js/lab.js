// Lab 12 - Conditionals
// Author: Noah Greiner
// Date: 5/23/24

// Take the name input then sort based on string length
function sortingHat(str) {
    const length = str.length;
    const mod = length % 4;

    if (mod == 0) {
        return "Gryffindor";
    } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
        return "Slytherin";
    } else if (mod == 3) {
        return "Hufflepuff";
    }
}

// Event Listener
$(document).ready(function() {
    $("#button").click(function() {
        // Sets str to user input
        const name = $("input").val();

        // Sets str to sortingHat's output
        const house = sortingHat(name);

        // Prints the user's assigned house
        $("#output").html('<div class="text"><p>' + "You belong with: " + house + '</p></div>');
    });
});
