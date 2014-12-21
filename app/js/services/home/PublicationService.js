(function(){

  'use strict';

  angular.module('alexBootstrap')

  .factory('PublicationService',['$state', '$rootScope', function($state, $rootScope){

    var publicationData = [
    {
      title:"Augmediated reality system based on 3D camera selfgesture sensing",
      description:"A wearable hands-free 3D gesture-sensing Digital Eye Glass system, which allows you to interact with the world with gestures.",
      date:"June 28, 2013",
      image:"app/assets/img/projects/3d_gesture_rank-1.jpg",
      link:"https://medium.com/@alexwchen/augmediated-reality-system-based-on-3d-camera-selfgesture-sensing-daa0705e25e1"
    },
    {
      title:"Blind navigation with a wearable range camera and vibrotactile helmet.",
      description:"A research project use Kinect to help blind people navigate. This project is published as a paper.",
      date:"April 1, 2011",
      image:"app/assets/img/projects/kinect_vision_3.jpg",
      link:"https://medium.com/@alexwchen/blind-navigation-with-a-wearable-range-camera-and-vibrotactile-helmet-3c00d7a29c12"

    },
    {
      title:"User-interfaces based on the water-hammer effect: water-hammer piano as an interactive percussion surface.",
      description:"A water instrument. This project is published as a paper.",
      date:"Aug. 1, 2010",
      image:"app/assets/img/projects/waterhammer_piano_2.jpg",
      link:"https://medium.com/@alexwchen/user-interfaces-based-on-the-water-hammer-effect-water-hammer-piano-as-an-interactive-percussion-9df0d00a866d"
    }
    // {
    //   title:"",
    //   description:"",
    //   date:"",
    //   image:"app/assets/img/projects/"
    // }
    ];

    return {
      publicationData: publicationData
    };
  }]);
})();
