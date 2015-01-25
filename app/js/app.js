(function(){
  'use strict';

  angular.module('alexBootstrap', ["ui.router", "firebase"])
  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);


    $stateProvider
      .state('projects', {
          url: '/projects',
          templateUrl: '/app/partials/home/skeleton.html',
          controller:function($rootScope){
            $rootScope.dataType = "project";
          }
      })

      .state('contact', {
        url: '/contact',
        templateUrl: '/app/partials/contact/skeleton.html'
      })

      .state('publications', {
        url: '/publications',
        templateUrl: '/app/partials/home/skeleton.html',
        controller:function($rootScope){
          $rootScope.dataType = "publication";
        }
      });


    $urlRouterProvider.otherwise("/projects");
  });

  // ---------------------
  // setup configuration
  // ---------------------
  // .run(function($rootScope) {
  //   // status options: payment, referral
  //   $rootScope.config_status = "payment";
  //   $rootScope.call_to_action_message = "I Want One";
  //
  // })

  // .constant('FirebaseRoot', 'https://paymentlanding.firebaseio.com/');
})();
