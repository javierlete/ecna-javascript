'use strict';

window.onload = function () {
    var nombre = document.forms[0].nombre; // document.getElementById('nombre');

    this.document.forms[0].onsubmit = function (evento) {
        try {
            evento.preventDefault();

            var correcto = true;

            if (nombre.value.trim().length === 0) {
                nombre.className = 'mal';

                var span = document.createElement('span');
                span.className = 'mal';
                span.innerText = 'Nombre requerido';

                nombre.parentNode.appendChild(span);

                nombre.mensajeError = span;

                correcto = false;
            } else {
                nombre.className = 'bien';

                nombre.mensajeError.remove();
            }

            if(correcto) {
                document.forms[0].submit();
            }
            //return false;
        } catch (e) {
            alert(e);
            console.error(e);
        }
    };

};

