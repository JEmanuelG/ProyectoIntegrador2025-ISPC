// 1
let nombre = 'Juan';
let edad = 25;

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// 2

const numeros = [3, 7, 12, 5, 2]; // arreglo original

// Funcion para calcular el cuadrado de un numero
function cuadradoNum(num) {
    return num * num
};


// Funcion para verificar mayores que 5
function mayorCinco(num) {
    return num > 5
};

const numerosAlCuadrado = numeros.map(cuadradoNum); // crea nuevo arreglo con los numeros al cuadrado 
const numerosMayorCinco = numeros.filter(mayorCinco); // crea nuevo arreglo con los numeros mayores a cinco del arreglo ariginal


// muestra los resultados
console.log(`Arreglo original: [${numeros}]`);

console.log(`Nuevo arreglo con los números al cuadrado: [${numerosAlCuadrado}]`);

console.log(`Nuevo arreglo con los números mayores a 5: [${numerosMayorCinco}]`);