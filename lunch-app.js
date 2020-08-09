(function(){
'use strict';
angular.module('LunchCheck' , [] )
.controller('LunchCheckController' , LunchCheckController); 
	 
LunchCheckController.$inject= ['$scope'];
function LunchCheckController($scope){ 
        $scope.name=""; 
        $scope.mess="";
        $scope.checklunch = function(){ 
                   var arr =$scope.name.split(",");
                    if(arr.length<=3)
   	 {  $scope.mess= "Enjoy !"; }
    	  else if(arr.length>=3)
                  { $scope.mess= "Too Much !" ; }
  	}; 
             }

})();
