// Business Logic
function Pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
    this.price = 0;
}

Pizza.prototype.cost = function() {
    var price = 0;
    if(this.size == "small") {
        price += 650;
    } else if (this.size == "medium") {
        price += 800;
    } else {
        price += 1200;
    }

    for (var i = 0; i < this.toppings.length; i++) {
        price += 100;
    }
    if (this.crust == "crispy"){
        price += 300;
    }else if (this.crust == "stuffed") {
        price += 250;
    }else {
        price += 200;
    }
    this.price = price;
}

Pizza.prototype.toppingsList = function() {
    if (this.toppings.length > 0) {
        return this.toppings.join(", ");
    } else {
      return "None";
    }
}


// User Interface Logic
$(document).ready(function() {
    var total = 0;
    $(".total-cart").text(total);
    $("#pizza").submit(function(event) {
        event.preventDefault();
        var crust = $("#crust").val();
        var size = $("#size").val();
        var newPizza = new Pizza(size, crust);

        $("input:checkbox[name=topping]:checked").each(function() {
            var toppingChoice = $(this).val();
            newPizza.toppings.push(toppingChoice);
        });

        newPizza.cost();
        total += newPizza.price;

        $(".total-cart").text(total);
        $(".cartWell").show();;
        $("#cartHeader").show();
        $("ol#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.crust + " Pizza" + "</span></li>");

        $(".cartItem").last().click(function() {
            $("#show-pizza").show();
            $(".size").text(newPizza.size);
            $(".crust").text(newPizza.crust);
            $(".toppings").text(newPizza.toppingsList());
            $(".cost").text(newPizza.price);
        });
        $("#pizza")[0].reset();
    });

    $("button#checkout").click(function() {
        $("#show-pizza").hide();
        $(".pickup-delivery").show();
    });

    $("button#pickup").click(function() {
        $(".pickup-delivery").hide();
        $(".pickupNow").show();
    });
});