(function(){

  'use strict';

  angular.module('alexBootstrap')

  .directive('contactStatement', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/contact/statement.html',
      replace: true,
      scope: {},
      controller:function($scope){
        $scope.pitch = "I love to create electronic gadgets to enrich human computer interaction and \
                        combine the power of machine learning to make smart, automated, understanding \
                        devices such as self-driving car robot, talking gloves, vision helmet and so on.";

        $scope.twitter = "https://twitter.com/alexwchen";
        $scope.twitter_handle = "alexwchen";
        $scope.facebook = "https://www.facebook.com/alexwchenpro";
        $scope.github = "https://github.com/alexwchen";
        $scope.github_handle = "alexwchen";
        $scope.linkedin = "https://www.linkedin.com/in/alexwchenpro";
        $scope.email = "alexwchenpro@gmail.com";
      }
    };
  })
  .directive('contactVideos', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/contact/videos.html',
      replace: true,
      scope: {},
      controller:function($scope,VideosService){
        $scope.recentVideos = VideosService.videosData;
        $scope.getIframeSrc = function(src) {
          return 'https:' + src;
        }
      }
    };
  });



})();
