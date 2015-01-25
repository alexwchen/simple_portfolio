(function(){

  'use strict';

  angular.module('alexBootstrap')

  .factory('VideosService',['$state', '$rootScope', function($state, $rootScope){

    var videosData = [
    {
      title:"TestLegends One — Battle the SAT",
      link:"//www.youtube.com/embed/7DBp_4n6wW0"
    },
    {
      title:"Augmediated reality system based on 3D camera selfgesture sensing",
      link:"//www.youtube.com/embed/OEkBqSM6cE4"
    },
    {
      title:"MemorizeMachine - Study SAT the Fun Way",
      link:"//www.youtube.com/embed/DDZkq_hoS28"
    },
    {
      title:"Blind navigation with a wearable range camera and vibrotactile helmet.",
      link:"//www.youtube.com/embed/CKQNpUH_ZVo"
    },
    {
      title:"OpenGL 3D Game Penguin vs Alien",
      link:"//www.youtube.com/embed/CjCX7hevWTk"
    },
    {
      title:"Japanese Medical talking glove",
      link:"//www.youtube.com/embed/6UP1eFSPfOw"
    },
    {
      title:"Real Time Brainwave Clustering & Recognition",
      link:"//www.youtube.com/embed/8UlY7_mUlb0"
    },
    {
      title:"Web-based Cluster Engine",
      link:"//www.youtube.com/embed/9K5cv_xExac"
    },
    {
      title:"Programmable LED Skateboard",
      link:"//www.youtube.com/embed/095CPMuuJ10"
    },
    {
      title:"Web-based GRE Training Application with Statistical Algorithm",
      link:"//www.youtube.com/embed/mn4W7QP6t3Y"
    },
    {
      title:"Puppy's Best Friend (Robot)",
      link:"//www.youtube.com/embed/1mNX7OVlNtM"
    },
    {
      title:"FPGA Lego Pinball Machine",
      link:"//www.youtube.com/embed/MpPNHwXBnaE"
    },
    {
      title:"Project Sharing Platform for Engineers and Researchers",
      link:"//www.youtube.com/embed/OvqVc9Zvqe8"
    },
    {
      title:"iPad as Chinese Speech Assistant System",
      link:"//www.youtube.com/embed/oR8AGihblg4"
    },
    {
      title:"User-interfaces based on the water-hammer effect: water-hammer piano as an interactive percussion surface.",
      link:"//www.youtube.com/embed/q_HjVMthlKI"
    }
    // {
    //   title:"",
    // }
    ];

    return {
      videosData: videosData
    };
  }]);
})();
