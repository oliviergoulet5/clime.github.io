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
    $(card).attr("onclick", "changeSelection(event.target)");
    $(card).find(".card-title")[0].innerHTML = days[(today.dayIndex + index) % 7];
    $(card).find(".card-text")[0].innerHTML = weatherData.list[index].main.temp + "&#176" + "C";

    // set day-id
    for (var i=0; i<$(card).children().length; i++){
      $(card).attr('day-id', days[(today.dayIndex + index) % 7]);
      //change picture of cards here
      console.log($(card).find("img"));
      $(card).find("img").attr('src', 'res/' + weatherData.list[index].weather[0].main.toLowerCase() + ".png");
     // $(card).children().find("img").attr('src/' + weatherData.list[index].weather[0].main);

     // if (weatherData.list[index].weather[0].main)

    }

    if (index == 0){
    changeSelection($(card).children()[0]);
    }
}

function changeSelection(selection){
  var card = $(selection).parent();
  var selectedDay = card.attr('day-id');

  if ($(selection).attr('class').includes("text") || $(selection).attr('class').includes("title")){
    card = $(selection).parent().parent();
  }

  var allCards = card.parent().children();
  for (var i=0; i < allCards.length; i++){
    if ($(allCards[i]).css("background-image")){
      $(allCards[i]).css("background-image") == "";
    //  $(allCards[i]).css("background", "#fff");
      $(allCards[i]).css("background-color", "#fff");
      // why does background override?
      //can i make my own mode ex. hover, after, before
      //add a hover in here?
    }
  }

  $(card).css({
    'background-image': "-webkit-gradient(linear, left top, left bottom, from(#74b9ff), to(#81ecec))"
  })

  fillData(selectedDay, allCards);
}

function fillData(selectedDay, allCards){
  console.log(selectedDay);
  var selectedDayIndex = i;
  for (var i = 0; i < allCards.length; i++){
    if ($(allCards[i]).attr('day-id') == selectedDay){
      //sometimes undefined on text labels?
      selectedDayIndex = i;
      break;
    }
  }
  var low = weatherData.list[selectedDayIndex].main.temp_min + "&#176" + "C";
  $('#information-low').html("Low: " + low);

  var high = weatherData.list[selectedDayIndex].main.temp_max + "&#176" + "C";
  $('#information-high').html("High: " + high);

  var humidity = weatherData.list[selectedDayIndex].main.humidity + "%";
  $('#information-humidity').html("Humidity: " + humidity); // divide by 2? why is the value wrong

  var windSpeed = weatherData.list[selectedDayIndex].wind.speed + " km/h";
  $('#information-windspeed').html("Wind Speed: " + windSpeed);

  var windDirection = weatherData.list[selectedDayIndex].wind.deg + "&#176";
  $('#information-wind-direction').html("Wind Direction: " + windDirection)
}
