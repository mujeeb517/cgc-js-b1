// migration
function newFn() {
    'use strict';
    var x = 10;
    console.log(x);
}

function add(a, b) {
    'use strict';
    console.log(a + b);
}

newFn();
add(10, 20);