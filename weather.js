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

function setupCards(index, card){
    console.log($(card).find(".card-title").innerHTML);
    $(card).find(".card-title")[0].innerHTML = days[(today.dayIndex + index) % 7];
    $(card).find(".card-text")[0].innerHTML = "Sample text";

    if(index == 0){
        $(card).css("background-color", "#89C4F4");
        $(card).css("width", "13rem");
    }else{
        $(card).css("width", "12rem");
    }

}

// 5 Day Forecast
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;

$.getJSON("api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&APPID=" + weatherKey, function(data) {
    //data is the JSON string
    weatherData = $.parseJSON(data);
});
