let latitude=22.7868542, longitude=88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoicHJldHplbDEiLCJhIjoiY2xham5xdGZmMGU1NjNucXF6eHF1d2hqbiJ9.vSKVJiuwpTDG8LnPY0MBFQ'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 18
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableAHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)