// API
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;
getLocation()
  .then((position) => {
    //console.log(position);
    weatherData = getAPIData(position);
  })
  .catch((err) => {
    console.error(err.message);
  });

function getAPIData(position){
  var weatherData;
  console.log(position);
  $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&mode=json&APPID=" + weatherKey, function(data) {
      weatherData = data;
      console.log("Weather data: " + weatherData);
  });

  return weatherData;
}

/*
$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&APPID=" + weatherKey, function(data) {
    weatherData = data;
});
*/

// Get Date
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = {
    dayIndex: new Date().getDay(),
    dayName: days[new Date().getDay()]
};

$(document).ready(function(){
    var cards = $("#cards-weather").children(".card");

    cards.each(setupCards);
});

// Cards
function setupCards(index, card){
    console.log($(card).find(".card-title").innerHTML);
    $(card).find(".card-title")[0].innerHTML = days[(today.dayIndex + index) % 7];
    $(card).find(".card-text")[0].innerHTML = "Sample text";

    if(index == 0){
      //  $(card).css("background-color", "#89C4F4");
        $(card).css({
          background: "-webkit-gradient(linear, left top, left bottom, from(#74b9ff), to(#81ecec))"
        });
        $(card).css("width", "13rem");
    }else{
        $(card).css("width", "12rem");
    }

}

console.log(weatherData);
