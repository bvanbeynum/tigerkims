var tigerApp = angular.module("tigerApp", ["ngRoute"]);

tigerApp.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/profile", {
			templateUrl: "/profile.html",
			controller: "profileCtl"
		})
		.when("/friends", {
			templateUrl: "/friends.html",
			controller: "friendsCtl"
		})
		.when("/friend", {
			templateUrl: "/friend.html",
			controller: "friendCtl"
		})
		.when("/school", {
			templateUrl: "/school.html",
			controller: "schoolCtl"
			})
		.when("/belts", {
			templateUrl: "/belts.html",
			controller: "beltsCtl"
		})
		.when("/belt/:index", {
			templateUrl: "/belt.html",
			controller: "beltCtl"
		})
		.when("/form/:index", {
			templateUrl: "/form.html",
			controller: "formCtl"
		})
		.when("/terms/:index", {
			templateUrl: "/terms.html",
			controller: "termsCtl"
		})
		.otherwise({
			templateUrl: "/home.html",
			controller: "homeCtl"
		});
}]);

var tigerLog = {};