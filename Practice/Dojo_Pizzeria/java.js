var pizzaOption = {
    "crust": ["deep dish", "hand tossed"],
    "sauce" : ["marinara", "traditional"],
    "cheese": ["mozzarella", "feta"],
    "toppings": ["pepperoni", "sausage", "mushrooms", "olives", "onions"],
}

function pizzaOven(crust, sauce, cheese, toppings) {
var pizzaOption =[];
    pizzaOven.crust = crust;
    pizzaOven.sauce = sauce;
    pizzaOven.cheese = cheese;
    pizzaOven.toppings = toppings;
    return pizzaOption;
}

var pizza1 = pizzaOven(pizzaOption.crust=["deep dish"], pizzaOption.sauce=["traditional"], pizzaOption.cheese=["mozzarella"], pizzaOption.toppings=["pepperoni","sausage"]);
console.log(pizzaOption);

var pizza2 = pizzaOven(pizzaOption.crust=["hand tossed"], pizzaOption.sauce=["marinara"], pizzaOption.cheeses=["mozzarella","feta"], pizzaOption.toppings=["mushrooms","olives","onions"]);
console.log(pizzaOption);

var pizza3 = pizzaOven(pizzaOption.crust=["deep dish"], pizzaOption.sauce=["traditional"], pizzaOption.cheese=["mozzarella"], pizzaOption.toppings=["pepperoni","sausage","olives"]);
console.log(pizzaOption);

var pizza4 = pizzaOven(pizzaOption.crust=["hand tossed"], pizzaOption.sauce=["marinara"], pizzaOption.cheeses=["mozzarella","feta"], pizzaOption.toppings=["mushrooms","olives","onions","pepperoni"]);
console.log(pizzaOption);
