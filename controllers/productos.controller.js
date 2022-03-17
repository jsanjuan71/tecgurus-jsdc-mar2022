let productos = [];

let producto = {
    "sku": "CURJSDC", 
    "nombre": "Curso Javascript desde cero",
    "precio": 229,
    "descripcion": "Inicia en el maravilloso mundo de JS",
    "imagen":"javascript.png",
    "existencia": 1
}

productos.push(producto);

productos.push({
    "sku": "CURJAVADC",
    "nombre": "Java desde cero",
    "precio": 199,
    "descripcion": "Inicia en el maravilloso mundo de Java",
    "imagen":"java.jpeg",
    "existencia": 0
});

productos.push({
    "sku": "CURCHSARPDC",
    "nombre": "Curso C#  desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"csharp.jpeg",
    "existencia": 1
});

productos.push({
    "sku": "CURAWSDC",
    "nombre": "Curso AWS desde cero",
    "precio": 149,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"aws.jpeg",
    "existencia": 1
});

productos.push({
    "sku": "CURNODEJSDC",
    "nombre": "Curso nodejs desde cero",
    "precio": 349,
    "descripcion": "Inicia en el maravilloso mundo de React native ultimo",
    "imagen":"nodejs.png",
    "existencia": 1
});

//let pila = productos.pop();
//let cola = productos.shift();

let pilaArray = productos[ productos.length - 2 ]
let colaArray = productos[ 0 ]

console.log( productos.slice(0,2) );

console.log( productos.slice(2) );

console.log( productos.slice(-1) );


console.log( productos.slice(-1).pop().descripcion );

const productosContainer = document.getElementById("lista_productos");

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
                <a onClick="clicEnElBoton(this)" data-id="${sku}"  href="javascript:()=>false;" class="btn btn-primary ${ stock === 0 ? "disabled" : "" } ">${action}</a>
                </div>
            </div>
        </div>
        `;
    return template;
    //return stringToDOM(template);
}

const potencia = num => Math.pow( getPrice(num) ,2);

const x = 10 + 2;

function sumar_(a, b) { //funcion normal
    return a+b;
}

const sumar = function(a,b) { // funcion como expresion
    return a+b;
}

const sumarConFlecha = (a,b) => a+b; // función flecha

console.log( sumar(5, 7) ); 



/*for (const producto of productos) {
    const newProduct = getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `assets/images/products/${producto.imagen}` );
    productosContainer.append(newProduct);
}*/
productos.map( producto => 
    productosContainer.innerHTML += getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `assets/images/products/${producto.imagen}`, producto.existencia, producto.sku )
);

/*productos.forEach( (producto, index) => {
    console.log(index);
    productosContainer.append(
        getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `assets/images/products/${producto.imagen}` )
    )
} )*/

