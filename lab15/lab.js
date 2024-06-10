/**
 * Author:  Noah Greiner
 * Created:   June 3, 2024
 * 
 * ART 101
 **/

$(document).ready(function() {
    // Event listener for button click
    $("#activate").click(function() {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the API docs)
            url: "https://yesno.wtf/api",
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // What do we do when the API call is successful
            success: function(data) {
                // Log the data to the console
                console.log(data);
                // Display the answer and image in the #output div
                $("#output").html(`
                    <p>Answer: ${data.answer}</p>
                    <img src="${data.image}" alt="Yes/No Image">
                `);
            },
            // What we do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) {
                // Log the error to the console
                console.log("Error:", textStatus, errorThrown);
                // Display an error message in the #output div
                $("#output").html(`<p>Error: ${textStatus}</p>`);
            }
        });
    });
});
