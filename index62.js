function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a <= 0) rej('Invalid input');
            else res(a + b)
        }, 1000);
    });
}

function subAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a <= 0) rej('Invalid input');
            else res(a - b)
        }, 1000);
    });
}

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a <= 0) rej('Invalid input');
            else res(a * b)
        }, 1000);
    });
}

// parallel
// independent
// sequential
// subAsync(10, 20).then(res => console.log('sub', res));
// addAsync(10, 20).then(res => console.log('add', res));
// mulAsync(10, 20).then(res => console.log('mul', res));
// callback hell
// chained
// addAsync(10, 20)
//     .then(addRes => {
//         subAsync(addRes, 10)
//             .then(subRes => {
//                 mulAsync(subRes, 10)
//                     .then(mulRes => {
//                         console.log(mulRes);
//                     });
//             });
//     });

// promise
// create
// resolve
// reject
// error handling
// parallel
// sequential
// chaining
addAsync(0, 2)
    .then(addRes => subAsync(addRes, 10))
    .then(subRes => mulAsync(subRes, 10))
    .then(mulRes => console.log(mulRes))
    .catch(err => console.log(err));
