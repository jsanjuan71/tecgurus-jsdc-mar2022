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
        console.log("cartAsJson", cartAsJson);

        for (const item of cartAsJson) {
            let newItem = new Item(item.sku, item.cantidad);
            this.#items.push( newItem )
        }

        
        //this.#items = cartAsJson;
    }

    agregar(sku) {
        console.log("sku", sku);
        console.log("items", this.#items );
        const item = this.#items.find( item => {
            console.log("item find",item.sku);
            return item.sku == sku;
        });
        console.log("encontrado", item);

        if( item ) {
            const agregado = item.agregar();
            if(agregado.done == true) {
                //showDialog("Producto agregado")
                console.log("producto agregado");
            } else {
                console.log("producto no agregado por ", agregado.reason);
                //showDialog("Producto no agregado porque ", agregado.reason);
            }
            
        } else {
            this.#items.push( new Item(sku) )
        }
    }

    verItems() {
        return this.#items;
    }


}

export {Carrito}