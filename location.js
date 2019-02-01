//google api: http://maps.googleapis.com/maps/api/js?sensor=false
/*
//Geolocation
let locationPromise = new Promise(function(resolve, reject){
  var coordinates = function(){};
  function getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(coordinates);
    }
  }


  resolve(getLocation());
});



//$.getJSON("http://maps.googleapis.com/maps/api/js?sensor=false");
var geocoder;
function initialize() {
    geocoder = new google.maps.Geocoder();
}
*/

var getLocation = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
