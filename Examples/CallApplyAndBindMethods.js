class Food
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }


}

function toString(store)
{
    console.log(`"You purchased a ${this.name} for $${this.price} at ${store}`);
}

toString.call(new Food("Papaya",7.50), "H-E-B");

toString.apply(new Food("Papaya",7.50), ["H-E-B"]);

const price = (function() {
    return this.price;
}).bind(new Food("Papaya",7.50));

console.log(price());