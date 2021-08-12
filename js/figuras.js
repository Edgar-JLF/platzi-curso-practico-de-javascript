// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return (lado1+lado2+base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Código del círculo
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert('El perímetro del cuadrado es: ' + perimetro + 'cm');
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert('El área del cuadrado es: ' + area + 'cm²');
}

function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById("InputLadoA");
    const valueLadoA = parseInt(inputLadoA.value);
    const inputLadoC = document.getElementById("InputLadoC");
    const valueLadoC = parseInt(inputLadoC.value);
    const inputBase = document.getElementById("InputBase")
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(valueLadoA, valueLadoC, valueBase);
    alert('El perímetro del triángulo es: ' + perimetro + 'cm');
    console.log(perimetro)
}

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;

    const diametro = diametroCirculo(valueRadio);
    alert('El área del circulo es: ' + diametro + 'cm')
}