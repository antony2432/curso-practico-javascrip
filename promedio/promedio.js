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
    document.getElementById("datosExp").innerHTML += "<p>Ingrese sus datos</p>"
    for (let i = 0; i < numeroDatos; i++) {
        document.getElementById("datosExp").innerHTML += `<br>` + `<input type='number' class='botonCalcular' id='${'number'+i}'>` + `<br>`;
    }
}; 
function calcularPromedio() {
    const cer = [];
    const cantidad = Number(document.getElementById("numeroDatos").value);

    for (let i = 0; i < cantidad; i ++){
        let a = 'number'+i;
        const numeros = Number(document.getElementById(a).value);
        cer.push(numeros);
    }
    
    console.log(cer);
    const pLista = calcularMediaAritmetica(cer);
    document.getElementById("rest").innerText= "El promedio es: " + pLista;
} 