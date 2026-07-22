var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    // College Details
    $scope.collegename = "FISAT";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;

    // Student List
    $scope.students = [
        "Sajana",
        "Hiba",
        "Surumi",
        "Amritha",
        "Ash"
    ];

    // Hide student list initially
    $scope.showstudents = false;

    // Add Student
    $scope.addstudent = function () {
        $scope.totalStudents++;
    };

    // Add Faculty
    $scope.addfaculty = function () {
        $scope.totalFaculty++;
    };

    console.log("Dashboard Controller Loaded");

});