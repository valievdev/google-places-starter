import { Loader } from 'google-maps';
document.getElementById('map').style.height = '100vh';
const options = {
    libraries: ["places"]
};
const loader = new Loader('AIzaSyB958cLfVvFD0H3wCpzpUUTHKc7xm-S9xI', options);
const google = await loader.load();
const findPlaces = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    const request = {
        query: 'Museum of Contemporary Art Australia',
        fields: ['name', 'geometry'],
    };
    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            // loop through results
            // create new class instance of new google.maps.Marker
            // position: myLatLng, -> You can get from the results[i].geometry.location
            // map, -> map is created above
            // title: "Hello World!", -> Grab this title from the current resullts[i].
            // methods to call on map like map.whatever()
            // center the map on one of the markers
            // zoom in
        }
    });
};
findPlaces();
