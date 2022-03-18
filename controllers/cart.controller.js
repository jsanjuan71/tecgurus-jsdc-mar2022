

const cart = localStorage.getItem("cart");

const cartAsJson = JSON.parse(cart);

for (const producto of cartAsJson) {
    getRowLayout( [
        producto.imagen,

    ] )
}



//JSON -> onjecto javascript

/*var cart = [
    {
        sku : "CURJSDC",
        cantidad: 2,
        descuento: 1
    },
    {
        sku : "CURNODEJSDC",
        cantidad: 1,
        descuento: 0
    }
];

console.log(cart);

console.log(cart.toString());

console.log(JSON.stringify(cart)); */

//localStorage.setItem("cart",  JSON.stringify(cart) ); 


