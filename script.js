var latitude = 0;
var longitude = 0;
var comment;
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: latitude, lng: longitude},
    zoom: 4
  });

  createMarker();
};

function createMarker() {
  var marker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map
  });

  var infoWindow = new google.maps.InfoWindow({
    content: comment
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  map.setCenter({lat: latitude, lng: longitude});
  map.setZoom(4);
}

function loadAPI() {
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCC2DGI2SwrpTltuotUE8sk9m4CUS8SSvs&callback=initMap";
  script.type = "text/javascript";
  script.id = "api";
  $("head").append(script);
}

$(document).ready(function() {

  $("#submit").click(function(event) {
    latitude = parseInt($("#latitude").val());
    longitude = parseInt($("#longitude").val());
    comment = $("#comment").val();

    if (isNaN(latitude) || isNaN(longitude)) {
      alert("Please enter a number");
    }
    else if ($("#api").length > 0) {
      createMarker();
    }
    else {
      loadAPI();
    }
  });

});
