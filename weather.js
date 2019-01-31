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
    $(card).find(".card-title")[0].innerHTML = "--";
    /*
    for (var i=0; i<cards.length; i++){
        var dayIndex = (today.dayIndex+i) % 7; // wraps around back to index 0 if value passes # of days
        cards[i].innerHTML = days[dayIndex];
    }*/
}

/*
// Get Date
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = {
    dayIndex: new Date().getDay(),
    dayName: days[new Date().getDay()]
}; // {day #, day name}
console.log(date);
var labels = [
    document.getElementById("label-a"),
    document.getElementById("label-b"),
    document.getElementById("label-c"),
    document.getElementById("label-d"),
    document.getElementById("label-e")
];
// Change labels
for (var i=0; i<labels.length; i++){
    var dayIndex = (today.dayIndex+i) % 7; // wraps around back to index 0 if value passes # of days
    labels[i].innerHTML = days[dayIndex];
}
*/

/*
// 5 Day Forecast
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;

$.getJSON("api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&APPID=" + weatherKey, function(data) {
    //data is the JSON string
    weatherData = $.parseJSON(data);
});*/
