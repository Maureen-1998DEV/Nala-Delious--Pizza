//constructor of CustomerOder//
var CustomerOder = function (pizzaSize, toppingsSelection, crustOption, numberOfPizza) {
    this.pizzaSize = pizzaSize;
    this.toppingsSelection = toppingsSelection;
    this.crustOption = crustOption;
    this.numberOfPizza = numberOfPizza;
    // this.deliveryOption = deliveryOption;
    // this.inputLocation = inputLocation;
}
//pizza size,toppings,crust prize//
// CustomerOder.prototype.nalaDeliousPizza =function(){

//     return this.pizzaSize+" ," +this.toppingsSelection+","+ this.crustOption+" ,"+this.numberOfPizza
    

// }
 function PizzaSelection(pizzaSizePrize,crustOptionPrize,toppingsSelectionPrize, numberOfPizzaPrize,deliveryOption){
    this.pizzaSizePrize = pizzaSizePrize;
    this.toppingsSelectionPrize = toppingsSelectionPrize;
    this.crustOptionPrize = crustOptionPrize;
    this.numberOfPizzaPrize = numberOfPizzaPrize;
    this.deliveryOption = deliveryOption;

 }

 PizzaSelection.prototype.customerOrderBill=function(){
     return( this.numberOfPizzaPrize*(this.pizzaSizePrize+this.toppingsSelectionPrize+this.crustOptionPrize))+this.deliveryOption
 }
$(document).ready(function(){
    $("form#myForm").submit(function(event) {
        event.preventDefault()


        var pizzaSize = $("#pizzaSize").val();
        var toppingsSelection = $("#toppingsSelection").val();
        var crustOption = $("#crustOption").val();
        var numberOfPizza =parseInt($("#numberOfPizza").val());
        // var deliveryOption = $("input[name='Destination']").val();
        // var inputLocation = $("#inputLocation").val();

        // $(".orderCalculation").show()
         var customerOder = new CustomerOder(pizzaSize, toppingsSelection, crustOption, numberOfPizza);
        // $("#orderButton").click(function(){
        //      alert(customerOder.nalaDeliousPizza())
        // });

        var myPizzaSizePrize = pizzaCharges();
        function pizzaCharges(){
            if(pizzaSize=="smallPizza"){
                var smallPizza = 600;
                return smallPizza;
            }else if(pizzaSize=="mediumPizza"){
                var mediumPizza = 800;
                return mediumPizza;
            }else if(pizzaSize=="largePizza"){
                var largePizza =1000;
                return largePizza;
            }

        };
        var myToppingsSelectionPrize = toppingsSelectionCharges();
        function toppingsSelectionCharges(){
            if(toppingsSelection=="Pepperoni"){
                var Pepperoni = 100;
                return Pepperoni;
            }else if(toppingsSelection=="Garlic_butter_prawns_chilli"){
                var Garlic_butter_prawns_chilli= 300;
                return Garlic_butter_prawns_chilli;
            }else if(toppingsSelection =="Supreme"){
                var Supreme =300;
                return Supreme;
            }
        };
          var myCrustOptionPrize = crustOptionCharges();
          function crustOptionCharges(){
            if(crustOption=="Crispy"){
                var Crispy = 100;
                return Crispy;
            }else if(crustOption=="Stuffed"){
                var Stuffed= 300;
                return Stuffed;
            }else if(crustOption=="Glutten_free"){
                var Glutten_free =200;
                return Glutten_free;
            }


        }; 
        function radioChecked(){
            var myRadio=document.getElementById("radiosPizza").checked;
            if(myRadio){
                
                var delivery=200;
                return delivery;
            }else if (!myRadio) {
                var notDelivered=0;
                return notDelivered;

                
            };

                
            };
            var pizzaCheck=radioChecked();

        
       var  newPizzaSelection= new PizzaSelection(myPizzaSizePrize,myToppingsSelectionPrize,myCrustOptionPrize,numberOfPizza,pizzaCheck);
         $("#orderButton").click(function(){
           $(".orderCalculation").toggle();
         $("#pizzaShow").text(pizzaSize);
         $("#pizzaCrustShow").text(crustOption);
         $("#pizzaToppingsShow").text(toppingsSelection);
          $(".pizzaNumber").text(numberOfPizza);
           $("#totalChargesShow").text(newPizzaSelection.customerOrderBill());
    
         });
        
    });



 });


