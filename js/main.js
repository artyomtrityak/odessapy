function initialize() {
    var myLatlng = new google.maps.LatLng(46.466038,30.695489);
    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Гагаринское плато 5'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function(){
    $('nav a').click(function () {
        var elementHref = $(this).attr('href');
        var destination = $(elementHref).offset().top - 60;
        $('html, body').animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});