var app4=angular.module("app4",[]);
app4.controller('eventCtrl',function($scope){
  $scope.dayTimeButton=true;
  $scope.capitals=[
    {"city":"Montegomery",
    "state":"Alabama"},
    {"city":"Juneau",
    "state":"Alaska"},
    {"city":"Pheonix",
    "state":"Arizona"},
    {"city":"Little Rock",
    "state":"Arkansas"},
  ];
});
