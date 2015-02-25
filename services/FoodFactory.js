pizzaIceCream.factory("FoodFactory", function FoodFactory() {
  var factory = {};

  factory.totalPrice = function(quantity, price) {
    var cost = quantity * price;

    // factory.quantity = null;

    factory.totalCost = cost
  };

  return factory;
});
