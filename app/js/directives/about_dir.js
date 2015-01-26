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


        // Toogle Points
        $scope.techFlag = [];
        for (var i=0;i<$scope.expData.techData.length;i++){
          $scope.techFlag[i]=0;
        }

        $scope.commFlag = [];
        for (var i=0;i<$scope.expData.commData.length;i++){
          $scope.commFlag[i]=0;
        }

        $scope.techToggleDetail = function(idx){
          $scope.techFlag[idx] = 1 - $scope.techFlag[idx];
        }
        $scope.commToggleDetail = function(idx){
          $scope.commFlag[idx] = 1 - $scope.commFlag[idx];
        }
      }
    };
  });




})();
