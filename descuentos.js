function calcularprecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;
    const precioDescuento = calcularprecioConDescuento(price, discount);

    const resulp = document.getElementById("PriceP")
    resulp.innerText = "El precio con desceunto es: " + precioDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });