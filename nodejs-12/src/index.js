const objCart = require('./CartItens.js');

function getShoppingCart(ids, productsList) {
    let itensSelected = productsList.filter(e => ids.includes(e.id));
    let cartItens = new objCart.CartItens(itensSelected);
    return {...cartItens };
}

module.exports = { getShoppingCart };