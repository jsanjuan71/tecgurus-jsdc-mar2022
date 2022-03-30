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
const totalUsd = document.getElementById("total_usd")

cart.verItems().forEach(item => {
    let prod = window.productos.obtenerPorSKU( item.sku );
    if(prod) {
        const newRow = getRowLayout( [
            getProductImage(prod.imagen),
            prod.nombre, 
            `$${prod.precio.toFixed(2)}`,
            item.cantidad,
            `$${(prod.precio * item.cantidad).toFixed(2)}`
        ] );
        cartContainer.innerHTML += newRow;
    }
    
});

const subtotal =  cart.verSubtotal();
const impuestos = subtotal * IVA;
const total = subtotal + impuestos;
const totalOtraDivisa = (await cart.verTotalEnUSD());

subtotalContainer.innerHTML = priceFormatted( subtotal );
impuestosContainer.innerHTML = priceFormatted(impuestos);
totalContainer.innerHTML = priceFormatted(total);
totalUsd.innerHTML = `$ ${totalOtraDivisa}`;


//cart.verSubtotalAsyn();

const promesa = cart.verSubtotalPromise();

console.log("promesa", promesa);

promesa.then( (numero) => {
    console.log("logrado", numero);
});

promesa.catch( (error) => {
    console.error("fallamos", error);
});

// Promesa con then-catch (then-catch promises) 
/*cart.verSubtotalPromise()
    .then( numero=> {
        console.log("logrado", numero);
        cart.verProductosConPromo( numero )
            .then( descuento => { //callback-hell
                if( descuento == 50 ){
                    cart.obtenerProductos50()
                        .then()
                        .catch()
                } else {

                }
            });
    })
    .catch( error=> {
        console.error("fallamos", error);
    });
console.log("jfhfh"); */

// Promesa con async-await (async-await promises)

// try-catch

async function ruleta(){
    console.log("inicia la ruleta...");
    try {
        const num = await cart.verSubtotalPromise();
        const descuento = await cart.verProductosConPromo( num );
        //const prods = await cart.obtenerProductos50(descuento);

    } catch (error) {
        console.log("catch (try-catch)", error);
        console.log("Sigue participando");

    } finally {
        console.log("fin de la ruleta");
    }
}

ruleta();

/*HTTP 
https://developer.mozilla.org/es/docs/Web/HTTP/Overview

JSON
https://www.w3schools.com/js/js_json.asp

API
REST
RESTAPI
https://www.redhat.com/es/topics/api/what-is-a-rest-api

Request
https://www.javascripture.com/Request

Response
https://www.javascripture.com/Response

fetch()
https://es.javascript.info/fetch
*/

// ver el precio del dolar
// ver la informacion de un código postal
// ver información de CURP