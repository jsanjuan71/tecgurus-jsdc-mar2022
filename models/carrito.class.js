import Item from '/models/item.class.js';
class Carrito{
    #items = [];

    constructor(){
        let cart = localStorage.getItem("cart");
        if(!cart) { // si el carrito no existe se crea
            cart = JSON.stringify([]);
            localStorage.setItem("cart", cart );

        }
        let cartAsJson = JSON.parse(cart); // se pasa de string a objeto json
        for (const item of cartAsJson) {
            let newItem = new Item(item.sku, item.cantidad);
            this.#items.push( newItem )
        }
    }

    agregar(sku) {
        const item = this.#items.find( item=> {
            return item.sku == sku
        } );
        if( item ) {
            const agregado = item.agregar()
            if(agregado.hasDone() == true) {
                let nuevoCarrito = this.#items.map( itemObj => itemObj.toPlainObject() );
                localStorage.setItem("cart", JSON.stringify(nuevoCarrito) );
                console.log("producto agregado");
            } else {
                console.log("producto no agregado por ", agregado.result());
            }
        } else {
            this.#items.push( new Item(sku) )
        }
    }

    verItems() {
        return this.#items;
    }
    /**
     * 
     * @returns {number} El subtotal sin impuestos de la suma del subtotal de todos los items
     */
    verSubtotal = ()=> this.#items.map(item => item.calcularSubtotal() ).reduce( (prev, cur)=> prev + cur );

}

export {Carrito}