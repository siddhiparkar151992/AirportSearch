angular.module("airportSearch").service("AirportService",function($q, $http, DataService){
	endPoint="airports"
		dataService= DataService
		airports = []
	
	this.getAllAirports =  function(){
		var deferred = $q.defer();
		dataService.getAllAirports().then(function(response){
			if(response){
				deferred.resolve(response);
			}
			else {
				deferred.reject;
			}
		});
		return deferred.promise;
	}

})
