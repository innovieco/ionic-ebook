angular.module('instaclone.services', [])

.factory('imageData', function() {
  var width, height;

  return {
    set: function(args) {
      width = args.width || 0;
      height = args.height || 0;
    },
    get: function() {
      return {
        width: width,
        height: height
      }
    }
  }
});
