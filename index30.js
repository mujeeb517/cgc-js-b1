// Refactoring
function addArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function add(a, b) {
    if (Array.isArray(a)) a = addArr(a);
    if (Array.isArray(b)) b = addArr(b);

    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();

    console.log(a + b);
}

add([1, 2, 3], [4, 5, 6]);
add([1, 2, [1, 2, 3, [1, 2, 3, [4, 5, 6]]]], [4, 5, 6]);

// add(10, 20);
// add(10.20, 20.20);
// add('abc', 'xyz');
// add(true, true);
// add(undefined, undefined);
// add([1, 2, 3], [4, 5, 6]);
// add([1, 2, 3], 10);
// add(100, [1, 2, 3]);
// add(true, [1, 2, 3]);
// add('xyz', [1, 2, 3]);

// function f1() { return 100; }
// function f2() { return 200; }

// add(f1, f2);

// add(100, f2);
// add(f1, 200);
// add(f1, [1, 2, 3]);
