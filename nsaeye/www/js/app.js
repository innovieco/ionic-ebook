angular.module('NSAEye', ['ionic', 'NSAEye.services', 'NSAEye.directives', 'NSAEye.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});