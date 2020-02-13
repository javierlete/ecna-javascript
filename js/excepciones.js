'use strict';

try {
    div = 5/0;
    throw 'error inventado';
} catch(e) {
    alert('Ha habido un error: ' + e);
} finally {
    alert('Me ejecuto pase lo que pase');
}
