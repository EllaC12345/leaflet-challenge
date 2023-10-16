// Creating the map object
let myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13

  });
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


  // Use this link to get the GeoJSON data.
let link = "https://bootcampspot.instructure.com/courses/3517/assignments/54049?module_item_id=961984"

// Our style object
let mapStyle = {
    color: "white",
    fillColor: "pink",
    fillOpacity: 0.5,
    weight: 1.5
  };
  
// Getting our GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
      // Passing in our style object
      style: mapStyle
    }).addTo(myMap);
  });