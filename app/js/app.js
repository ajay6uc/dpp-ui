// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ionic', 'ngResource', 'angularFileUpload', 'ngCordova'])
.constant('REST_URL','')
.run(function($ionicPlatform, $cordovaDialogs) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //alert("keyboad plugin ");
    }
    if(window.cordova && window.cordova.plugins.Telephonenumber) {
      //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //alert("telephonenumber plugin " + device.uuid);
    }
     if(window.cordova && window.cordova.plugins.Notification) {
      //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      alert("Notification plugin ");
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required

      StatusBar.styleDefault();
    }
    //alert("Starting app ");
	var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
      //alert("telephonenumber  " + telephoneNumber);
        telephoneNumber.get(function(result) {
        //alert("result is = " + result);
          starter.phoneNumber = result;
        }, function(error) {
        //alert("error = " + error.code);
          starter.error.phoneNumber = result;
        });
    
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
      templateUrl: "templates/tabs.html",
      controller: function($scope, appService, $state) {
        $scope.appService = appService;
         if($state.current.name !=="tab.default"){
            $scope.appService.app.showTabs = 'tabs-item-hide';
            //alert('Coming here ' + $scope.appService.app.showTabs );
          }else{
            $scope.appService.app.showTabs = '';
          }
       //$scope.appService.app.showTopics = false; 
        //$scope.appService.goBack = function(){
          //alert('Coming here in click' );
         ///$state.go('tab.topics');
        
        $scope.appService.app.title = 'Home';
      }
    })

    // Each tab has its own nav history stack:
    .state('tab.default', {
      url: '/default',
      views: {
        'tab-default': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'uploadQuestionController'
        }
      }
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dpps.html',
          controller: 'dppController'
        }
      }
    })
     .state('tab.topics', {
      url: '/topics',
      views: {
        'tab-topics': {
          templateUrl: 'templates/topicList.html',
          controller: 'topicController'
        }
      }
    })
    .state('tab.concepts', {
        url: '/concepts',
        views: {
        'tab-topics': {
          templateUrl: 'templates/concepts.html',
          controller: 'conceptController'
        }
      }
        
      
    })
    .state('tab.conceptView', {
        url: '/conceptView/{conceptId}',
         views: {
          'tab-topics': {
          templateUrl: 'templates/conceptView.html',
          controller: 'conceptController'
        }
      }
    })
    .state('tab.practice', {
        url: '/practice/{conceptId}',
         views: {
          'tab-topics': {
          templateUrl: 'templates/practice.html',
          controller: 'conceptController'
        }
      }
    })
     .state('question', {
      url: "/question",
      abstract: true,
          templateUrl: 'templates/question.html'
    })
    .state('question.practice', {
        url: '/practice',
        templateUrl: 'templates/practice.html',
        controller: 'questionController'
      }
    )
    .state('question.test', {
        url: '/test',
        templateUrl: 'templates/test.html',
        controller: 'questionController'
      }
    )
    .state('tab.view', {
      url: '/view/{dppId}',
       views: {
        'tab-dpps': {
          templateUrl: 'templates/dpp-details.html',
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
    .state('test', {
      url: "/test",
      abstract: true,
      templateUrl: 'templates/testViewTabs.html',
      controller: function($ionicNavBarDelegate, $scope, appService, $state) {
        $scope.hasBackButton =true;
        $ionicNavBarDelegate.showBackButton(true);
       
     }

    })
    .state('test.default', {
      url: '/testDefault/{conceptId}',
      views: {
        'test-default': {
          templateUrl: 'templates/test-default.html',
           controller: 'testController'
        }
      }
        
      })
    .state('test.view', {
      url: '/testView/{testId}',
      views: {
        'test-view': {
          templateUrl: 'templates/test-view.html',
           controller: 'testController'
        }
      }
        
      }).state('test.progress', {
      url: '/testProgress',
      views: {
        'test-progress': {
          templateUrl: 'templates/test-progress.html',
           controller: 'testController'
        }
      }
        
      })
    .state('dpp', {
      url: "/dpp",
      abstract: true,
      
          templateUrl: 'templates/dppViewTabs.html'
    })
    .state('dpp.view', {
      url: '/view/{dppId}',
      views: {
        'dpp-view': {
          templateUrl: 'templates/dpp-details.html',
           controller: 'dppController'
        }
      }
        
      })
    .state('dpp.solution', {
      url: '/solution/{dppId}',
       views: {
        'dpp-paper-solution': {
          templateUrl: 'templates/dpp-view-solution.html',
           controller: 'dppController'
        }
      }
      
    })

    ;

    // Each tab has its own nav history stack:

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/default');

});

