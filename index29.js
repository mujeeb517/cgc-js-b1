// loosely typed, dynamically typed
// strongly typed
function add(a, b) {
    var c = a + b;
    console.log(c);
}

add(10, 20);
add('abc', 'xyz');
add(true, false);
add(10.20, 20.20);
add(undefined, undefined);
add([1, 2, 3], [4, 5, 6]);

function f1() { return 100; }
function f2() { return 200; }

add(f1, f2);
