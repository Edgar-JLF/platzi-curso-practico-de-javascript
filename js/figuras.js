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

//Tipo de triangulo y calcular altura

function tipoTriangulo(ladoA, ladoB, base){
    if ((ladoA==ladoB && ladoA != base) || (ladoB==base && ladoB != ladoA) || (base == ladoA && base != ladoB)) {
        const ladoBNuevo = base/2;
        const baseNuevo = ladoA;
        const altura = Math.sqrt((ladoBNuevo**2)-((baseNuevo/2)**2));
        console.log(altura);
        const datosTriangulo = {
            triangulo: 'Isoseles',
            alturaTriangulo: altura
        }
        return datosTriangulo;
    }
    if (ladoA != ladoB && ladoA != base) {
        return 'Es un triángulo rectángulo y aún no calculo la altura de el'
    }
    if (ladoA == ladoB && ladoA == base) {
        return'Es un triángulo equilatero y aún no calculo la altura de el'
    }
}


// Funciones para hacer los calculos con datos traidos del html

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
    const altura = tipoTriangulo(valueLadoA, valueLadoC, valueBase);
    alert('El perímetro del triángulo es: ' + perimetro + 'cm');
    console.log(perimetro)
}

function calcularAreaTriangulo(){
    const inputLadoA = document.getElementById("InputLadoA");
    const valueLadoA = parseInt(inputLadoA.value);
    const inputLadoC = document.getElementById("InputLadoC");
    const valueLadoC = parseInt(inputLadoC.value);
    const inputBase = document.getElementById("InputBase")
    const valueBase = parseInt(inputBase.value);

    const altura = tipoTriangulo(valueLadoA, valueLadoC, valueBase);
    const area = areaTriangulo(valueBase, altura.alturaTriangulo);
    alert('El área del triángulo ' + altura.triangulo +' es: ' + area + 'cm² ' + 'y su altura es: ' + altura.alturaTriangulo);
}

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;

    const diametro = diametroCirculo(valueRadio);
    alert('El diametro del circulo es: ' + diametro + 'cm')
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;

    const diametro = areaCirculo(valueRadio);
    alert('El área del circulo es: ' + diametro + 'cm²')
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;

    const diametro = perimetroCirculo(valueRadio);
    alert('El perímetro del circulo es: ' + diametro + 'cm')
}