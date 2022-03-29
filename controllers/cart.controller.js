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
import {Carrito} from '/models/carrito.class.js';

const cart = new Carrito();

const cartContainer = document.getElementById("products_on_cart");
const subtotalContainer = document.getElementById("subtotal");
const impuestosContainer = document.getElementById("impuestos");
const totalContainer = document.getElementById("total");

cart.verItems().forEach(item => {
    let prod = window.productos.obtenerPorSKU( item.sku );
    const newRow = getRowLayout( [
        getProductImage(prod.imagen),
        prod.nombre, 
        `$${prod.precio.toFixed(2)}`,
        item.cantidad,
        `$${(prod.precio * item.cantidad).toFixed(2)}`
    ] );
    cartContainer.innerHTML += newRow;
});

const subtotal =  cart.verSubtotal();
const impuestos = subtotal * IVA;
const total = subtotal + impuestos;

subtotalContainer.innerHTML = priceFormatted( subtotal );
impuestosContainer.innerHTML = priceFormatted(impuestos);
totalContainer.innerHTML = priceFormatted(total);

