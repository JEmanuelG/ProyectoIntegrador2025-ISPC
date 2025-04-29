// 1
let nombre = 'Juan';
let edad = 25;

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// 2

const numeros = [3, 7, 12, 5, 2]; // arreglo original

// crea arreglo con los numeros al cuadrado
const numerosAlCuadrado = numeros.map((num) => {return num * num});

// Crea arreglo con los numeros mayores a 5
const numerosMayorCinco = numeros.filter((num) => {return num > 5});

// muestra los resultados
console.log(`Arreglo original: [${numeros}]`);

console.log(`Nuevo arreglo con los números al cuadrado: [${numerosAlCuadrado}]`);

console.log(`Nuevo arreglo con los números mayores a 5: [${numerosMayorCinco}]`);


// 3

// funcion flecha que retorna valor booleano dependiendo si el el numero que recibe es par o inpar
const paridad = (num) => {return (num % 2) === 0}

console.log(paridad(10)) //muestra resultado

