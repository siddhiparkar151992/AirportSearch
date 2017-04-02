angular.module('airportSearch').controller('airportSearchCtrl',['$scope','AirportService','$location',function($scope, AirportService, $location){
	var init = function(){
		$scope.typeArr= ['All','Civil Ports','Military Ports','Sea Plane base','Harbours']
		$scope.sortTypeArr = ['Elevation','Direct Flight','Rating']
		$scope.airportData = {}
		//console.log($location.search('page'))
		AirportService.getAllAirports().then(function(res){
			$scope.airports = res.data.airports
		})
	}
	init()
}])