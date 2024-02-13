// promises
// async 
// resolve
// reject
// order items + payment => token
// success or failure
// pending, resolved, rejected
// caches
// error handling
function addAsync(a, b) {
    function fn(res, rej) {
        setTimeout(() => {
            if (a === 0) rej('Invalid input');
            else {
                var c = a + b;
                res(c);
            }
        }, 2000);
    }
    const p = new Promise(fn);

    return p;
}

var p = addAsync(0, 20);

p.then(function (data) {
    console.log(data);
})
    .catch(function (err) {
        console.log(p);
        console.log(err);
    });

p.then(function (data) {
    console.log(data);
})
    .catch(function (err) {
        console.log(p);
        console.log(err);
    });

