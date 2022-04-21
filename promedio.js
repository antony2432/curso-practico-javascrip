function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function datosClick(){
    const inputDatos = document.getElementById("numeroDatos");
    const numeroDatos = inputDatos.value;
    console.log(numeroDatos);
    for (let i = 0; i < numeroDatos; i++) {
        document.getElementById("datosExp").innerHTML+= "<p>Ingrese sus datos</p>" + "<input type='number' class='botonCalcular'>";
    }
}; 
function calcularPromedio() {
    const inputCalcular = document.getElementsByClassName("botonCalcular");
    const valores = inputCalcular.value;
    calcularMediaAritmetica(valores);
} 