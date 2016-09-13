// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('episode', {
    url: 'episode.html',
    templateUrl: 'episode.html',
    controller: 'episodePageController'
  })
})

.service('dataService', function($http) {
  this.episodes = [
      {id:1, name:"Space Pilot 3000", image:{medium:"http://tvmazecdn.com/uploads/images/medium_landscape/57/143950.jpg"}, airdate:"1999-03-28"},
      {id:2, name:"The Series Has Landed", image:{medium:"http://tvmazecdn.com/uploads/images/medium_landscape/57/143951.jpg"}, airdate:"1999-04-04"},
      {id:3, name:"I, Roommate", image:{medium:"http://tvmazecdn.com/uploads/images/medium_landscape/57/143952.jpg"}, airdate:"1999-04-06"},
      {id:4, name:"Love's Labors Lost in Space", image:{medium:"http://tvmazecdn.com/uploads/images/medium_landscape/57/143953.jpg"}, premiered:"1999-04-13"}
    ];
  $http.get('http://localhost:3000/')
    .success(function(response) {
      //this.episodes = response;
  });
})

.controller('frontPageController', function($scope, $state, dataService) {
  $scope.episodes = dataService.episodes;
})

.controller('episodePageController', function($scope, dataService, $stateParams) {
  var id = /*$starteParams.id*/1;
  $scope.episode = dataService.episodes.filter(function(object){return object.id==id})[0];
})
