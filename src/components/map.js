let googleMap;

import { addPlace, getPlaces, subscribe } from "../modules/dataService.js";

function init() {
  googleMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 3
  });

  googleMap.markerList = [];
  googleMap.addListener("click", addMarker);
}

function addMarker(event) {
  addPlace(event.latLng);
  renderMarkers();
}

function renderMarkers(placesArray) {
  googleMap.markerList.forEach(item => item.setMap(null));
  googleMap.markerList = [];

  placesArray.forEach(place => {
    const marker = new google.maps.Marker({
      position: place.position,
      map: googleMap
    });

    googleMap.markerList.push(marker);
  });
}

init();
renderMarkers(getPlaces());

subscribe(renderMarkers);
