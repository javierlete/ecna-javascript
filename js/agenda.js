const URL = 'http://127.0.0.1:3000/personas/';

const ERROR = 'error';
const INFO = 'info';

const MODIFICAR = 'Modificar';
const AGREGAR = 'Añadir';

window.onload = function () {
    mostrarMensaje();

    ocultar('formulario');

    document.getElementById('formulario').onsubmit = function (e) {
        e.preventDefault();

        const op = $('formulario').dataset.operacion;

        let metodo;

        let persona = { nombre: $('nombre').value, apellidos: $('apellidos').value };

        let id;

        switch (op) {
            case AGREGAR:
                metodo = 'POST';
                id = '';
                break;
            case MODIFICAR:
                metodo = 'PUT';
                id = $('id').value;
                persona.id = id;
                break;
            default: mostrarMensaje('No se reconoce la operación recibida ' + op, 'error');
        }


        fetch(URL + id, {
            method: metodo,
            body: JSON.stringify(persona),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resultado => resultado.json())
            .catch(() => mostrarMensaje('Error al obtener el listado', ERROR))
            .then(persona => {
                mostrarMensaje(op + ' realizada correctamente');

                agregarModificarFila(persona, op);

                ocultar('formulario');
                mostrar('tabla');
            })
            ;


    };

    fetch(URL)
        .then(resultado => resultado.json())
        .catch(() => mostrarMensaje('Error al obtener el listado', ERROR))
        .then(objeto => rellenarListado(objeto))
        ;
};

function agregarModificarFila(persona, op) {
    const listado = $('listado');

    let tr, thId, tdNombre, tdApellidos, tdOpciones;

    switch (op) {
        case AGREGAR:
            tr = document.createElement('tr');

            thId = document.createElement('th');
            tdNombre = document.createElement('td');
            tdApellidos = document.createElement('td');
            tdOpciones = document.createElement('td');

            break;
        case MODIFICAR:
            tr = $('id' + persona.id);

            thId = tr.getElementsByTagName('th')[0];

            tdNombre = tr.getElementsByTagName('td')[0];
            tdApellidos = tr.getElementsByTagName('td')[1];
            tdOpciones = tr.getElementsByTagName('td')[2];

            break;
    }

    tr.id = 'id' + persona.id;

    thId.innerText = persona.id;
    tdNombre.innerText = persona.nombre;
    tdApellidos.innerText = persona.apellidos;
    tdOpciones.innerHTML = botonesOpciones(persona);

    if (op === AGREGAR) {
        tr.appendChild(thId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellidos);
        tr.appendChild(tdOpciones);

        listado.appendChild(tr);
    }
}

function borrar(id) {
    try {
        fetch(URL + id, {
            method: 'DELETE'
        })
            .then(response => {
                console.log('RESPUESTA', response);
                response.json();
            })
            .catch(error => {
                mostrarMensaje('Error al borrar el elemento', ERROR);
                console.error('ERROR', error)
            })
            .then(objeto => {
                console.log('OBJETO', objeto);
                $('id' + id).remove()
                mostrarMensaje('Se ha borrado correctamente');
            });
        ;

    } catch (e) {
        console.error('ERROR DE BORRAR', e);
    }
    return false;
}

function rellenarListado(personas) {
    const tbody = $('listado');

    personas.forEach(persona => {
        tbody.innerHTML += `
            <tr id="id${persona.id}">
                <th>${persona.id}</th>
                <td>${persona.nombre}</td>
                <td>${persona.apellidos}</td>
                <td>
                    ${botonesOpciones(persona)}
                </td>
            </tr>`;
    });

    mostrar('tabla');

    ocultar('mensaje');
}

async function mostrarFormulario(id) {
    mostrarMensaje();
    ocultar('tabla');

    const operacion = id ? MODIFICAR : AGREGAR;

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

    const boton = $('aceptar');
    boton.innerText = operacion;

    $('formulario').dataset.operacion = operacion;

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

const botonesOpciones = (persona) =>
    `
<a href="javascript:mostrarFormulario(${persona.id})">Modificar</a>
<a href="#" onclick="return borrar(${persona.id})">Borrar</a>`;