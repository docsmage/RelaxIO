relaxIO.controller('ProfileCtrl', ['$scope', 'DeleteMix', function ($scope, DeleteMix) {
	
	$scope.deleteMix = function (mix) {
		
		DeleteMix.deleteMix(mix);
	};	
	
}]);