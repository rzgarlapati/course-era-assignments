(function(){
  'use strict';
angular.module('myFirstApp',[])
.filter('loves',LovesFilter)

.controller('myFirstController', function($scope,lovesFilter) {
  $scope.dishes = "";
  $scope.resultString = "";
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.checkIfItIsTooMuch = function(){
    var resultString="";
    if($scope.dishes.length == 0){
      resultString = "Please Enter the data first";
    }else{
      var result = $scope.dishes.split(',');
      if(result.length <= 3)
      {
        resultString = "Enjoy!";
      }else{
        resultString = "Too much!";
      }
  }
  $scope.resultString = lovesFilter(resultString);

  };

  $scope.showNoOfWatchers = function(){
    console.log("No of watchers:",$scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.onceCounter = function(){
    $scope.counter++;
  };

  $scope.$watch('onceCounter',function(newValue, oldValue){
    console.log(oldValue);
    console.log(newValue);
  });

  $scope.$watch('counter',function(newValue, oldValue){
    console.log(oldValue);
    console.log(newValue);
  });
});

function LovesFilter(){
  return function(input){
    input = input || "";
    input = input.replace("Too","Too Too");
    return input;
  }
}

})();
