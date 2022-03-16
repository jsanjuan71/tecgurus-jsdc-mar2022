let productos = [];

let producto = {
    "nombre": "Curso Javascript desde cero",
    "precio": 229,
    "descripcion": "Inicia en el maravilloso mundo de JS",
    "imagen":"javascript.png",
    "existencia": 1
}

productos.push(producto);

productos.push({
    "nombre": "Java desde cero",
    "precio": 199,
    "descripcion": "Inicia en el maravilloso mundo de Java",
    "imagen":"java.jpeg",
    "existencia": 0
});

productos.push({
    "nombre": "Curso C#  desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"csharp.jpeg",
    "existencia": 1
});

productos.push({
    "nombre": "Curso AWS native desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"aws.jpeg",
    "existencia": 1
});

productos.push({
    "nombre": "Curso nodejs native desde cero",
    "precio": 300,
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

function getCardLayout( title, description, quantity, action, imagePath ) {
    const template = `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${imagePath}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p>${ moneyFormat(quantity) }</p>
                <a href="#" class="btn btn-primary">${action}</a>
                </div>
            </div>
        </div>
        `;
    return template;
    //return stringToDOM(template);
}

const potencia = num => Math.pow( getPrice(num) ,2);

const x = 10 + 2;


const sumar = function(a,b) { // funcion como expresion
    return a-b;
}

const sumarConFlecha = (a,b) => a+b;

console.log( sumar(5, 7) ); 



/*for (const producto of productos) {
    const newProduct = getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `assets/images/products/${producto.imagen}` );
    productosContainer.append(newProduct);
}*/
productos.map( producto => 
    productosContainer.innerHTML += getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `assets/images/products/${producto.imagen}` )
);

/*productos.forEach( (producto, index) => {
    console.log(index);
    productosContainer.append(
        getCardLayout( producto.nombre, producto.descripcion, producto.precio, "Add", `assets/images/products/${producto.imagen}` )
    )
} )*/

