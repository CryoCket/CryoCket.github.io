//43°28' N latitude and 142°31' E longitude
var coordinates = [43.28, 142.31];
var place1 = [43.76805, 142.47978]
var place2 = [43.059722, 141.346389]
var place3 = [43.05698, 141.35086] 
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Hokkaido Japan!</p>").addTo(map);
var marker1 = L.circle(place1,{color; "black", fillColor: "#fc0394", radius: 80}).addTo(map);
