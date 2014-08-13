angular.module('instaclone.directives', ['instaclone.services'])

.directive("sourceImg", ['imageData', function (imageData) {
  return {
    restrict: 'AEC',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.model, function(value) {
        if ((value != undefined) && (value != '')) {
          var img = new Image();
          
          img.src = value;
          img.onload = function() {
            imageData.set({
              width: this.width,
              height: this.height
            });
          }

          element.empty();
          element.append(img);
        }
      });
    }
  }
}])

.directive("filterImg", ['$timeout', 'imageData', function ($timeout, imageData) {
  return {
    restrict: 'AEC',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.model, function(value) {
        if ((value != undefined) && (value != '')) {
          var img = new Image();
          var originImgData = imageData.get();

          img.src = value;
          img.width = originImgData.width;
          img.height = originImgData.height;

          scope.status.filtering++;
          $timeout(function() {
            ApplyEffects[attrs.effect](img, 'jpeg');
            scope.status.isFiltered = true;
            scope.status.filtering--;
          }, 1);

          element.empty();
          element.append(img);
        }
      });
    }
  }
}]);