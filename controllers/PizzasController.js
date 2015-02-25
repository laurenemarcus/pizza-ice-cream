pizzaIceCream.controller("PizzasCtrl", function PizzasCtrl($scope, FoodFactory) {
  $scope.price = 2.50;
  $scope.quantity = null;
  $scope.FoodFactory = FoodFactory;
});
