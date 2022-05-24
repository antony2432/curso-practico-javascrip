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


    let listaOrdenada = lista.sort(
        function (a, b){
            return a - b;
        }
    );


    // con esto verificamos que la lista es par o no 
    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar (numerito) {
        return numerito % 2 === 0;
    };
    
    //generamos la condicional si es par o no 
    let mediana;

    if (esPar(lista.length)){
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, 
            elemento2,
        ])
    
        mediana = promedioElemento1y2;
    }else {
        mediana = listaOrdenada[mitadLista]
    };

    return mediana;
}


function btmCalcular() {
    const input = document.getElementById("listaE").value;
    const str = input.split(',');
    let resultados = calcularMediana(str);
    console.log(resultados);
};

