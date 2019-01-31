//google api: http://maps.googleapis.com/maps/api/js?sensor=false

//Geolocation
var coordinates = function(){};
function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(coordinates);
  }
}

//$.getJSON("http://maps.googleapis.com/maps/api/js?sensor=false");
var geocoder;
function initialize() {
    geocoder = new google.maps.Geocoder();
}
