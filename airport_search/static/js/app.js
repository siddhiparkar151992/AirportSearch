var app=angular.module("airportSearch",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/",{
		redirectTo:'/makemytrip/airport-search/list'
	}).
    otherwise({
        redirectTo: '/'
    }).when('/makemytrip/airport-search/list',{
    	templateUrl:'static/views/airport-search.html',
    	controller:'airportSearchCtrl'
    });
});