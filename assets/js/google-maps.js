function initMap() {
    // Latitude and Longitude

    var myLatLng = {lat: 19.27652230649518, lng: -99.673056025033};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ' Despacho Cipla Abogados' // Title Location
    });
}