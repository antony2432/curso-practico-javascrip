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
    const cer = [];
    const cantidad = Number(document.getElementById("numeroDatos").value);

    for (let i = 0; i < cantidad; i ++){
        let a = 'number'+i;
        const numeros = Number(document.getElementById(a).value);
        cer.push(numeros);
    }
    
    console.log(cer);

    let resultados = calcularMediana(cer);
    console.log(resultados);
    document.getElementById("resultado").innerText = `la respuesta es: ${resultados}`
};

function datosClick(){
    const inputDatos = document.getElementById("numeroDatos");
    const numeroDatos = inputDatos.value;
    console.log(numeroDatos);
    document.getElementById("datosExp").innerHTML += "<p>Ingrese sus datos</p>"
    for (let i = 0; i < numeroDatos; i++) {
        document.getElementById("datosExp").innerHTML += `<br>` + `<input type='number' class='botonCalcular' id='${'number'+i}'>` + `<br>`;
    }
}; 