'use strict';

var nombre = prompt('¿Cómo te llamas?');
console.log('hola ' + nombre);
nombre = 5;
console.log(nombre);

var div = 5 / 0;

console.log(div);

var a = 3, b = parseInt('asjdhfkjahsdg');

if (isNaN(b)) {   // b == NaN) {
    b = 0;
}

var mul = a * b;
var sum = b + a;

console.log(mul);
console.log(sum);

var mi_primera_variable;

var anno = 1972;

for (var i = 1; i <= 10; i++) {
    console.log(i);
    var bucle_ejecutado = true;
}

console.log(i);
console.log(bucle_ejecutado);

console.log(typeof i);
console.log(typeof bucle_ejecutado);

var texto = 'Pepe';

if (texto = 'Juan') { // ERRONEO (debiera ser ==)
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}

switch (texto) {
    case 'Pepe': console.log('Pepe'); break;
    case 'Juan': console.log('Juan'); break;
    default: console.log('No concuerda');
}

var mes = 4;

var dias;

switch (mes) {
    case 2: dias = 28; break;
    case 4:
    case 6:
    case 9:
    case 11: dias = 30; break;
    default: dias = 31;
}

console.log(dias);

// ARRAYS
var arr = Array(3);
arr[0] = 'Uno';
arr[1] = 'Dos';
arr[2] = 'Tres';



arr[3] = 'Cuatro';

arr[8] = 'Nueve';

arr[5] = 5;
arr[20] = null;

arr['indice'] = 'Dato';
arr.indice = 'Dato';

arr.yepa = 'Hola';

console.log(arr);
console.log(arr.indice);

arr.push('Nuevo elemento');

console.log(arr);
console.log(arr.length);

console.log(arr.pop());

console.log(arr);
console.log(arr.length);

for(var elemento of arr) {
    console.log(elemento);
}

for(var clave in arr) {
    console.log(clave, arr[clave]);
}

console.log(arr.join(';'));

var csv = 'Uno,Dos,Tres,Cuatro';

console.log(csv.split(','));

var alerta = alert;

alerta('hola');

// var suma = 5;

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

var x = 5, y = 6;

var calcular = suma;

console.log(calcular);

console.log(calcular(x, y));

calcular = resta;

console.log(calcular(x, y));

// Función anónima
calcular = function(a, b) {
    return a * b;
};

console.log(calcular(x, y));

var division = 10;

division = function(a, b) {
    return a / b;
};

calcular = division;

console.log(calcular(x, y));

(function() {
    var nom = 'Javier';

    var saludar = function(nom) {
        console.log('Un saludo ' + nom);
    };
    
    saludar(nom);
})();

console.log(nom);
