// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let map = L.map('mapid').setView([34.0522, -118.3437], 14);

//  Add a marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     radius: 300
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// this code is for other activity
// cities.forEach(store => 
//     L.circle(store.location, {
//       fillOpacity: 0.75,
//       color: "white",
//       fillColor: "purple",
//       radius: markerSize(store.population)
//     }).bindPopup("<h1>" + store.name + "</h1> <hr> <h3>Population: " + store.population + "</h3>")
//     .addTo(myMap)
//     );
  