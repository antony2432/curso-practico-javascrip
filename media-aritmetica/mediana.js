const lista1 = [
    100,
    200,
    500,
    400000000,
]

function calcularMediana(lista) {
    // funcion para sacar el promedio
    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

    // con esto verificamos que la lista es par o no 
    const mitadLista1 = parseInt(lista.length / 2);

    function esPar (numerito) {
        return numerito % 2 === 0;
    };
    
    //generamos la condicional si es par o no 
    let mediana;

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista1];
        const elemento2 = lista[mitadLista1 - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, 
            elemento2,
        ])
    
        mediana = promedioElemento1y2;
    }else {
        mediana = lista[mitadLista1]
    };

    return mediana;
}