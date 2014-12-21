(function(){

  'use strict';

  angular.module('alexBootstrap')

  .controller('PortfolioController', ['$scope', '$rootScope', 'ProjectService', 'PublicationService', '$window', function($scope, $rootScope, ProjectService, PublicationService, $window){

    $scope.go_to_link = function(weblink){
      $window.location.href = weblink;
    };

    // decide what data we should display
    if($rootScope.dataType==="project"){
      $scope.ProjData = ProjectService.projectData;
    }else if($rootScope.dataType==="publication"){
      $scope.ProjData = PublicationService.publicationData;
    }
  }]);
})();
