(function(){

  'use strict';

  angular.module('alexBootstrap')

  .controller('PortfolioController', ['$scope', '$rootScope', 'DatabaseService', '$window', function($scope, $rootScope, DatabaseService, $window){

    $scope.go_to_link = function(weblink){
      $window.location.href = weblink;
    };
    console.log(DatabaseService);
    $scope.ProjData = DatabaseService.projectData;
  }]);
})();
