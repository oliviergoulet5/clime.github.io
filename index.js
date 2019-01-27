var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;

jquery.getJSON("api.openweathermap.org/data/2.5/forecast/daily?q={toronto},{can}&cnt={7}", function(data) {
    //data is the JSON string
    weatherData = data;
    console.log(weatherData);
});
