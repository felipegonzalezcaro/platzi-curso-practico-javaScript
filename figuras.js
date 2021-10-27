// Código del cuadrado
console.group("Cuadradros");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
   return lado *4 ;
} 
//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado es: "+ areaCuadrado + "cm^2");
console.groupEnd();

// Código del triangulo
// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "los lados del triángulo miden: "
//     + ladoTriangulo1
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, "
//     + baseTriangulo
//     + "cm" 
//     );

// const alturaTriangulo = 5.5;
// console.log("El altura del triángulo es: "+ alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}
// console.log("El perimetro del triángulo es: "+ perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2 ;
}
// console.log("El area del triángulo es: "+ areaTriangulo + "cm^2");

// console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo} cm`);
// Diámetro
function diametroCirculo (radio) {
    return radio* 2;
} 
//PI 
const PI = Math.PI;
// console.log(`PI es: ${PI}`);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log(`El diametro del círculo es: ${perimetroCirculo} cm`);

//Área
// const areaCirculo =(radioCirculo * radioCirculo) * PI;
function areaCirculo (radio) {
    return (radio * radio) * PI;
}
// console.log(`El area del círculo es: ${areaCirculo} cm^2`);

console.groupEnd();

//Interaccion con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputC");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputC");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputUno = document.getElementById("trianguloLadoUno");
    const ladoA = Number(inputUno.value);

    const input = document.getElementById("Triangulo");
    const ladoB = Number(input.value);

    const inputBase = document.getElementById("trianguloBase");
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(ladoA,ladoB,base);
    alert(perimetro);
}

function calcularAlturaIsosceles() {
    const inputUno = document.getElementById("ladoUno");
    const ladoA = Number(inputUno.value);

    const inputDos = document.getElementById("ladoDos");
    const ladoB = Number(inputDos.value);

    const inputBase = document.getElementById("base");
    const base = Number(inputBase.value);

    if(ladoA==ladoB && ladoA != base){
        const hight= Math.sqrt((ladoA * ladoA)-((base * base)/4));
        alert(hight);
    }
    else{
        alert('no es un triangulo isosceles');
    }
}