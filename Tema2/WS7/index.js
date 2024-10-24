/*
let initialPosition = null;  // Variable para almacenar la primera posición
let currentPosition = null;  // Variable para almacenar la posición actual

function muestraPosicionInicial(pos) {
  initialPosition = pos.coords; // Guardar la posición inicial
  console.log("Posición inicial - Latitud: " + initialPosition.latitude + ", Longitud: " + initialPosition.longitude);
}

function muestraPosicionActual(pos) {
  currentPosition = pos.coords; // Actualizar la posición actual
  console.log("Posición actualizada - Latitud: " + currentPosition.latitude + ", Longitud: " + currentPosition.longitude);

  if (initialPosition) {
    // Calcular la distancia entre la posición inicial y la posición actual
    let distancia = getDistanceBetweenPoints(
      initialPosition.latitude, initialPosition.longitude,
      currentPosition.latitude, currentPosition.longitude,
      'meters'
    );
    console.log("Distancia entre la posición inicial y la actual: " + distancia + " metros");
  }
}

function errores(error) {
  // Manejador de errores
  if (error.code === error.PERMISSION_DENIED) {
    console.error("Permiso de geolocalización denegado por el usuario.");
  } else if (error.code === error.POSITION_UNAVAILABLE) {
    console.error("Información de ubicación no disponible.");
  } else if (error.code === error.TIMEOUT) {
    console.error("La solicitud de geolocalización ha expirado.");
  } else { 
    console.error("Error desconocido de geolocalización: " + error.message);
  }
}

if (!navigator.geolocation) {
  console.log("No se puede acceder a la localización");
} else {
  // Obtener la posición inicial al cargar la página
  navigator.geolocation.getCurrentPosition(muestraPosicionInicial, errores);

  // Actualizar la posición cada vez que cambie
  navigator.geolocation.watchPosition(muestraPosicionActual, errores);
}

function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'meters') {
  let theta = longitude1 - longitude2;
  let distance = 60 * 1.1515 * (180 / Math.PI) * Math.acos(
    Math.sin(latitude1 * (Math.PI / 180)) * Math.sin(latitude2 * (Math.PI / 180)) +
    Math.cos(latitude1 * (Math.PI / 180)) * Math.cos(latitude2 * (Math.PI / 180)) * Math.cos(theta * (Math.PI / 180))
  );

  // Convertir la distancia de millas a metros
  if (unit == 'meters') {
    return Math.round(distance * 1.609344 * 1000, 2); // Multiplica por 1000 para convertir a metros
  }
}
*/

// Ejercicio 3
let longitude, latitude, map, marker, route = [], line;

function actualizarMapa(pos) {
  [longitude, latitude] = [pos.coords.longitude, pos.coords.latitude];

  if (!map) {
    map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
    marker = L.marker([latitude, longitude]).addTo(map);
    line = L.polyline(route, { color: 'blue' }).addTo(map);
  }

  marker.setLatLng([latitude, longitude]);
  route.push([latitude, longitude]);
  // Actualizar frecuencia de las cordenadass
  line.setLatLngs(route);
  map.setView([latitude, longitude], map.getZoom());
}

navigator.geolocation.watchPosition(actualizarMapa, 
  error => console.error("Error al obtener la ubicación: ", error), 
  { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
);

navigator.geolocation.getCurrentPosition(actualizarMapa);
