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