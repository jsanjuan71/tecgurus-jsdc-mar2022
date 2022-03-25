
class Item {
    sku = undefined;
    cantidad = undefined;

    constructor(skuProducto, cant = 1) {
        if(typeof skuProducto === 'undefined')
            console.error("Se requiere un SKU para crear un item para el carrito.")
        this.sku = skuProducto;
        this.cantidad = cant;
    }

    agregar() {
        console.log("WINDOW PRODUCTOS", window.productos);
        const prod = window.productos.obtenerPorSKU(this.sku);
        console.log("item agregar", prod);
        if(this.cantidad < prod.getExistencia() ){
            this.cantidad++;
            return {
                done: true
            };
        }
        else return {
            done: false,
            reason: "Ya no hay suficiente existencia"
        };
    }

    quitar(){
        if(this.cantidad > 0) 
            this.cantidad--;  
    }

    calcularSubtotal() {
        const prod = obtenerPorSKU(this.sku);

        return this.cantidad * prod.precio;
    }
}

export default Item