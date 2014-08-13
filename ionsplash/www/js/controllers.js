angular.module('starter.controllers', [])

.controller('LoadingCtrl', function($scope, $timeout) {
  $timeout(function() {
    $scope.splashAnimate = true;
  }, 4500);

  $timeout(function() {
    $scope.splashComplete = true;
  }, 5000);
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
