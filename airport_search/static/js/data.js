/**
 * 
 */
angular.module("airportSearch").factory("DataService",function($q, $http){
	endPoint="books"
	/*
	 	@param offset: page number: for example if offset is 0 records fetched will be 0 - 4 ,if offset is 1 records fetched will be 5- 9
	 	@return: promise for api 
	 	@description :this method will get the records from audit log according to the offset
	 	
	 */
	var getAllAirports =  function(){
		return $http.get(config.baseUrl+ 'airports/list?page=1',{headers: {'Content-Type': 'application/json'}});
	}
	var searchAirports =  function(){
		return $http.get(config.baseUrl+ 'airports/search',{headers: {'Content-Type': 'application/json'}});
	}
	
	return {
		"getAllAirports":getAllAirports
		
	}
	
})
