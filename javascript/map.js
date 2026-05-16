const map = L.map("map").setView([-2.146, -79.967], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
}).addTo(map);

L.marker([-2.146, -79.967]).addTo(map).bindPopup("ESPOL").openPopup();