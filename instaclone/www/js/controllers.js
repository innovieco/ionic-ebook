angular.module('instaclone.controllers', [])

.controller('CameraCtrl', ["$scope" , "$cordovaCamera", "$ionicSlideBoxDelegate", function($scope, $cordovaCamera, $ionicSlideBoxDelegate) {
  $scope.status = {
    isFiltered: false,
    filtering: 0
  };

  $scope.getPhoto = function() {
    $ionicSlideBoxDelegate.next();

    $cordovaCamera.getPicture({
      quality: 75,
      targetWidth: 480,
      targetHeight: 640,
      correctOrientation: true,
      saveToPhotoAlbum: false
    }).then(function(imageURI) {
      $scope.lastPhoto = imageURI;
    }, function(err) {
      alert('Unable to take picture');
    });
  };

  $scope.convertPhoto = function() {
    $scope.readyPhoto = $scope.lastPhoto;
  };

}]);