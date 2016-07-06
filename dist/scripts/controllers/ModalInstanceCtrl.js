relaxIO.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.closeModal = function () {
    $uibModalInstance.close();
  };

});