(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Slawek";
    $scope.sayHello = function () {
      return "Hello Coursera";
    };
  });

})();
