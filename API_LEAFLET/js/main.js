// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);
// var marker2 = L.marker([50, -0.1]).addTo(map);

let villes = [];

fetch("https://geo.api.gouv.fr/communes?codePostal=58300&fields=centre,population")
.then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach((ville) => {
            villes.push(ville)
        })


        // Initialiser la carte Leaflet
        var map = L.map('map').setView([44.89, -0.2798], 13);

        // ajout des calques OpenStreetMap
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // génération des marqueurs pour les villes
        var  groupMarkers = new L.FeatureGroup();
        villes.forEach((point) =>  {
            let coords = point.centre.coordinates
            console.log(coords)

            let  lat = coords[0]
            let lng = coords[1]
            var marker = L.marker([lng, lat]).addTo(map);

            marker.bindPopup(point.nom + "<br> Population: " + point.population + " habitants").openPopup();

            groupMarkers.addLayer(marker);
            groupMarkers.addTo(map);
            
            map.fitBounds(groupMarkers.getBounds());

            
        })

    })