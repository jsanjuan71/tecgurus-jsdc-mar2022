import {Carrito} from '/models/carrito.class.js';
class CarritoController{
    constructor(){
        this.init();
    }
    async init(){
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
    }
}

export default CarritoController;

