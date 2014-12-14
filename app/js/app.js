// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ionic', 'starter.controllers', 'ngResource', 'angularFileUpload'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'uploadQuestionController'
        }
      }
    })

    .state('tab.dpps', {
      url: '/dpps',
      views: {
        'tab-dpps': {
          templateUrl: 'templates/tab-dpps.html',
          controller: 'dppController'
        }
      }
    })
    .state('tab.view', {
      url: '/view/{dppId}',
       views: {
        'tab-dpps': {
          templateUrl: 'templates/dpp-details.html',
           controller: 'dppController'
        }
      }
      
    })
    .state('tab.viewSolution', {
      url: '/viewSolution/{dppId}',
       views: {
        'tab-dpps': {
          templateUrl: 'templates/dpp-view-solution.html',
           controller: 'dppController'
        }
      }
      
    })
    .state('tab.uploadSolution', {
      url: '/uploadSolution/{dppId}',
       views: {
        'tab-dpps': {
          templateUrl: 'templates/dpp-upload-solution.html',
           controller: 'uploadQuestionController'
        }
      }
      
    })
    .state('tab.dpps.view', {
      url: '/view/{dppId}',
      views: {
        'tab-dpps': {
          templateUrl: 'templates/dpp-details.html'
        }
      }
    })
    .state('tab.dpps.view.upload', {
      url: '/upload',
      templateUrl: 'templates/dpp-details.html',
       controller: 'dppController'
      
    })
    ;
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

