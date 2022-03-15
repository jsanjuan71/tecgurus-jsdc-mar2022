let productos = [];

let producto = {
    "nombre": "Curso Javascript desde cero",
    "precio": 229,
    "descripcion": "Inicia en el maravilloso mundo de JS",
    "imagen":"jsdc.jpg",
    "existencia": 1
}

productos.push(producto);

productos.push({
    "nombre": "Java desde cero",
    "precio": 199,
    "descripcion": "Inicia en el maravilloso mundo de Java",
    "imagen":"java.jpg",
    "existencia": 0
});

productos.push({
    "nombre": "Curso C#  desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"reactnative.jpg",
    "existencia": 1
});

productos.push({
    "nombre": "Curso AWS native desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"reactnative.jpg",
    "existencia": 1
});

productos.push({
    "nombre": "Curso nodejs native desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native ultimo",
    "imagen":"reactnative.jpg",
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