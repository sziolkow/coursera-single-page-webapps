(function () {
  'use strict';

angular.module('MealApp', [] )

.controller('MealController', function ($scope) {
  $scope.lunchMenu = "";
  $scope.nutritionAlert = "";

  $scope.calculeteNutrition = function (lunchMenuParam) {
    if (lunchMenuParam.trim()==0) {
      $scope.nutritionAlert = "Please enter data first";
      return;
    }
    var arrayOfStrings = lunchMenuParam.split(",");
    console.log(arrayOfStrings.length);
    if(arrayOfStrings.length > 3) {
      $scope.nutritionAlert = "Too much!";
    } else {
      $scope.nutritionAlert = "Enjoy";
    }
    return;
  };
});

})();
