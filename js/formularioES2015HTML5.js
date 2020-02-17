'use strict';

window.onload = function () {
    const nombre = document.getElementById('nombre');

    document.querySelector('form').onsubmit = function (evento) {
        try {
            evento.preventDefault();

            let correcto = true;

            if (nombre.value.trim().length === 0) {
                const span = document.createElement('span');
                span.classList.add('mal');
                span.innerText = 'Nombre requerido';
                
                nombre.parentNode.appendChild(span);
                
                nombre.classList.remove('bien')
                nombre.classList.add('mal');

                nombre.mensajeError = span;

                correcto = false;
            } else {
                nombre.classList.remove('mal')
                nombre.classList.add('bien');

                nombre.mensajeError.remove();
            }

            if(correcto) {
                document.getElementsByTagName('form')[0].submit();
            }
        } catch (e) {
            alert(e);
            console.error(e);
        }
    };

};
