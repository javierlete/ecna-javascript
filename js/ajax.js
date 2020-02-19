'use strict';

var objeto;

window.onload = function () {
    httpRequest.open('GET', 'datos/holamundo.txt');

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == COMPLETED) {
            if (httpRequest.status == HTTP_OK) {
                console.log(httpRequest.responseText);
            }
        }
    };

    httpRequest.send(null);

    httpRequest.open('GET', 'datos/menu.json');

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == COMPLETED) {
            if (httpRequest.status == HTTP_OK) {
                console.log(httpRequest.responseText);
                objeto = JSON.parse(httpRequest.responseText);
                console.log(objeto);
            }
        }
    };

    httpRequest.send(null);

};
