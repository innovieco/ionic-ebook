angular.module('NSAEye.directives', [])

.directive("ionMap", ['MyHouse', '$cordovaGeolocation', '$ionicPlatform', function (MyHouse, $cordovaGeolocation, $ionicPlatform) {
  return {
    restrict: 'AEC',
    link: function(scope, element, attrs) {
      $ionicPlatform.ready(function() {
        var div = document.createElement('div');
        div.style.width = attrs.width;
        div.style.height = attrs.height;

        element.append(div);

        $cordovaGeolocation.getCurrentPosition().then(function(location) {
          MyHouse.init(div, location);
          $scope.$digest();
        });
      });
    }
  }
}]);