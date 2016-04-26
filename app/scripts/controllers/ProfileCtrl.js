relaxIO.controller('ProfileCtrl', ['$scope', 'DeleteMix', function ($scope, DeleteMix) {
	
	// this is the right setup - don't mess with this!
	$scope.deleteMix = function (mix) {
		
		DeleteMix.deleteMix(mix);
	};	
	
}]);