let cart = localStorage.getItem("cart");

if(!cart) { // si el carrito no existe se crea
    cart = JSON.stringify([]);
    localStorage.setItem("cart", cart );

}

const cartAsJson = JSON.parse(cart); // se pasa de string a objeto json

console.log("carrito", cartAsJson);
console.log("productos", window.productos);

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


