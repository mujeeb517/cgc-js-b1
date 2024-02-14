// async await
// this
function addAsync(a, b) {
    return new Promise((res, rej) => {
        if (a === 0) rej('Invalid input');
        else res(a + b);
    });
}

function subAsync(a, b) {
    return new Promise((res, rej) => {
        if (a === 0) rej('Invalid input');
        else res(a - b);
    });
}

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        if (a === 0) rej('Invalid input');
        else res(a * b);
    });
}

// addAsync(10, 20)
//     .then(res => {
//         console.log(res);
//     });

async function init() {
    try {
        const AddRes = await addAsync(0, 20);
        const subRes = await subAsync(AddRes, 10);
        const mulRes = await mulAsync(subRes, 10);
        console.log(mulRes);
    } catch (err) {
        console.log(err);
    }
}

init();