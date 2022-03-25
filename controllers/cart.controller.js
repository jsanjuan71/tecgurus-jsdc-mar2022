/** ACTIVIDADES SUGERIDAS
 * 1 - importar la clase Carrito y ListaProductos para poder acceder a la lista de productos y al carrito, o las que sean necesarias.
 * 2 - instanciar los objetos de las clases importadas
 * 3 - Eliminar de este modulo todo aquello que no sea su responsabilidad
 * 4 - Implementar la lógica para que funcione el carrito
 * 5 - Crear alguna nueva clase si lo consideran necesario
 * 6 - Hacer limpieza de código y hacer la documentación como se hiso en /models/response.class.js
 * 
 * RESULTADO ESPERADO
 * Se debe ver el desgloce del carrito de compras como ya se tenía antes de usar POO
 */

let cart = localStorage.getItem("cart");

if(!cart) { // si el carrito no existe se crea
    cart = JSON.stringify([]);
    localStorage.setItem("cart", cart );

}

const cartAsJson = JSON.parse(cart); // se pasa de string a objeto json

console.log("carrito", cartAsJson);
console.log("productos2", window.productos);

function doSomething(a, b) {
    return a + b;
}

function findProduct(searchedSKU) {
    
    window.productos.forEach( (producto, index)=> {
        console.log(searchedSKU," * " , producto.sku );
        if(producto.sku == searchedSKU){
            console.log("Lo encontré: ", searchedSKU);
            return producto;
        }   
            
    });
    return null;
}
//(param1, param2) => console.log(param1);
console.log("DONE");

const cartContainer = document.getElementById("products_on_cart")


for (const item of cartAsJson) {
    let prod = findProduct(item.sku);
    console.log("prod", prod)
    const newRow = getRowLayout( [
        getProductImage(prod.imagen),
        prod.nombre, 
        `$${prod.precio.toFixed(2)}`,
        item.cantidad,
        `$${(prod.precio * item.cantidad).toFixed(2)}`

    ] );

    cartContainer.innerHTML += newRow;
}

const subtotalContainer = document.getElementById("subtotal");
const impuestosContainer = document.getElementById("impuestos");
const totalContainer = document.getElementById("total");

let subtotal = 0;
for (const item of cartAsJson) {
    let prod = window.productos.find( (producto) => producto.sku == item.sku )
    //let prod = findProduct(item.sku);
    subtotal += prod.precio * item.cantidad;
}
let impuestos = subtotal * IVA;
let total = subtotal + impuestos;

subtotalContainer.innerHTML = priceFormatted(subtotal);
impuestosContainer.innerHTML = priceFormatted(impuestos);
totalContainer.innerHTML = priceFormatted(total);


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


