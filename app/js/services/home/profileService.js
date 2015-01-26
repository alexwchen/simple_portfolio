(function(){

  'use strict';

  angular.module('alexBootstrap')

  .factory('ProfileService',['$state', '$rootScope', function($state, $rootScope){

    var profileData = {
      name: "Alexander Chen",
      img_link:"app/assets/img/profile.jpg",
      school_and_program:"Computer Engineering / University of Toronto"
    };

    return {
      profileData: profileData
    };
  }]);
})();
