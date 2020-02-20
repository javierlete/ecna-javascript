const URL = 'http://127.0.0.1:3000/personas/';

const ERROR = 'error';
const INFO = 'info';

window.onload = function () {
    mostrarMensaje();

    ocultar('formulario');

    fetch(URL)
        .then(resultado => resultado.json())
        .catch(() => mostrarMensaje('Error al obtener el listado', ERROR))
        .then(objeto => {
            rellenarListado(objeto);
            mostrarMensaje('Se ha cargado el listado correctamente');
        })
        ;
};

function rellenarListado(personas) {
    const tbody = $('listado');

    personas.forEach(persona => {
        tbody.innerHTML += `
            <tr>
                <th>${persona.id}</th>
                <td>${persona.nombre}</td>
                <td>${persona.apellidos}</td>
                <td>
                    <a href="javascript:mostrarFormulario(${persona.id})">Modificar</a>
                    <a href="javascript:borrar(${persona.id})">Borrar</a>
                </td>
            </tr>`;
    });

    mostrar('tabla');

    ocultar('mensaje');
}

async function mostrarFormulario(id) {
    mostrarMensaje();
    ocultar('tabla');

    const operacion = id ? 'Modificar' : 'Añadir';

    if (id) {
        // fetch(URL + id)
        //     .then(respuesta => respuesta.json())
        //     .then(persona => {
        //         $('id').value = persona.id;
        //         $('nombre').value = persona.nombre;
        //         $('apellidos').value = persona.apellidos;
        //     })
        //     ;

        let respuesta = await fetch(URL + id);
        let persona = await respuesta.json();

        $('id').value = persona.id;
        $('nombre').value = persona.nombre;
        $('apellidos').value = persona.apellidos;
    }





    $('aceptar').innerText = operacion;

    mostrar('formulario');
    ocultar('mensaje');
}

function mostrar(id) {
    $(id).style.display = 'block';
}

function ocultar(id) {
    $(id).style.display = 'none';
}

function mostrarMensaje(mensaje, nivel) {
    mensaje = mensaje || 'Por favor, espere...';
    nivel = nivel || INFO;

    var capaMensaje = $('mensaje');

    capaMensaje.innerHTML = mensaje;
    capaMensaje.className = nivel;
    capaMensaje.style.display = 'block';
}

function $(id) {
    return document.getElementById(id);
}
