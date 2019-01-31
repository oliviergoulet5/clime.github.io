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


console.log(labels[today.dayIndex]);

//document.getElementById("label-a").innerHTML = "AAAAAAAAAAAH";
console.log(typeof today.dayIndex)
// Change labels
//var y = 0;

for (var i=0; i<labels.length; i++){
    var dayIndex = (today.dayIndex+i) % 7; // wraps around back to index 0 if value passes # of days
    labels[i].innerHTML = days[dayIndex];
    //going to break when date.dayIndex+i > 7
}

// 5 Day Forecast
var weatherKey = "11b0138050052c987cb38016eabddacb";
var weatherData;

$.getJSON("api.openweathermap.org/data/2.5/forecast?q=Toronto,us&mode=json&APPID=" + weatherKey, function(data) {
    //data is the JSON string
    weatherData = $.parseJSON(data);
});
