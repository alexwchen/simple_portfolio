(function(){

  'use strict';

  angular.module('alexBootstrap')

  .directive('homeProfile', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/profile.html',
      replace: true,
      scope: {}
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
      controller:"PortfolioController",
      link:function(){
        // $('body').flowtype();
      }
    };
  })
  .directive('homeFooter', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/partials/home/footer.html',
      replace: true,
      scope: {}
    };
  });



})();
