angular.module('NSAEye.controllers', [])

.controller('DeviceCtrl', ['$scope', '$cordovaDevice', '$ionicPlatform', function($scope, $cordovaDevice, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    $scope.deviceInfo = $cordovaDevice.getDevice();
    $scope.$digest();
  });  
}]);
