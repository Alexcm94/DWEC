function initMap() {
  
  if (navigator.geolocation) {
  /* geolocation is available */
  navigator.geolocation.watchPosition(success);
  }else {
  /* geolocation IS NOT available */
  document.write("La geolocalizacion no esta disponible en su navegador.");
  }
}
function success(pos) {
  var coordenadas = {lat:pos.coords.latitude, lng:pos.coords.longitude}
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: coordenadas});
  flightPlanCoordinates.push(coordenadas);

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
};


var flightPlanCoordinates=[];





 