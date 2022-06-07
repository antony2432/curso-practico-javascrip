// aqui creamos un objeto donde se va almacenar la lista
// const lista1Count = {};

// realizamos el contador con la funcion map
// lista1.map(
//     function(elemento) {
//         if (lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         }else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

//convertimos el obejto nuevamente en una lista y ordenamos y extraemos la moda
// const lista1Array = Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//     }
// )

// aqui asignamos la moda a un constante
// const moda = lista1Array[lista1Array.length - 1];

// creando una funcion para la obtener la moda de cualquier lista que pases
function calcularModa(listaEjem,){
    const listaCount = {};

    listaEjem.map(
        function(elemento) {
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            }else {
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    const moda = listaArray[listaArray.length - 1];
    return moda;
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
function calcularModas() {
    const cer = [];
    const cantidad = Number(document.getElementById("numeroDatos").value);

    for (let i = 0; i < cantidad; i ++){
        let a = 'number'+i;
        const numeros = Number(document.getElementById(a).value);
        cer.push(numeros);
    }
    
    console.log(cer);
    const pLista = calcularModa(cer);
    document.getElementById("rest").innerText= "La moda es: " + pLista[0] + " y se repite: " + pLista[1];
} 