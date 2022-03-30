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
            this.#items.push( new Item(sku) );
            let nuevoCarrito = this.#items.map( itemObj => itemObj.toPlainObject() );
            localStorage.setItem("cart", JSON.stringify(nuevoCarrito) );
            console.log("producto creado");
        }
    }

    verItems() {
        return this.#items;
    }
    /**
     * 
     * @returns {number} El subtotal sin impuestos de la suma del subtotal de todos los items
     */

    verSubtotal__2 = ()=> {
        var total = 0;
        this.#items.map(item  => {
            //console.log(item);
            let sku= item.sku;
            let prod = window.productos.obtenerPorSKU(sku);
            
            let sub = prod.precio * item.cantidad;
            console.log(sku, sub);
            total += sub;
        } )
        console.log("total", total);

        this.#items.map(item => {
            let sub = item.calcularSubtotal();
            console.log("sku", item.sku, "sub", sub);
        })

        const subtotales = this.#items.map(item => item.calcularSubtotal() );
        console.log("subtotales", subtotales);

        const sumatoria = [10, 20, 30, 50, 10].reduce((prev, next)=> prev + next );

        const gran_total = subtotales.reduce((prev, next) => prev + next);

        console.log("gran total", gran_total);

        console.log("sumatoria", sumatoria);
    }

    verSubtotal = ()=> this.#items.map(item => item.calcularSubtotal() ).reduce( (prev, next)=> prev + next );

    verSubtotalAsyn() {
        console.log("licuar los tomates");
        console.log("cocer la pasta");
        window.setTimeout( function(){
            console.log("apagarle la pasta");
            console.log("mezclar y servir");
        }, 3000 );
        
    }

    async verTotalEnUSD(){
        try {
            const request = new Request( API_DIVISAS + "&base=EUR&symbols=MXN,USD");
            const resp = await fetch(request);
            const data = await resp.json();
            const {USD, MXN} = data.rates;
            const total = this.verSubtotal() * (1 + IVA)
            const inEUR = total / MXN;
            const inUSD = inEUR * USD;
            return inUSD.toFixed(2);
        } catch (error) {
            console.log("Error verTotalEnDivisa", error);
            return false;
        }
    }

    async verSubtotalPromise() {
        return new Promise( (resolve, reject) => {
            window.setTimeout(function(){
                let randNum = obtenerAleatorio();
                console.log("randNum", randNum);
                if( randNum > 5 ) 
                    resolve( randNum );
                else
                    reject( "No obtuviste un numero mayor a 5" );
            }, 3 * 1000);
        });
    }

    async verProductosConPromo(num) {
        return new Promise( (done, notdone) => {
            window.setTimeout(function(){
                if( num  === 8 ) 
                    done( 50 );
                else
                    done( 20);
            }, 5 * 1000);
        });
    }
}

export {Carrito}