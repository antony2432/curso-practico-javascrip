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
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    perimetro = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
    return perimetro
}
//Area de un triangulo
function areaTriangulo(baseTriangulo, alturaTriangulo){
    area = (baseTriangulo * alturaTriangulo) / 2
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