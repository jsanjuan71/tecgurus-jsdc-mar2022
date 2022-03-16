const presentacion = document.getElementById("presentacion");

const anthem = `Mexicanos, al grito de guerra
El acero aprestad y el bridón
Y retiemble en sus centros la Tierra
Al sonoro rugir del cañón
Y retiemble en sus centros la Tierra
Al sonoro rugir del cañón`;

let lines = anthem.split("\n");

const finalParagraph = lines.join("<br>");

const fecha = document.getElementById("fecha");

const now = new Date();

const months = ["ene", "feb", "mzo", "apr", "may", "jun", "jul","sep","oct","nov","dic"];

const fullDate = `${now.getDate()}-${months[now.getMonth()]}-${now.getFullYear()}`;

fecha.innerHTML = fullDate;

presentacion.innerHTML = finalParagraph;

const menu = document.getElementById("menu");

const opciones= ["Inicio", "Productos","Carrito"];

let menuOps = "<li>"+opciones.join("</li><li>")+"</li>";

let template = '';
for (const opcion of opciones) {
    template += `<li>${opcion}</li>`;
}
menu.innerHTML = template;

menu.innerHTML = "";



for (const opcion of opciones) {
    //let template =  `<li>${opcion}</li>`;
    //let li = document.createElement("li");
    //li.innerHTML = opcion;
    menu.appendChild( stringToDOM(`<li>${opcion}</li>`, true) );
}

menu.appendChild( stringToDOM(`<li>Other</li>`, true) );

