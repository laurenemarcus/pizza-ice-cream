pizzaIceCream.controller("IceCreamCtrl", function IceCreamCtrl($scope, FoodFactory) {
  $scope.price = 1;
  $scope.quantity = null;
  $scope.FoodFactory = FoodFactory;
});
