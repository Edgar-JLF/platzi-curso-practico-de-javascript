function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

function calcularMediana(lista){
    //MISMO METODO SORT DE ORDENAMIENTO CON FUNCION DE FLECHA
    lista.sort((a, b) => a-b);
    // ORDENAMIENTO CON EL METODO SORT HACIENDO UNA FUNCUION DE COMPARACION
    // lista.sort(comparacion);
    // function comparacion(a,b){
    //     return a-b
    // }
    const mitadLista = parseInt (lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista -1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    }else{
        mediana = lista[mitadLista];
        return mediana;
    }
}


// const lista1 = [
//     100,
//     200,
//     300,
//     400000000,
// ];

// const mitadLista1 = parseInt(lista1.length / 2);



// let mediana;

// if (esPar(lista1.length)) {
//     const elemento1 = lista1[mitadLista1 -1];
//     const elemento2 = lista1[mitadLista1];
//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
//     mediana = promedioElemento1y2;
// }else{
//     mediana = lista1[mitadlista1];
// }