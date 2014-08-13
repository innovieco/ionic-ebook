angular.module('imageMotion', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('DeviceMotionCtrl', function($scope, $ionicPlatform, $cordovaDeviceMotion) {
  var xAccRange = [-9, 9],
      yAccRange = [-9, 9],
      xPerRange = [0.45, 0.55],
      yPerRange = [0.45, 0.55],
      xPerInc = (xPerRange[1] - xPerRange[0]) / 100,
      yPerInc = (yPerRange[1] - yPerRange[0]) / 100,
      xAccTotal = xAccRange[1] - xAccRange[0],
      yAccTotal = yAccRange[1] - yAccRange[0];

  $scope.acceleration = {};

  $ionicPlatform.ready(function(){
    $cordovaDeviceMotion.watchAcceleration({ frequency: 100 }).then(
    function() {},  
    function(err) {},
    function(acceleration) {
      $scope.acceleration = acceleration;
      var xAcc = (-acceleration.x.toFixed(1) + Math.abs(xAccRange[0])),
          yAcc = (acceleration.y.toFixed(1) + Math.abs(yAccRange[0]));
      var x = ((xPerInc * (xAcc / xAccTotal) * 100 + xPerRange[0]) * 100).toFixed(1),
          y = ((yPerInc * (yAcc / yAccTotal) * 100 + yPerRange[0]) * 100).toFixed(1);
      $scope.pos = x + '% ' + y + '%';
    });
  });
});