'use strict';

$(function () {
    var $nombre = $('#nombre');

    $('form').submit(function (evento) {
        try {
            evento.preventDefault();

            var correcto = true;

            if ($nombre.val().trim().length === 0) {
                var $span = $('<span>').addClass('mal').html('Nombre requerido');
                $span.insertAfter($nombre.removeClass('bien').addClass('mal'));

                $nombre[0].mensajeError = $span[0];

                correcto = false;
            } else {
                $nombre.removeClass('mal').addClass('bien');

                $nombre[0].mensajeError.remove();
            }

            if(correcto) {
                $('form')[0].submit();
            }
        } catch (e) {
            alert(e);
            console.error(e);
        }
    });

});

