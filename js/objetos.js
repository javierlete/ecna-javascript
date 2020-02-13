'use strict';

var persona = new Object();

persona.mostrar = function () {
    console.log(this.apellido + ', ' + this.nombre);
};

persona.nombre = 'Javier';
persona['apellido'] = 'Lete';

console.log(persona);
console.log(persona['nombre'], persona.apellido);
console.log(persona.algo);

persona.mostrar();

var oficina = new Object();

oficina.nombre = 'Bilbao';
oficina.empleados = new Array();

oficina.empleados.push(persona);

console.log(oficina);

oficina.empleados[0].mostrar();

var oficina2 = {
    nombre: 'Bilbao',
    empleados: [
        {
            nombre: 'Javier',
            apellido: 'Lete',
            mostrar: function () {
                console.log(this.apellido + ', ' + this.nombre);
            }
        },
        {
            nombre: 'Pepe',
            apellido: 'Pérez',
            mostrar: function () {
                console.log(this.apellido + ', ' + this.nombre);
            }
        }
    ]
};

oficina2.empleados[0].mostrar();
console.log(oficina2);

function Persona(nombre, apellido) {
    console.log(arguments);
    this.nombre = nombre;
    this.apellido = apellido || 'Desconocido';
}

Persona.prototype.mostrar = function() {
    console.log(this.apellido, this.nombre);
}

var persona3 = new Persona('Nuevo', 'Nuevez');

console.log(persona3);
console.log(persona3.nombre, persona3.apellido);

persona3.mostrar();

var persona4 = new Persona('Cuarta', 'Cuartez');

persona4.mostrar();
persona4.apellidos = 'asdfasdf';

var persona5 = new Persona(1, 2, 3, 4, 5);

var persona6 = new Persona('Sólo nombre');

console.log(persona6);
