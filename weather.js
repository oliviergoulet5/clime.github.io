// 5 Day Forecast
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;
$.getJSON("api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&APPID=" + weatherKey, function(data) {
    //data is the JSON string
    weatherData = $.parseJSON(data);
});
