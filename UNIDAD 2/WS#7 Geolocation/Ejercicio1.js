document.write("<h2> Apartado a) </h2>");
if (navigator.geolocation) {
  /* geolocation is available */
  document.write("La geolocalizacion esta disponible.");
} else {
  /* geolocation IS NOT available */
  document.write("La geolocalizacion no esta disponible.");
}
document.write("</br>");
document.write("<h2> Apartado b) </h2>");


var options = {
//Ponerle alta precision:
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Tu posicion actual es:');
  console.log('Latitud : ' + crd.latitude + '</br>');
  console.log('Longitud: ' + crd.longitude + '</br>');
  console.log('Mas o menos ' + crd.accuracy + ' metros.</br>');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

//navigator.geolocation.getCurrentPosition(success, error, options);


navigator.geolocation.watchPosition(success, error, options);