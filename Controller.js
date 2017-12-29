var app = angular.module('myApp', ['ngAnimate']);

//Creating controller funtion as myCtrl
app.controller('myCtrl', function($scope, $location, $http, $timeout, $interval, hexafy) {
    
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.youData = "Before click";
    $scope.myUrl = $location.absUrl(); //Location service
    $scope.timeoutText = "This text will be changed after 5 seconds";    
    $scope.theTime = new Date().toLocaleTimeString();    
    $scope.cutomService = hexafy.myFunc(255);
    $scope.counts = [255, 251, 200];
    $scope.name_list = [
        {name:'Jani',country:'Norway'},
        {name:'Hegei',country:'Sweden'},
        {name:'riad',country:'Denmark'},
        {name:'sujon',country:'Dhaka'},
        {name:'pavel',country:'Basundhara'},
        {name:'vaia',country:'Dhaka'},
        {name:'bashar vai',country:'Rangamati'},
        {name:'khokn vai',country:'Dhaka'}
    ];

    //User of timeout service
    $timeout(function () {
      $scope.timeoutText = "I have changed automatically";
    }, 5000);

    //Custom ordering function  
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
    
    //on click change variable function    
    $scope.changeName = function() {
        $scope.youData = "after click";
    }

    //basic variable intial data assigning from function
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }

    //service http respons example 
    $http.get("message.html").then(function(response) {
      $scope.myWelcome = response.data;
    });

    //Interval example
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

});


//Creating a custom service
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }

});   

//Creating a custom service withing a custom filter
app.filter('myFilter',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };

}]);

