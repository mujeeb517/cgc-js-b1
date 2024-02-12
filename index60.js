// callback
// promises
// async await

function addAsync(a, b, cb) {
    setTimeout(() => cb(a + b), 3000);
}

function subAsync(a, b, cb) {
    setTimeout(() => cb(a - b), 1000);
}

function mulAsync(a, b, cb) {
    setTimeout(() => cb(a * b), 1000);
}

// parallel
// sequentially
// add -> sub -> mul
// contries -> state -> cities
mulAsync(10, 20, res => console.log('mul', res));
addAsync(10, 20, res => console.log('add', res));
subAsync(10, 20, res => console.log('sub', res));