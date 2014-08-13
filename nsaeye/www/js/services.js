angular.module('NSAEye.services', [])

.factory('MyHouse', function() {
  var myLatLng, map;

  var addMyMarker = function(results) {
    if (results.length) {
      var result = results[0];
      
      map.addMarker({
        'position': myLatLng,
        'draggable': false,
        'title': 'The NSA found you at ' + result.extra.lines[0] + ' ' + result.extra.lines[1]
      }, function(marker) {
        marker.showInfoWindow();
      });
    } else {
      alert("Not found");
    }
  }

  var setMyMap = function(map) {
    map.moveCamera({
      'target': myLatLng,
      'zoom': 15
    });

    map.geocode({
      'position': myLatLng
    }, addMyMarker);
  }

  return {
    init: function(div, location) {
      map = plugin.google.maps.Map.getMap(div);
      myLatLng = new plugin.google.maps.LatLng(location.coords.latitude, location.coords.longitude);
      map.addEventListener(plugin.google.maps.event.MAP_READY, setMyMap);
      return;
    }
  }
});

