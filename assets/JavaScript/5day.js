$(function () {

    function display5DayInfo() {

        var city = "London"
        var key = f451c9c3a39157d09ff9b33b7929d7e8
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?appid=" + key + "&q=" + city + "&count=10";
        
        $.ajax({
            url: queryURL2, 
            dataType: "json",
            type: "GET",
            data: {
              q: city,
              appid: key,
              units: "metric",
              cnt: "10"
            },
            success: function(data) {
              console.log('Received data:', data) // For testing
              var wf = "";
              wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
              $.each(data.list, function(index, val) {
                wf += "<p>" // Opening paragraph tag
                wf += "<b>Day " + index + "</b>: " // Day
                wf += val.main.temp + "&degC" // Temperature
                wf += "<span> | " + val.weather[0].description + "</span>"; // Description
                wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
                wf += "</p>" // Closing paragraph tag
              });
              $("#fiveday").append(wf);
            }
          });
})