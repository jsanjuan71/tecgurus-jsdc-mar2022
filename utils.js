
function stringToDOM(str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

function moneyFormat( amount, currency = "MXN" ){
    return `$${amount} ${currency}`;
}

function getMenu(menu) {
    let stringMenu = '';
    menu.forEach(element => {
        stringMenu += `<li class="nav-item"><a class="nav-link" href="${element.href}">${element.name}</a></li>`;
    });
    return stringMenu ;
}