// Operaciones para cálculo de cuadrado
console.group(`Cuadrados`);
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado (ladoCuadrado){
  return ladoCuadrado*4;
}

//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);
//const areaCuadrado = Math.pow(ladoCuadrado, 2); //operador potencia de la biblioteca Math
//console.log(`El área del cuadrado es: ${areaCuadrado} cm²`);

function areaCuadrado (ladoCuadrado){
  return Math.pow(ladoCuadrado, 2);
}

console.groupEnd();

// Operaciones para cálculo de triangulo
console.group(`Triangulos`);
// const ladoTriangulo1 = 6,
//   ladoTriangulo2 = 6,
//   baseTriangulo = 4,
//   alturaTriangulo = 5.5;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, la base mide: ${baseTriangulo} cm y la altura es: ${alturaTriangulo} cm `);

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
} 

//console.log(`El perimetro del triángulo es: ${perimetroTriangulo} cm`);

function areaTriangulo (baseTriangulo, alturaTriangulo){
  return (baseTriangulo * alturaTriangulo) / 2;
} 
//console.log(`El área del triángulo es: ${areaTriangulo} cm²`);
console.groupEnd();

// Operaciones para cálculo de circulo
console.group(`Circulo`);
// const radioCirculo = 4;
// console.log(`El radio del circulo mide: ${radioCirculo} cm y el diámetro mide:  ${radioCirculo*2} cm`);
function circunferenciaCirculo (radioCirculo){
  return 2 * Math.PI * radioCirculo;
}
//console.log(`La circunferencia del Circulo es: ${circunferenciaCirculo} cm`);

function areaCirculo (radioCirculo){
  return Math.PI * Math.pow(radioCirculo, 2)
}

//console.log(`El área del cuadrado es: ${areaCirculo} cm²`);

console.groupEnd();

// **** Interaccion con HTML ***
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}