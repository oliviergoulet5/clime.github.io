function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position){
  console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

// 5 Day Forecast
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;
$.getJSON("api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&APPID=" + weatherKey, function(data) {
    //data is the JSON string
    weatherData = $.parseJSON(data);
});

// find out today's day - label the headers correctly

//remove https if doesn't work
