(function(){

  'use strict';

  angular.module('alexBootstrap')

  .directive('aboutEducation', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/about/education.html',
      replace: true,
      scope: {}
    };
  })

  .directive('aboutExperience', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/about/experience.html',
      replace: true,
      scope: {},
      controller:function($scope, expService){
        $scope.expData = expService.expData;

        // init arr
        $scope.displayFlag = [];
        for (var i=0;i<$scope.expData.length;i++){
          $scope.displayFlag[i]=0;
        }

        $scope.toggleDetail = function(idx){
          $scope.displayFlag[idx] = 1 - $scope.displayFlag[idx];
        }
      }
    };
  });




})();
