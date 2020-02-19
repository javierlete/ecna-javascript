'use strict';

const COMPLETED = 4;
const HTTP_OK = 200;

var httpRequest;

if (window.XMLHttpRequest) {
    //El explorador implementa la interfaz de forma nativa
    httpRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
    //El explorador permite crear objetos ActiveX
    try {
        httpRequest = new ActiveXObject("MSXML2.XMLHTTP");
    } catch (e) {
        try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) { }
    }
}
if (!httpRequest) {
    alert("No ha sido posible crear una instancia de XMLHttpRequest");
}