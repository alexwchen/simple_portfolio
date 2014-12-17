(function(){
  'use strict';

  angular.module('alexBootstrap', ["ui.router", "firebase"])
  .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/app/partials/home/skeleton.html',
        controller:function(){
        }
    });

    $urlRouterProvider.otherwise("/");
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
