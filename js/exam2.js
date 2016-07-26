var app2=angular.module("app2",[]);
app2.controller('ctrl1',function($scope){
$scope.randumnum1=Math.floor((Math.random() * 10) + 1);
$scope.randumnum2=Math.floor((Math.random() * 10) + 1);
});

app2.controller('badctrl',function($scope){
   var badFeelings =["Disregarded","unimportant","rejected","powerless"];
   $scope.bad=badFeelings[Math.floor((Math.random() * 4))];
 });

 app2.controller('goodctrl',function($scope){
    var goodFeelings =["Pleasure","Awesome","Lovable","Innerpeace"];
    $scope.good=goodFeelings[Math.floor((Math.random() * 4))];
  });
