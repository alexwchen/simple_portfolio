(function(){

  'use strict';

  angular.module('alexBootstrap')

  .directive('homeProfile', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/profile.html',
      replace: true,
      scope: {},
      controller:function($scope, ProfileService){
        console.log(ProfileService)
        $scope.profileData = ProfileService.profileData;
      }
    };
  })

  .directive('homeNav', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/nav.html',
      replace: true,
      scope: {}
    };
  })

  .directive('homePortfolio', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/portfolio.html',
      replace: true,
      scope: {},
      controller:"PortfolioController"
    };
  })

  .directive('homeFooter', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/footer.html',
      replace: true,
      scope: {}
    };
  })



  // --------------------------
  // MARKETING SURVEY FORM
  // 1 -> firstQuestion
  // 2 -> yesQuestion
  // 3 -> noQuestion
  // 4 -> formContainer
  // --------------------------
  .directive('homeForm', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/form.html',
      replace: true,
      scope: {},
      controller:"FormController"
    };
  })

  .directive("firstQuestion", function($animate) {
    return function(scope, element, attrs) {
      scope.$watch('whichQuestion', function(newVal) {
        if (newVal===1) {
          $animate.addClass(element, "animated pulse");
        } else if(newVal===2 || newVal===3){ // jump to the next question (yes or no)
          $animate.addClass(element, "hide");
          $animate.removeClass(element, "animated pulse");
        }else{
          // pass
        }
      });
    };
  })

  .directive("noQuestion", function($animate) {
    return function(scope, element, attrs) {
      scope.$watch('whichQuestion', function(newVal) {
        if (newVal===3) {
          $animate.removeClass(element, "hide");
          $animate.addClass(element, "animated pulse");
        } else if(newVal===4){
          $animate.addClass(element, "hide");
          $animate.removeClass(element, "animated pulse");
        } else{
          // pass
        }
      });
    };
  })

  .directive("yesQuestion", function($animate) {
    return function(scope, element, attrs) {
      scope.$watch('whichQuestion', function(newVal) {
        if (newVal===2) {
          $animate.removeClass(element, "hide");
          $animate.addClass(element, "animated pulse");
        } else if(newVal===4){
          $animate.addClass(element, "hide");
          $animate.removeClass(element, "animated pulse");
        } else{
          // pass
        }
      });
    };
  })

  .directive("formContainer", function($animate) {
    return function(scope, element, attrs) {
      scope.$watch('whichQuestion', function(newVal) {
        if (newVal===4) {
          $animate.addClass(element, "hide");
        }
      });
    };
  });


})();
