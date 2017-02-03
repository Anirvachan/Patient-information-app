var patientModule = angular.module('patientApp', ['firebase'])
    .config(function() {
        var config = {
            apiKey: "AIzaSyAUI6ccH5m83YEUiD1oyftjTCt1H0Qy8aQ",
            authDomain: "patient-information-e39e7.firebaseapp.com",
            databaseURL: "https://patient-information-e39e7.firebaseio.com",
            storageBucket: "patient-information-e39e7.appspot.com",
            messagingSenderId: "680917528892"
        };
        firebase.initializeApp(config);
    })
    .run(function($rootScope) {

    });

patientModule.controller('formController', ['$scope', '$firebaseObject', '$rootScope', function($scope, $firebaseObject, $rootScope) {

    var ref = firebase.database().ref();
    $scope.dataModel = $firebaseObject(ref);

    $scope.firstname = '';
    $scope.lastname = '';
    $scope.phone = '';
    $scope.comment = '';
    $scope.gender = '';
    $scope.dob = '';
    $scope.age = '';
    $scope.showInvalids = false;
    $scope.submitSuccess = false;

    $scope.parser = function() {
        $scope.showInvalids = !$scope.showInvalids;
    };

    $scope.submitForm = function() {

        var unit = {};
        unit.firstname = $scope.firstname;
        unit.lastname = $scope.lastname;
        unit.phone = $scope.phone;
        unit.comment = $scope.comment;
        unit.gender = $scope.gender;
        unit.dob = $scope.dob.getTime();
        unit.age = $scope.age;

        console.log(unit);

        ref.child(unit.firstname).set(unit);

        unit = {};

        $rootScope.showListing = true;
    };


}]);

patientModule.controller('displayController', ['$scope', '$firebaseObject', '$rootScope', function($scope, $firebaseObject, $rootScope) {

    $scope.addEntry = function() {
        $rootScope.showListing = false;
    };

    var ref = firebase.database().ref();

    $scope.dataModel = $firebaseObject(ref);

    $scope.search = '';

}]);