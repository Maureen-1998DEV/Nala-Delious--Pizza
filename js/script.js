//constructor of CustomerOder//
var CustomerOder = function (pizzaSize, toppingsSelection, crustOption, numberOfPizza, deliveryOption, inputLocation) {
    this.pizzaSize = pizzaSize;
    this.toppingsSelection = toppingsSelection;
    this.crustOption = crustOption;
    this.numberOfPizza = numberOfPizza;
    this.deliveryOption = deliveryOption;
    this.inputLocation = inputLocation;
}
//pizza size,toppings,crust prize//
CustomerOder.prototype.NalaDeliousPizza = {
    name = "Nala Delious Pizza",

    pizzaSizePrice=[
        { defaultStatus=0},
        { small=600 },
        { medium=800 },
        { large = 1000 },
        { extraLarge = 1200 }],

    toppingsSelectionPrize =[
        { defaultStatus = 0 },
        { Pepperoni = 100 },
        { GarlicButterPrawnsandChilli = 300 },
        { Supreme = 200 }],

    crustOptionPrize =[
        { defaultStatus=0 },
        { crispy = 100 },
        { stuffed = 150 },
        { glutten_free = 200 }],

}
$(document).ready(function(){
    $("#orderButton").click(function(event){
        event.preventDefault()


        var pizzaSize=$("#pizzaSize").val();
        var toppingsSelection=$("#toppingsSelection").val();
        var crustOption=$("#crustOption").val();
        var numberOfPizza=$("#numberOfPizza").val();
        var deliveryOption=$("#deliveryOption").val();
        var inputLocation=$("#inputLocation").val();

    (".formOutput").show()
    var CustomerOder= new CustomerOder(pizzaSize,toppingsSelection,crustOption,numberOfPizza,deliveryOption,inputLocation)
    })
})