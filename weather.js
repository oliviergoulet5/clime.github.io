// API
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;
getLocation()
  .then((position) => {
    weatherData = getAPIData(position);

    var cards = $("#cards-weather").children(".card");
    cards.each(setupCards);
    console.log(weatherData);

  })
  .catch((err) => {
    console.error(err.message);
  });

function getAPIData(position){

  var weatherData = $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&mode=json&APPID=" + weatherKey, function(data) {
    console.log("Success " + data);
  })
    .done(function() {
      console.log("Second? WTF IS THIS");
    });

  return weatherData;
}

// Get Date
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = {
    dayIndex: new Date().getDay(),
    dayName: days[new Date().getDay()]
};

// Cards
function setupCards(index, card){
    console.log($(card).find(".card-title").innerHTML);
    $(card).find(".card-title")[0].innerHTML = days[(today.dayIndex + index) % 7];
    if (weatherData){
      $(card).find(".card-text")[0].innerHTML = weatherData.responseJSON;
    }else{
      $(card).find(".card-text")[0].innerHTML = "Sample text";
    }

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

/*
$(document).ready(function(){
    var cards = $("#cards-weather").children(".card");

    cards.each(setupCards);
});
*/
