const monthNames = ["Enero", "Febro", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let config = {
    name: "TG Store",
    date: new Date(),
    //menu: ["Inicio", "Nosotros", "Productos", "Carrito", "Cuenta"],
    menu: [
        { name: "inicio", href: "#"},
        { name: "Nosotros", href: "#"},
        { name: "Productos", href: "#"},
        { name: "Carrito", href: "#"},
        { name: "Cuenta", href: "#"},
    ],
    presentation: `Phasellus ullamcorper metus purus, id faucibus massa luctus sed. Suspendisse urna dolor, vehicula eget vestibulum mattis, hendrerit quis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vitae fringilla diam. Nullam at urna maximus, egestas felis sit amet, pharetra nisi. Donec dui turpis, bibendum et ligula eu, sagittis congue dui. Maecenas pellentesque nisi a sagittis laoreet. Vivamus fringilla quam non neque mollis vestibulum. Proin suscipit lectus nec augue sagittis, vitae consequat lacus ornare. Curabitur ac facilisis nibh. Praesent a pretium odio. Vivamus nec pretium ex. Mauris urna justo, fringilla ut nunc a, scelerisque consectetur odio. Praesent placerat neque id massa tristique semper. Vivamus eleifend accumsan lacus iaculis molestie. Proin tempor lobortis lectus nec scelerisque.

    Fusce eget faucibus nibh, eu sollicitudin odio. Aliquam vitae viverra nisi. Nullam turpis metus, euismod ut dolor et, facilisis bibendum mi. Mauris ut commodo eros. Curabitur suscipit, dui a tempus tincidunt, tellus tellus viverra sem, non congue dui lorem non magna. Proin mollis arcu vel nibh tincidunt egestas. Quisque pharetra felis non lorem gravida, at ultricies urna porttitor. Sed gravida condimentum dolor sit amet eleifend. Quisque vulputate metus mattis nibh posuere, quis volutpat velit ornare. Proin ullamcorper nunc eu blandit sagittis. Quisque iaculis consequat congue. Morbi molestie fringilla ultricies. Vestibulum suscipit tincidunt lacus, at laoreet magna sagittis et. Nulla elit mauris, interdum id pellentesque quis, interdum sit amet neque. Aenean consectetur ipsum non accumsan facilisis. Proin semper quam in urna consequat, vel viverra enim accumsan.
    
    Curabitur accumsan lacinia orci nec lobortis. Vivamus vel libero urna. Proin pellentesque metus eu odio efficitur, interdum vestibulum orci elementum. Etiam mollis facilisis scelerisque. Cras sed dui eget neque consectetur rhoncus ac vitae diam. Pellentesque tellus ipsum, consectetur in pretium et, blandit cursus erat. Nulla luctus a metus sit amet efficitur. Proin et convallis magna.`,

};

document.getElementById('title').innerHTML = config.name;
document.getElementById('presentation').innerText = config.presentation;
document.getElementById('date').innerHTML = `${config.date.getDate()}/${monthNames[config.date.getMonth()]}/${config.date.getFullYear()}`;
document.getElementById('menu').innerHTML = getMenu(config.menu)


//document.getElementById('menu').innerHTML = `<li>${config.menu.join('</li><li>')}</li>`;

// config.menu.forEach(element => {
//     document.getElementById('menu').append(stringToHTML(`<li>${element}</li>`));
// });



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
