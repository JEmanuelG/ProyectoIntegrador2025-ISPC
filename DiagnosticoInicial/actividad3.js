// define funcion con callback
function prueba(array, callback) {
    for(let num of array){callback(console.log(num))}
    
};


let arreglo = [2,4,7,9];


prueba(arreglo,  function() {})