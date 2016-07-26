angular.module("Myapp",[])
.controller("ctrl", function($scope,$http)
{
 $scope.profiles=[];
 $scope.getData=function()
 {
   $http.get("http://localhost:3000/profiles").success(function(data)
   {
     if(data[0].id==1)
     {
       $scope.profiles.push(data[0]);
     }
     console.log($scope.profiles);
   });
   }
});
