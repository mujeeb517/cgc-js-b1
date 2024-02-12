// credit card
// wrong cc number
// order of the params for callback function
function addAsync(a, b, cb) {
    setTimeout(() => {
        if (a === 0) cb('Invalid input');
        else {
            var c = a + b;
            cb(null, c);
        }

    }, 2000);
}

addAsync(0, 20, (err, res) => {
    if (err) console.log(err);
    else console.log(res);
});