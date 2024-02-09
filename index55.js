// arrow functions
// function declaration, expression

// function add(a, b) {
//     console.log(a + b);
// }

// const add = function (a, b) {
//     return a + b;
// }
// anonymous function

const add = (a, b) => a + b;

const f = a => a + 10;

function f3(a) {
    return a + 10;
}

const f2 = () => console.log('arrow function');

var res = f(10);
f2();
console.log(res);