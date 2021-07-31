//constructor of CustomerOder//
var CustomerOder = function (pizzaSize, toppingsSelection, crustOption, numberOfPizza, deliveryOption, inputLocation) {
    this.pizzaSize = pizzaSize;
    this.toppingsSelection = toppingsSelection;
    this.crustOption = crustOption;
    this.numberOfPizza = numberOfPizza;
    this.deliveryOption = deliveryOption;
    this.inputLocation = inputLocation;
}
CustomerOder.prototype.NalaDeliousPizza = {
    name = "Nala Delious Pizza",

    pizzaSizePrice=[
        { selectPizzaSize=0 },
        { small=600 },
        { medium=800 },
        { large = 1000 },
        { extraLarge = 1200 }],

    toppingsSelectionPrize =[
        { Toppings = 0 },
        { Pepperoni = 100 },
        { GarlicButterPrawnsandChilli = 300 },
        { Supreme = 200 }],

    crustOptionPrize =[
        { crust=0 },
        { crispy = 100 },
        { stuffed = 150 },
        { glutten_free = 200 }],

}