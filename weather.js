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

    for (var i=0; i<$(card).children().length; i++){
      console.log($(card).children()[i].setAttribute('day-id', days[(today.dayIndex + index) % 7]));
    }

    if(index == 0){
        $(card).css({
          'background-image': "-webkit-gradient(linear, left top, left bottom, from(#74b9ff), to(#81ecec))"
        });
        $(card).css("width", "13rem");
    }else{
        $(card).css("width", "12rem");
    }

}

function changeSelection(selection){
  var card = $(selection).parent();
  if ($(selection).attr('class').includes("text") || $(selection).attr('class').includes("title")){
    card = $(selection).parent().parent();
  }
//UNDEFINED BACKGROUND-IMAGE?
  var allCards = card.parent().children();
  for (var i=0; i < allCards.length; i++){
    console.log(allCards[i]);
    console.log($(allCards[i]).css("background-image"));

    if ($(allCards[i]).css("background-image")){
      $(allCards[i]).css("background-image") == null;
      $(allCards[i]).css("background", "#fff");
    }
  }

  $(card).css({
    'background-image': "-webkit-gradient(linear, left top, left bottom, from(#74b9ff), to(#81ecec))"
  })
}

/*
//flaw: i'm ignoring clicks on title/paragraph. I should redirect this
function changeSelection(selection){
  if (!($(selection).is("h5") || $(selection).is("p"))){
    var selectedDay = selection.getAttribute('day-id');

    var defaultColor = "#fff";
    var childrenElements = $(selection).parent().parent().children();
    for (var i=0; i< childrenElements.length; i++){
        $(childrenElements[i]).css({
          background: "#fff"
        })
    }
    $(selection).parent().css({
      background: "-webkit-gradient(linear, left top, left bottom, from(#74b9ff), to(#81ecec))"
    });
    console.log(selectedDay);
  }
}
*/
