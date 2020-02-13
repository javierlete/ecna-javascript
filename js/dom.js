'use strict';

document.writeln('Hola desde JavaScript');

var titulo = document.getElementById("titulo");

console.log(titulo);

titulo.innerHTML = 'Modificado desde JS';

titulo.className = 'titulo-grande';

//document.body.innerHTML = '';

var vinculos = document.getElementsByTagName('a');

for(var vinculo of vinculos) {
    vinculo.style = 'font-weight: bold';
}

var articulo = document.getElementsByTagName('article')[0];

console.log(articulo.children);

console.log(articulo.parentNode);

articulo.children[1].remove();

var hr = document.createElement('hr');

articulo.insertBefore(hr, articulo.children[1]);
