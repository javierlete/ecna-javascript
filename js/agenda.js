const URL = 'http://127.0.0.1:3000/personas/';

window.onload = function() {
    esperaOn();

    formularioOff();

    fetch(URL)
        .then( resultado => resultado.json() )
        .then( objeto => rellenarListado(objeto) );
};

function formularioOff() {
    document.getElementById('formulario').style.display = 'none';
}

function esperaOn() {
    this.document.getElementById('espera').style.display = 'block';
}

function esperaOff() {
    this.document.getElementById('espera').style.display = 'none';
}

function rellenarListado(personas) {
    const tbody = document.getElementById('listado');

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

    tablaOn();

    esperaOff();
}

function tablaOn() {
    document.getElementById('tabla').style.display = 'block';
}

function tablaOff() {
    document.getElementById('tabla').style.display = 'none';
}

function mostrarFormulario(id) {
    esperaOn();
    tablaOff();

    const operacion = id ? 'Modificar' : 'Añadir';
    
    document.getElementById('formulario').style.display = 'block';

    document.getElementById('aceptar').innerText = operacion;
}