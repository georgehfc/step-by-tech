// GPS Coordinates ---> https://www.itilog.com/
const map = L.map('map').setView([38.717275, -9.142455555555555], 12);

// CREATE TILES & ATTRIBUTION
const attribution = '&copy <a href="https://www.openstreetmap.org/copyright"OpenStreetMap</a> OpenStreetMap contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// MARKER ICON
const fountainIcon = L.icon({
  iconUrl: 'https://res.cloudinary.com/daxtfj13g/image/upload/v1685665853/drinking_fountain_fdnbvq.svg',
  shadowUrl: 'https://res.cloudinary.com/daxtfj13g/image/upload/v1685665853/drinking_fountain_shadow_uthkre.svg',
  iconSize: [16, 43.21], // size of the icon
  shadowSize: [16, 43.21],
  iconAnchor: [0, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [-5, 4],
  popupAnchor:  [10, 0] // point from which the popup should open relative to the iconAnchor
});

// ADD MARKERS
for (const waterFountain in waterFountains) {
  const lat = waterFountains[waterFountain].latitude;
  const long = waterFountains[waterFountain].longitude;
  const location = waterFountains[waterFountain].location;
  L.marker([lat, long], {icon: fountainIcon, alt: 'Bebedouro ' + location})
    .addTo(map).bindPopup('Bebedouro ' + location);
}
