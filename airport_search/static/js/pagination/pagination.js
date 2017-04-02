/*
 * @directive : paginate
 * @description: this directive will add pagination for the given content by calculating result from toal and current page list to be shown
 * @scope currentPageList: 0
 * @scope align :left, right
 * @scope count :total count of data 
 * @scope paginationListLimit :how many records to be shown per page ?
 * */

app.directive('paginate', function(){
	return {
		restrict:'EA',
		scope: {
			currentPageList:'=currentPageList',
			align:'=align',
			count:'=count',
			paginationListLimit:'=paginationListLimit'
		},
        replace:'true',
        templateUrl:'/static/app/templates/pagination.html',
		 link: function(scope, element, attrs){
			 
		 	 element.css('float',scope.align)
		 },
		 controller:"PaginationCtrl"
	}
}).controller('PaginationCtrl',['$scope','$rootScope',function($scope,$rootScope){
	$scope.currentPageList =0;
	
	/*	@param index:index of the page number clicked
		@description :change the current page click and show next set of pagination list
   */
	$scope.showNext= function(index){
		$scope.currentPageList = index+1;
		$scope.pageList[index].current= false;
		$scope.pageList[index+1].current= true;
	}
	
	/*	@param index:index of the page number clicked
		@description :change the current page click and show previous set of pagination list
	*/
	$scope.showPrev= function(index){
		$scope.currentPageList = index-1
		$scope.pageList[index].current= false;
		$scope.pageList[index-1].current= true;
	}
	
	/*	@param offset page number clicked
		@description :change the history log based on page click
	*/
	$scope.setCurrentPage= function(offset){
		$rootScope.$broadcast("refreshHistory",{"offset": offset-1});
	}
	
	/*	@param res:data containing page count and offset 
		@description :this will initiate a pagimation list based on the count recieved from server 
	*/
	var initiatePagination = function(res){
		if($scope.count > 0){
			$scope.pageList =[];
			count  = $scope.count;
			numberOfPages  =  Math.ceil(count/config.logPageLimit);
			pageLimitList =Math.ceil(numberOfPages/$scope.paginationListLimit);
			for(j=0;j<pageLimitList;j++){
				var stackStart=0, stackEnd=0;
				stackStart =j*$scope.paginationListLimit +1;
				$scope.totalPages = []
				if(numberOfPages >=$scope.paginationListLimit){
					stackEnd = stackStart+$scope.paginationListLimit -1;
					numberOfPages = numberOfPages- $scope.paginationListLimit;
				}
				else {
					stackEnd = stackEnd = stackStart+numberOfPages-1
				}
				for(i=stackStart;i<=stackEnd;i++){
					$scope.totalPages.push(i);
				}
				$scope.pageList.push({"pages":$scope.totalPages});
			}
			$scope.pageList[$scope.currentPageList].current =true;
		}
		
		
	}
	
	$scope.$watch('count',function(newVal,oldVal){
		if(newVal!=oldVal){
			initiatePagination();
		}
	})
	initiatePagination();
}]);