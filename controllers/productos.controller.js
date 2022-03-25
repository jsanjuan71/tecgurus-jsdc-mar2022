import {Producto} from '/models/producto.class.js';
import {Carrito} from '/models/carrito.class.js';

const prod = new Producto("JSDC", "Javascript desde cero")
prod.obtenerNombre();

const carrito = new Carrito();

//carrito.agregar("CURJSDC");

console.log("carrito", carrito.verItems() );

/** IMPORTANTE
 * 
 * Se redefinió como parte de window porque este script es type="module" 
 * por lo tanto no se puede mezclar el alcance local con el global, sin esto clicEnElBoton es undefined
 * al colocarlo como parte de window es alcanzable en todos los ámbitos del programa (scopes).
 */
window.clicEnElBoton = eventData => {
	console.log(eventData);
	console.log(eventData.dataset);
	console.log(eventData.dataset.id);
    carrito.agregar(eventData.dataset.id);
}

const productosContainer = document.getElementById("lista_productos");

/** IMPORTANTE
 * 
 * Se hicieron ajustes para ahora tomar al objeto producto como un objeto de la clase Producto
 * Se cambio el nombre del método dentro de onClick, para que apunte a window.clicEnElBoton
 */
function getCardLayout( title, description, quantity, action, imagePath, stock, sku ) {
    const stockDisplay = stock === 0 ? 
        `<div class="alert alert-danger" role="alert">Sin stock</div>` : 
        `<span class="badge bg-secondary">${stock}</span>`;
    const template = `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${imagePath}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p>${ moneyFormat(quantity) } ${stockDisplay}</p>
                <a onClick="window.clicEnElBoton(this)" data-stock="${stock}" data-id="${sku}"  href="javascript:()=>false;" class="btn btn-primary ${ stock === 0 ? "disabled" : "" } ">${action}</a>
                </div>
            </div>
        </div>
        `;
    return template;
}

window.productos.verTodos().map( producto => 
    productosContainer.innerHTML += getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `/assets/images/products/${producto.imagen}`, producto.getExistencia() , producto.getSKU() )
);

