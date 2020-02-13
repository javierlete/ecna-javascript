'use strict';

var opcion = prompt('Dime una opción numérica');

console.log(parseInt(opcion)===1);

switch(parseInt(opcion)) {
    case 1: console.log(1); break;
    case 2: console.log(2); break;
    default: console.log('Otra opción');
}
