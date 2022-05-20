// codigo cuadrado
console.group('Cuadrados')
// Perimetro de un cuadrado
function perimetroCuadrado(lado){
    perimetro = lado * 4
    return perimetro
}
// Area de un cuadrado
function areaCuadrado(lado){
    area = lado * lado
    return area
}
console.groupEnd()


// Codigo de triangulo
console.group('Triangulos')
// Perimetro de un triangulo
function perimetroTriangulo(lado1, base){
    perimetro = (lado1 * 2) + base
    return perimetro
}
//Area de un triangulo
function areaTriangulo(base, alturaTriangulo){
    area = (base * alturaTriangulo) / 2
    return area
}
console.groupEnd()


// Codigo de circulo
console.group('Circulos')
//Diametro
function diametroCirculo(radio){
    return radio * 2
}
//perimetro
const pi = Math.PI
// Perimetro del circulo
function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio)
    perimetro = diametro * pi;   
    return perimetro
}
// Area circulo
function areaCirculo(radio){
    area = (radio * radio) * pi
    return area
}
console.groupEnd()
//funcion de cuadrados
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//funcion de circulos
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}

//funciones de triangulo
function calcularPerimetroTriangulo() {
    const l1 = document.getElementById("InputLado1Triangulo");
    const lado1 = l1.value;
    const bas = document.getElementById("InputBaseTriangulo");
    const base = bas.value;

    const perimetro = perimetroTriangulo(lado1, base);
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const al = document.getElementById("InputAlturaTriangulo");
    const altura = al.value;
    const bas = document.getElementById("InputBaseTriangulo");
    const base = bas.value;

    const area = areaTriangulo(base, altura);
    alert(area)
}