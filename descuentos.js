//const precioOriginal = 100;
//const descuento = 15;
const codes = [
    {nombre:"super15", porcentaje: 15},
    {nombre:"super20", porcentaje: 20},
    {nombre:"super10", porcentaje: 10},
    {nombre:"super50", porcentaje: 50},
]

function calcularPrecioConDescuento(precio, descuento) {
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento )/100;

return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
   
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const resultP = document.getElementById("ResultPrice");

    const validarCodigo = codes.some(function(cupon){
        return cupon.nombre == discountValue;
    });

    if (validarCodigo == true){
        var porcentajeValue = codes.find(function(codigo){
            return codigo.nombre == discountValue;
        });
        const precioConDescuento = calcularPrecioConDescuento(priceValue, porcentajeValue.porcentaje);
        
        resultP.innerText = "Tienes un cupón con el "+porcentajeValue.porcentaje+"% de descuento, tu valor final es:  $" + precioConDescuento;
    } else {
        resultP.innerText = "No tienes cupón o el que agregaste no es valido. Tu precio final es: $"+ priceValue; 
    }


}

