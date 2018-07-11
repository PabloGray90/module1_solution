(function (){
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)

function MsgController($scope) {
    $scope.numOfItems = 0;
    $scope.message = "";
    $scope.items = "";
    $scope.itemsArray = [""];
    $scope.color = "";

    $scope.isTooMuch = function (){
      if ($scope.items != ""){
        $scope.itemsArray = $scope.items.split(",");
        $scope.numOfItems = $scope.itemsArray.length;
      } else {
          $scope.numOfItems = 0;
      }
      $scope.message = $scope.setMessage($scope.numOfItems);
    };

    $scope.setMessage = function (numOfItems){
      if (numOfItems == 0) {
        return "Please enter data first";
      } else if (numOfItems <= 3){
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    };

    $scope.showMessage = function (){
      var msg = $scope.setMessage($scope.numOfItems);
      return msg;
    }
    console.log("The number of items is: " + $scope.numOfItems)
    }

})();
