//Refer to: https://ponyfoo.com/articles/es6-promises-in-depth
// API
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;
getLocation()
  .then((position) => {
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&mode=json&units=metric&cnt=5&APPID=" + weatherKey, function(data) {
      weatherData = data;
    })
      .then(function(json) {
        var cards = $("#cards-weather").children(".card");
        weatherData = json;
        cards.each(setupCards);
      });



  })
  .catch((err) => {
    console.error(err.message);
  });





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
      console.log((today.dayIndex+index)%7);
      $(card).find(".card-text")[0].innerHTML = weatherData.list[index].main.temp + "&#176" + "C";
    }else{
      $(card).find(".card-text")[0].innerHTML = "--";
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
