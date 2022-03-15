//'use strict';

const monthNames = ["Enero", "Febro", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let config = {
    name: "TG Store",
    date: new Date(),
    menu: [
        { name: "inicio", href: "#"},
        { name: "Nosotros", href: "#"},
        { name: "Productos", href: "#"},
        { name: "Carrito", href: "#"},
        { name: "Cuenta", href: "#"},
    ],
    presentation: `Mexicanos, al grito de guerra
    El acero aprestad y el bridón
    Y retiemble en sus centros la Tierra
    Al sonoro rugir del cañón
    Y retiemble en sus centros la Tierra
    Al sonoro rugir del cañón`,
};

Object.freeze(config);

document.getElementById('title').innerHTML = config.name;
document.getElementById('presentation').innerText = config.presentation;
document.getElementById('date').innerHTML = `${config.date.getDate()}/${monthNames[config.date.getMonth()]}/${config.date.getFullYear()}`;
document.getElementById('menu').innerHTML = getMenu(config.menu)

function stringToHTML(str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

function getMenu(menu) {
    let stringMenu = '';
    menu.forEach(element => {
        stringMenu += `<li><a href="${element.href}">${element.name}</a></li>`;
    });
    return stringMenu;
}
