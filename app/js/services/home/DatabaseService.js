(function(){

  'use strict';

  angular.module('alexBootstrap')

  .factory('DatabaseService',['$state', '$rootScope', function($state, $rootScope){

    var projectData = [
    {
      title:"TestLegends One — Battle the SAT",
      description:"Embark On an SAT Gaming Adventure!",
      date:"Feb 10, 2013",
      image:"app/assets/img/projects/testlegendsOne.jpg",
      link:"https://medium.com/@alexwchen/testlegends-one-battle-the-sat-6a0a803339cc"
    },
    {
      title:"Augmediated reality system based on 3D camera selfgesture sensing",
      description:"A wearable hands-free 3D gesture-sensing Digital Eye Glass system, which allows you to interact with the world with gestures.",
      date:"June 28, 2013",
      image:"app/assets/img/projects/3d_gesture_rank-1.jpg",
      link:"https://medium.com/@alexwchen/augmediated-reality-system-based-on-3d-camera-selfgesture-sensing-daa0705e25e1"
    },
    {
      title:"MemorizeMachine - Study SAT the Fun Way",
      description:"MemorizeMachine is a gamified SAT trainer that is designed to studying fun.",
      date:"Oct. 1, 2013",
      image:"app/assets/img/projects/MemorizeMachine_rank.jpg",
      link:"https://medium.com/@alexwchen/memorizemachine-study-sat-the-fun-way-968a5912daad"
    },
    {
      title:"Blind navigation with a wearable range camera and vibrotactile helmet.",
      description:"A research project use Kinect to help blind people navigate. This project is published as a paper.",
      date:"April 1, 2011",
      image:"app/assets/img/projects/kinect_vision_3.jpg",
      link:"https://medium.com/@alexwchen/blind-navigation-with-a-wearable-range-camera-and-vibrotactile-helmet-3c00d7a29c12"

    },
    {
      title:"OpenGL 3D Game Penguin vs Alien",
      description:"Penguin vs. Alien is a 3D game developed in OpenGL. The penguin is the hero of the game and it’s objective is to eliminate as much aliens as it can in a short amount of time.",
      date:"April 2, 2011",
      image:"app/assets/img/projects/computer_graphics_1.jpg",
      link:"https://medium.com/@alexwchen/opengl-3d-game-penguin-vs-alien-78e9bd4ec600"
    },
    {
      title:"Japanese Medical talking glove",
      description:"An assistive device designed to help one of my relative talk again in her life.",
      date:"Feb. 1, 2011",
      image:"app/assets/img/projects/jp_talk_2.jpg",
      link:"https://medium.com/@alexwchen/japanese-medical-talking-glove-5c8ad161ec89"
    },
    {
      title:"Real Time Brainwave Clustering & Recognition",
      description:"An research project hopping to find more information from our own brainwaves in order to do more 'mind control' on any electronic devices.",
      date:"",
      image:"app/assets/img/projects/brainwave_motivation_2.jpg",
      link:"https://medium.com/@alexwchen/real-time-brainwave-clustering-recognition-6105bb9fdf4c"
    },
    {
      title:"Web-based Cluster Engine",
      description:"A web-based cluster engine that allow user to upload any kind of unlabeled data and automatically cluster them into groups.",
      date:"April 4, 2013",
      image:"app/assets/img/projects/designproj_fea_5.jpg",
      link:"https://medium.com/@alexwchen/web-based-cluster-engine-2d9eda6c3c9a"
    },
    {
      title:"Programmable LED Skateboard",
      description:"A programmable skateboard that can shine at night. This skateboard make me a super star on the street.",
      date:"Sept. 1, 2010",
      image:"app/assets/img/projects/led_skateboard_v1_2.jpg",
      link:"https://medium.com/@alexwchen/programmable-led-skateboard-864313023d0a"
    },
    {
      title:"Web-based GRE Training Application with Statistical Algorithm",
      description:"A web based training program that utilized machine learning algorithm to help students all around the world memorize vocabulary.",
      date:"Sept. 1, 2012",
      image:"app/assets/img/projects/gre_app_motivation.jpg",
      link:"https://medium.com/@alexwchen/web-based-gre-training-application-with-statistical-algorithm-5fda95b4a56"
    },
    {
      title:"Puppy's Best Friend (Robot)",
      description:"A robot that was made to play with the dog while no one is at home. I got lots of interesting reaction from the puppy.",
      date:"April 1, 2011",
      image:"app/assets/img/projects/puppy_meijing_1.jpg",
      link:"https://medium.com/@alexwchen/puppys-best-friend-robot-6239e9ce67a5"
    },
    {
      title:"FPGA Lego Pinball Machine",
      description:"A pinball machine controlled by Altera DE2 board. User can control the flippers and ball launcher via regular keyboard. Light sensors are installed in various places to keep track of user's scores.",
      date:"April 1, 2010",
      image:"app/assets/img/projects/fpga_lego_1.jpg",
      link:"https://medium.com/@alexwchen/fpga-lego-pinball-machine-8d3b06dc4764"
    },
    {
      title:"Project Sharing Platform for Engineers and Researchers",
      description:"A personal project and publication showcase platform for researchers and engineers.",
      date:"Feb. 1, 2012",
      image:"app/assets/img/projects/web_portfolio_feature_1-1.jpg",
      link:"https://medium.com/@alexwchen/project-sharing-platform-for-engineers-and-researchers-4652d8d8bac0"
    },
    {
      title:"iPad as Chinese Speech Assistant System",
      description:"An iPad application focus on providing speech assistant to speech impaired patients",
      date:"Sept. 10, 2013",
      image:"app/assets/img/projects/grandauntTalk_rank.jpg",
      link:"https://medium.com/@alexwchen/ipad-as-chinese-speech-assistant-system-eb88304ff51b"
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
      projectData: projectData
    };
  }]);
})();
