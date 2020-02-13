var x = "estoy fuera";

function funcionExterna() {
    var x = "estoy dentro";
    function funcionAnidada() { console.log(x); }
    funcionAnidada();
}

funcionExterna();

function bucle() {
    var arr = [];

    for (var i = 1; i <= 5; i++) {
        (function (j) {
            arr.push(function () { return j; });
        }(i));
    }

    console.log(arr[0]());
    console.log(arr[1]());
}

bucle();
