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
const listas = [];
function datosClick(){
    const inputDatos = document.getElementById("numeroDatos");
    const numeroDatos = inputDatos.value;
    console.log(numeroDatos);
    document.getElementById("datosExp").innerHTML += "<p>Ingrese sus datos</p>"
    for (let i = 0; i < numeroDatos; i++) {
        document.getElementById("datosExp").innerHTML += "<br>" + "<input type='number' class='botonCalcular' id='inputs'>" + "<br>";
    }
}; 
function calcularPromedio() {
    let iteraciones = inputDatos.value;
    for (let i = 0; i < iteraciones; i ++){
        listas.push(document.getElementById("inputs").value);
    }
    
    const pLista = calcularMediaAritmetica(listas);
    document.getElementById("resultado").innerText= "El promedio es: " + pLista;
} 