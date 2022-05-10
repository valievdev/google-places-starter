import { Loader } from 'google-maps';
document.getElementById('map').style.height = '100vh';
const options = {
    libraries: ["places"]
};
const loader = new Loader('AIzaSyB958cLfVvFD0H3wCpzpUUTHKc7xm-S9xI', options);
const google = await loader.load();
const findPlaces = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.603230, lng: -122.330280 },
        zoom: 8,
    });
    const request = {
        keyword: document.querySelector("#search").value,
        location: { lat: 47.603230, lng: -122.330280 },
        radius: 10000
    };
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                new google.maps.Marker({
                    position: results[i].geometry.location,
                    map,
                    title: results[i].name
                });
            }
            map.setCenter(results[0].geometry.location);
            map.setZoom(12);
        }
    });
};
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    findPlaces();
});
