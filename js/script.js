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
    name: "Nala_Delious_Pizza",

    deliveryPrice: 200,

    pizzaSizePrize: [
        { default: 0 },
        { smallPizza: 600 },
        { mediumPizza: 800 },
        { largePizza: 1000 }],

    toppingsSelectionPrize: [
        { default: 0 },
        { Pepperoni: 100 },
        { Garlic_Butter__Prawns_Chilli: 300 },
        { Supreme: 200 }],

    crustOptionPrize: [
        { default: 0 },
        { crispy: 100 },
        { Stuffed: 150 },
        { Glutten_free: 200 }]



}
$(document).ready(function () {
    $("#orderButton").click(function (event) {
        event.preventDefault()


        var pizzaSize = $("#pizzaSize").val();
        var toppingsSelection = $("#toppingsSelection").val();
        var crustOption = $("#crustOption").val();
        var numberOfPizza = Number($("#numberOfPizza").val());
        var deliveryOption = $("input[name='Destination']").val();
        var inputLocation = $("#inputLocation").val();

        $(".orderCalculation").show()
        var customerOder = new CustomerOder(pizzaSize, toppingsSelection, crustOption, numberOfPizza, deliveryOption, inputLocation)
        //Small Pizza with Pepperroni and Crispy//
        

        if (pizzaSize == "smallPizza" && toppingsSelection == "pepperoni" && crustOption == "crispy" && deliveryOption == "on"){
            var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza +
                customerOrder.Nala_Delious_Pizza.crustOptionPrize[1].crispy +
                customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[1].Pepperoni +
                customerOrder.Nala_Delious_Pizza.deliveryPrice) * numberOfPizza;

        var orderResults = `
        <h2>Order Summary</h2>
        <p>Number of Pizza: ${numberOfPizza}</p>
        <p>Pizza size: SmallPizza - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
        <p>Crust: Crispy - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[1].crispy} </p>
        <p>Toppings: Pepperoni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrize[1].Pepperoni}</p>
        <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
        <hr>
        <p>Total: - KSh. ${totalPrice}</p>
            
    `;
    $(".orderCalculation").html(orderResults);
    alert("you will be delivered" + inputLocation)
            }
        //small pizza with pepperoni and stuffed//
        if (pizzaSize == "smallPizza" && toppingsSelection == "pepperoni" && crustOption == "Stuffed" && deliveryOption == "on"){
            var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza +
                customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].Stuffed +
                customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[1].Pepperoni +
                customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;

        var orderResults = `
       <h2>Order Summary</h2>
       <p>Number of orders: ${numberOfPizza}</p>
      <p>Pizza size: SmallPrize - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
      <p>Crust: Stuffed - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].Stuffed} </p>
     <p>Toppings: Pepperoni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrize[1].Pepperoni}</p>
      <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrize}</p>
      <hr>
      <p>Total: - KSh. ${totalPrice}</p>
      `;
      $(".orderCalculation").html(orderResults);
      prompt("you will be delivered" + inputLocation)
       }
       //small pizza with perpperoni and Glutten-free//
       if (pizzaSize == "smallPizza" && toppingsSelection == "pepperoni" && crustOption == "Glutten_free" && deliveryOption == "on"){

            var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza +
                customerOrder.Nala_Delious_Pizza.crustOptionPrize[3].Glutten_free +
                customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[1].Pepperoni +
                customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;

        var orderResults = `
        <h2>Order Summary</h2>
        <p>Number of orders: ${numberOfPizza}</p>
        <p>Pizza size: Small - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
        <p>Crust: Glutten_free - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[3].Glutten_free} </p>
        <p>Toppings: Pepperoni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[1].Pepperoni}</p>
        <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
        <hr>
        <p>Total: - KSh. ${totalPrice}</p>
         `;
         $(".orderCalculation").html(orderResults);
         prompt("you will be delivered" + inputLocation) 
         }
     //pizza Grlic-butter_prawn//
    //pizza with Garlic_butter_prawns_chilli and crispy// 
    if (pizzaSize == "smallPizza" && toppingsSelection == "Garlic_butter_prawns_chilli" && crustOption == "crispy" && deliveryOption == "on"){
    var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza +
        customerOrder.Nala_Delious_Pizza.crustOptionPrize[1].crispy +
        customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[2].Garlic_butter_prawns_chilli +
        customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;

    var orderResults = `
    <h2>Order Summary</h2>
      <p>Number of orders: ${pizzaTotal}</p>
   <p>Pizza size: SmallPizza - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
   <p>Crust: crispy. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[1].crispy} </p>
   <p>Toppings:  - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[2].Garlic_butter_prawns_chilli}</p>
  <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
   <hr>
   <p>Total: - KSh. ${totalPrice}</p>
   `;
   $(".orderCalculation").html(orderResults);
   prompt("you will be delivered" + inputLocation)
    }
   //small pizza with Garlic_butter_prawns_chilliand stuffed//
    if (pizzaSize == "smallPizza" && toppingsSelection == "Garlic_butter_prawns_chilli" && crustOption == "Stuffed" && deliveryOption == "on"){
    var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza+
        customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].Stuffed +
        customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[2].Garlic_butter_prawns_chilli +
        customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;

    var orderResults = `
<h2>Order Summary</h2>
<p>Number of orders: ${pizzaTotal}</p>
<p>Pizza size: SmallPizza - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
<p>Crust: Stuffed - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].Stuffed} </p>
<p>Toppings:  - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[2].Garlic_butter_prawns_chilli}</p>
<p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
<hr>
<p>Total: - KSh. ${totalPrice}</p>
     `;
     $(".orderCalculation").html(orderResults);
     prompt("you will be delivered" + inputLocation)
    }
       //small pizza with Garlic_butter_prawns_chilli and Glutten-free//
    if (pizzaSize == "smallPizza" && toppingsSelection == "Garlic_butter_prawns_chilli" && crustOption == "Glutten_free" && deliveryOption == "on"){
    var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza +
        customerOrder.Nala_Delious_Pizza.crustOptionPrize[3].Glutten_free +
        customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[2].Garlic_butter_prawns_chilli +
        customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;

     var orderResults = `
<h2>Order Summary</h2>
<p>Number of orders: ${pizzaTotal}</p>
<p>Pizza size: SmallPizza - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
<p>Crust: Glutten_free - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[3].Glutten_free} </p>
<p>Toppings: Pepper0ni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[2].Garlic_butter_prawns_chilli}</p>
<p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
<hr>
<p>Total: - KSh. ${totalPrice}</p>
    `;
    $(".orderCalculation").html(orderResults);
    prompt("you will be delivered" + inputLocation)
    } 
    //pizza Supreme//
    if (pizzaSize == "smallPizza" && toppingsSelection == "Supreme" && crustOption == "crispy" && deliveryOption == "on"){
        var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza +
            customerOrder.Nala_Delious_Pizza.crustOptionPrize[1].crispy +
            customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[3].Supreme +
            customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;
    
    var orderResults = `
    <h2>Order Summary</h2>
    <p>Number of orders: ${pizzaTotal}</p>
    <p>Pizza size: SmallPizza - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
    <p>Crust: Garlic_butter_prawns_chilli - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].crispy} </p>
    <p>Toppings: Pepper0ni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[3].supreme}</p>
    <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
    <hr>
    <p>Total: - KSh. ${totalPrice}</p>
    `;
    $(".orderCalculation").html(orderResults);
    prompt("you will be delivered" + inputLocation)
        }
    //small pizza with Garlic_butter_prawns_chilliand stuffed//
    if (pizzaSize == "smallPrize" && toppingsSelection == "Supreme" &&crustOption=="stuffed"&& deliveryOption == "on"){
        var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].small +
            customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].Stuffed +
            customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[3].Supreme +
            customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;
    
    var orderResults = `
    <h2>Order Summary</h2>
    <p>Number of orders: ${pizzaTotal}</p>
    <p>Pizza size: SmallPrize - KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
    <p>Crust: Stuffed - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[2].Stuffed} </p>
    <p>Toppings: Pepper0ni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[2].Garlic_butter_prawns_chilli}</p>
    <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
    <hr>
    <p>Total: - KSh. ${totalPrice}</p>
    `;
    $(".orderCalculation").html(orderResults);
    prompt("you will be delivered" + inputLocation)
    }
    //small pizza with Garlic_butter_prawns_chilli and Glutten-free//
    if (pizzaSize == "smallPizza" && toppingsSelection == "Supreme" && crustOption == "Glutten_free" && deliveryOption == "on"){
        var totalPrice = (CustomerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].small +
            customerOrder.Nala_Delious_Pizza.crustOptionPrize[3].Glutten_free +
            customerOrder.Nala_Delious_Pizza.toppingsSelectionPrize[3].Supreme +
            customerOrder.Nala_Delious_Pizza.deliveryPrice) * pizzaTotal;
    
    var orderResults = `
    <h2>Order Summary</h2>
    <p>Number of orders: ${pizzaTotal}</p>
    <p>Pizza size: Small Pizza- KSh. ${customerOrder.Nala_Delious_Pizza.pizzaSizePrize[1].smallPizza} </p>
    <p>Crust: Glutten_free - KSh. ${customerOrder.Nala_Delious_Pizza.crustOptionPrize[3].Glutten_free} </p>
    <p>Toppings: Pepper0ni - KSh. ${customerOrder.Nala_Delious_Pizza.toppingSelectionPrice[3].Supreme}</p>
    <p>Delivery: - KSh. ${customerOrder.Nala_Delious_Pizza.deliveryPrice}</p>
    <hr>
    <p>Total: - KSh. ${totalPrice}</p>
    `;
    $(".orderCalculation").html(orderResults);
    alert("you will be delivered" + inputLocation)
        }
//medium pizza//





   
     })
})