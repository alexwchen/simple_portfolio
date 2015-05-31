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
  }])

  .controller('FormController', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', 'FirebaseRoot', function($scope, $rootScope, $firebaseObject, $firebaseArray, FirebaseRoot){

    var list = $firebaseArray(new Firebase(FirebaseRoot+"rawlist"));
    var obj = $firebaseObject(new Firebase(FirebaseRoot+"totalstats"));

    $scope.objflat = false;
    obj.$loaded().then(function() {
      if(list.length){
        $scope.objflat = true;
      }else{
        $scope.objflat = true;
        obj['yes_total'] = 0;
        obj['email_total'] = 0;
        obj['no_total'] = 0;
        obj['expensive_total'] = 0;
        obj['built_total'] = 0;
        obj['nodesire_total'] = 0;
      }
    });


    $scope.userDataObj = {}

    $scope.whichQuestion = 1;
    $scope.yes = function(){
      $scope.whichQuestion = 2;
      $scope.userDataObj["decesion"] = "yes";
      
      if($scope.objflat){
        obj['yes_total'] = obj['yes_total'] + 1;
        obj.$save();
      }
    }
    $scope.submit = function(){
      $scope.whichQuestion = 4;

      list.$add($scope.userDataObj);
      if($scope.objflat){
        obj['email_total'] = obj['email_total'] + 1;
        obj.$save();
      }
    }
    $scope.no = function(){
      $scope.whichQuestion = 3;
      $scope.userDataObj["decesion"] = "no";
      if($scope.objflat){
        obj['no_total'] = obj['no_total'] + 1;
        obj.$save();
      }
    }
    $scope.no_one = function(){
      $scope.whichQuestion = 4;
      $scope.userDataObj["reason"] = "Too Expensive!";

      list.$add($scope.userDataObj);
      if($scope.objflat){
        obj['expensive_total'] = obj['expensive_total'] + 1;
        obj.$save();
      }
    }
    $scope.no_two = function(){
      $scope.whichQuestion = 4;
      $scope.userDataObj["reason"] = "I want to built it myself!";

      list.$add($scope.userDataObj);
      if($scope.objflat){
        obj['built_total'] = obj['built_total'] + 1;
        obj.$save();
      }
    }
    $scope.no_three = function(){
      $scope.whichQuestion = 4;
      $scope.userDataObj["reason"] = "I don’t want a portfolio";

      list.$add($scope.userDataObj);
      if($scope.objflat){
        obj['nodesire_total']++;
        obj.$save();
      }
    }

  }]);

})();
