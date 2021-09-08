// const precioOriginal = 120;
// const descuento = 18;

function CalcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}

function cuponesDescuento(cupon){
    var cupones = [
    {nombreCupon: 'edgar', descuentoCupon: 35},
    {nombreCupon: 'Marisol', descuentoCupon: 15},
    {nombreCupon: 'Rosaneli', descuentoCupon: 10}];

    for (let index = 0; index <cupones.length; index++) {
        const element = cupones[index];
        if (element.nombreCupon === cupon) {
            console.log("Cupon valido con el "+element.descuentoCupon+'% de descuento')
        }else {
            console.log('El cupon '+cupon+' no es valido')
        }
    }
}

function onClickButtonPriceDiscount() {
    const intputPrice = document.getElementById('input-price');
    const priceValue = intputPrice.value;

    const inputDiscount = document.getElementById('input-discount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById('result-price');
    resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento
// });