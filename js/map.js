const map = L.map('map').setView([38.717275, -9.142455555555555], 13);

// CREATE TILES & ATTRIBUTION
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright"OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// ADD MARKER
L.marker([38.717275, -9.142455555555555]).addTo(map);
