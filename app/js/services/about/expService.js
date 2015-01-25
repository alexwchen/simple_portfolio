(function(){

  'use strict';

  angular.module('alexBootstrap')

  .factory('expService',['$state', '$rootScope', function($state, $rootScope){

    var expData = [
    {
      title:"Undergraduate (Machine Learning) Research Assistant (Prof. Frank Rudzicz) Intelligent",
      sub:"Intelligent Assistive Technology and Systems Lab, Toronto Rehab Institution",
      time:"2013-2013",
      points:[
        "Developed a real time application that will talk to patient with Alzheimer's disease. The objective of the application is to extract audio features and facial features from the patient in order to recognize his/her emotional state with machine learning techniques.",
        "Built HTML5 video and audio recording Django application along with client text to speech chat application to extract patient audio and video feature in a browser environment.",
        "Utilized wizard of oz approach to collect conversation data and train with Partially observable Markov decision process(POMDP) model.",
      ]
    },

    {
      title:"Undergraduate (Computer Vision) Research Assistant (Prof. Steve Mann)",
      sub:"Intelligent Image Processing Laboratory, University of Toronto",
      time:"2010-2013",
      points:[
      "Innovated and built the water hammer piano which capture the acoustic characteristic of water with signal processing technology and allow users to compose music. This work was published in TEI (Tangible, Embedded and Embodied Interaction 2011) academic conference.",
      "Applied strong engineering skills to build kinect based blind navigation helmet which allows blind participants to avoid obstacle in indoor environment. This work was published in ACM Multimedia(Association for Computing Machinery 2011) academic conference.",
      "Utilizing strong research and analytics skills to build a neural network based wearable gesture recognition system. This work was published in ISTAS 2013 (IEEE International Symposium on Technology and Society) academic conference.",
      "Skill Developed: Signal Processing, Image Processing, OpenCV, Machine Learning, API Hacking, Electronics, Microprocessors(Arudino) Hacking, Kinect Hacking"
      ]
    },

    {
      title:"Junior Software Engineer (Co-op)",
      sub:"Mission Critical Support for Scientific Application, Environment Canada",
      time:"2011-2012",
      points:[
      "Optimized the Unified Radar Program by reorganizing the original code with in house library (C/C++).",
      "Improve the efficiency of Ninjo Workstation Project by profiling the processes used by the system (Java).",
      "Configure and update in house pearl script to work with Unix workstation.",
      "Developed shell script to monitor incoming lightning request (Shell Script)."
      ]
    },

    {
      title:"Electroencephalography(EEG) Thought Computing System Developer",
      sub:"Intelligent Image Processing Laboratory, University of Toronto",
      time:"2010-2011",
      points:[
      "Reverse engineered NeuroSky EEG chip to extract real time brainwave signals with micro-controller.",
      "Developed signal processing algorithm to visualized and organized raw brainwave signals into understandable graphs.",
      "Collaborated with High Dynamic Range Image Processing Team to develop welding training system.",
      "Integrated XBee and BlueSMiRF RF electronics to enable wireless control of real time computer vision quality on welding images"
      ]
    },
    {
      title:"Medical Device Parts Assembler",
      sub:"Montjade Engineering Ltd.",
      time:"2010-2010",
      points:[
      "Worked in dental abutment assembly team to ensure maximum production with high quality work.",
      "Collaborated with QA Manager on dental surgical tool assembly line.",
      ]
    },
    {
      title:"Forum Organizer/Outreach Director",
      sub:"Tetra Society of North America",
      time:"2009-2010",
      points:[
      "Organized and Presented Tetra Assistive Technology Forum which gathers more than 150 researchers, educators, organization representatives and healthcare professionals to discuss the challenges we face with assistive technology for people with disabilities.",
      "Successfully promote our event to business representatives in Assistive Technology Conference.",
      "Approach local businesses, industry representatives, student government for sponsorship support."
      ]
    },

    {
      title:"IT Director & Co-Founder",
      sub:"Web Start Up Society",
      time:"2009-2010",
      points:[
      "Designed and structured club website from scratch by using Photoshop.",
      "Embedded Wordpress platform by modifying PHP, HTML and CSS code in order to enhance team collaboration functionality, such as search engine, news board on the site"
      ]
    },
    {
      title:"University of Toronto Space Design Contest Volunteer",
      sub:"University of Toronto",
      time:"2009",
      points:[
      "Volunteered to lead and managed contestants throughout the event",
      "Motivated team leader to bring out the passion in all contestants",
      ]
    },
    {
      title:"Rotary Club 7070 District Conference Volunteer",
      sub:"University of Toronto Rotaract Club",
      time:"2008",
      points:[
      "Financially sponsored by Toronto Rotary Club as an active member to attend the conference.",
      "Organized and distributed all kinds of donations for the Salvation Army workshop.",
      ]
    }

    // {
    //   title:"",
    //   sub:"",
    //   time:"",
    //   points:[
    //   "",
    //   "",
    //   ""
    //   ]
    // },

    ];

    return {
      expData: expData
    };
  }]);
})();
