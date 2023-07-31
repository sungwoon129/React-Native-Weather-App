import { getPlaces, subscribe } from "../modules/dataService";

function renderCities(placesArray) {
  const cityListElement = document.getElementById("citiesList");

  cityListElement.innerHTML = "";

  placesArray.forEach(place => {
    const cityElement = document.createElement("div");
    cityElement.innerText = place.name;
    cityListElement.appendChild(cityElement);
  });
}

renderCities(getPlaces());
subscribe(renderCities);
