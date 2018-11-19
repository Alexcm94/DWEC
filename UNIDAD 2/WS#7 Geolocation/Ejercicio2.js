
// Initialize and add the map
function initMap() {
  
  if (navigator.geolocation) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(success);
  }else {
  /* geolocation IS NOT available */
  document.write("La geolocalizacion no esta disponible en su navegador.");
  }
}
function success(pos) {
  var coordenadas = {lat:pos.coords.latitude, lng:pos.coords.longitude}
  console.log('Latitud : ' + coordenadas.latitude + '</br>');
  console.log('Longitud: ' + coordenadas.longitude + '</br>');
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: coordenadas});
  var marker = new google.maps.Marker({position: coordenadas, map: map, animation: google.maps.Animation.DROP});

  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
  geocodeLatLng(geocoder, map, infowindow, coordenadas, marker);
};


function geocodeLatLng(geocoder, map, infowindow, coordenadas, marker) {
  
  geocoder.geocode({location: coordenadas}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
 }
 