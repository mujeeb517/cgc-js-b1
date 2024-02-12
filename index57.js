// advanced
// async JS * sync
// no delays
// debuggin
// break point
// control
// synchronous
function add(a, b) {
    for (var i = 0; i < 100000000000; i++) {
        console.log();
    }
    a++;
    b++;
    var c = a + b;
    return c;
}

const res = add(10, 20);
console.log(res);

