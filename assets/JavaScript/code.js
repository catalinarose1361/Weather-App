$(function () {

    // initial array of cities
    var cities = ["denver", "london", "tokyo"];
    console.log(cities);
    
    // displayCurrentConditions function re-renders the html to display the appropriate content
    function displayCityInfo() {
 

        var city = $(this).attr("data-name");
        // var city = "london";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f451c9c3a39157d09ff9b33b7929d7e8";
        console.log(queryURL);

        // creating an AJAX call for the specific city button being clicked
        $.ajax({
    
            url: queryURL,
            method: "GET"
    
        }).then(function(response) {
    
            // creating a Div to hold the city info
            var cityInfoDiv = $("#city-view");
            

            // storing the current temp data 
            var temp = response.main.temp;
            
            // creating an element to have the temp displayed
            var pOne = $("<p>").text("Current Temp: " + temp);
            
            // displaying the temp
            cityInfoDiv.append(pOne);
            
            // storing the humidity data
            var humidity = response.main.humidity;
            
            // creating an element to hold the humidity data
            var pTwo = $("<p>").text("Humidity: " + humidity);
            
            // displaying the humidity data
            cityInfoDiv.append(pTwo);
            
            // storing the wind speed data
            var windSpeed = response.wind.speed;
            
            // creating an element to hold the wind speed data
            var pThree = $("<p>").text("Wind Speed: " + windSpeed);

            // displaying the wind speed data
            cityInfoDiv.append(pThree);
            
           
        });
    };
    displayCityInfo();
    
    // function for displaying city data
    function renderButtons() {

        // deleting cities prior to adding new cities (otherwise repeat buttons)
        $("#buttons-view").empty();
        // looping through array of cities
        for (var i = 0; i < cities.length; i ++) {
            // Then dynamicaly generating buttons for each city in the array
            var a = $("<button>");
            // adding a class of city-btn to our button
            a.addClass("city-btn");
            // adding a data attribute
            a.attr("data-name", cities[i]);
            // providing the initial button text
            a.text(cities[i]);
            // adding the button to the butons - view div
            $("#buttons-view").append(a);
        }
    }
    // renderButtons();
    // this function handles events where a city button is clicked
    $("#add-city").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the text box 
        var city = $("#city-input").val().trim();
        // adding the city from the textbox to our array
        cities.push(city);
        // calling render Buttons which handles the processing of our city array
        renderButtons();
    })

    // adding a click event listener to all elements with a class of "city-btn"
    $(document).on("click", ".city-btn", displayCityInfo);
    // calling the render buttons function to display the initial buttons 
    renderButtons();
});