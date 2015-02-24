pizzaIceCream.factory("FoodFactory", function FoodFactory() {
  var factory = {};

  factory.totalPrice = function(quantity, price) {
      var cost = factory.quantity * factory.price;

      factory.quantity = null;

      // return cost;
    };
  }
  return factory;
});
