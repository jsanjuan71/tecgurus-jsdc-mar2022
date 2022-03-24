class Item {
    sku = undefined;
    cantidad = 1;

    constructor(skuProducto) {
        if(typeof skuProducto === 'undefined')
            console.error("Se requiere un SKU para crear un item para el carrito.")
        this.sku = skuProducto;
    }

    agregar() {
        const prod = obtenerPorSKU(this.sku);
        if(this.cantidad < prod.existencia){
            this.cantidad++;
            return {
                done: true
            };
        }
        else return {
            done: false,
            reason: "Ya no hay suficiente existencia";
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