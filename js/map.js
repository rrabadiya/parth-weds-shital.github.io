$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&region=in&key=AIzaSyAWQG4Hz2GnvMEs3WKAETWIGXp4urcsUNo&async=2&callback=MapApiLoaded", function () {});
function MapApiLoaded() {
//$(document).ready(function() {
    /** Google Map **/
    function init_map() {
        var locations = [
			//<p>Near Shivnagar Gate</p> <p>Sudama Chowk</p> Krishna Park, Mota Varachha, Surat, Gujarat 395006
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">SMC Community Hall Mota Varachha</h4></div><div class="col-md-12">  <p>Near Shivnagar Gate,</p> <p>Sudama Chowk,</p><p>Krishna Park, </p><p>Mota Varachha, Surat</p><p>Gujarat 395006</p>  </div>  </div>', 21.237805, 72.879791, 1],
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">SMC Community Hall Mota Varachha</h4></div><div class="col-md-12">  <p>Near Shivnagar Gate,</p> <p>Sudama Chowk,</p><p>Sudama Chowk, Krishna Park, </p><p>Mota Varachha, Surat</p><p>Gujarat 395006</p>  </div>  </div>', 21.563211, 71.523141, 1]
        ];
        var myOptions = {
            scrollwheel: false,
            zoom: 18,
            center: new google.maps.LatLng(21.563211, 71.523141),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: 'img/map_pin.png'
            });

        }
        infowindow = new google.maps.InfoWindow({
            content: ''
        });

    }
    google.maps.event.addDomListener(window, 'load', init_map);
//});
}
