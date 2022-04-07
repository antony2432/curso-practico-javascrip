// codigo cuadrado
console.group('Cuadrados')
// Perimetro de un cuadrado
function perimetroCuadrado(ladoCuadrado){
    perimetro = ladoCuadrado * 4
    console.log('El perimetro del cuadrados miden ' + perimetro + ' Cm')
}
// Area de un cuadrado
function areaCuadrado(ladoCuadrado){
    area = ladoCuadrado * ladoCuadrado
    console.log('El area del cuadrado mide en ' + area + ' Cm cuadrado')
}
console.groupEnd()


// Codigo de triangulo
console.group('Triangulos')
// Perimetro de un triangulo
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    perimetro = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
    console.log('El perimetro del triangulo es ' + perimetro + ' cm')
}
//Area de un triangulo
function areaTriangulo(baseTriangulo, alturaTriangulo){
    area = (baseTriangulo * alturaTriangulo) / 2
    console.log('El area de un triagulo es ' + area + ' cm^2')
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
    console.log('El perimetro del circulo es ' + perimetro + ' cm')
}
// Area circulo
function areaCirculo(radio){
    area = (radio * radio) * pi
    console.log('El area del circulo es ' + area + ' cm^2')
}
console.groupEnd()