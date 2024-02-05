// two types
// value type and reference types

// var x = 10;
// var y = x; // copy

// ++x;


// console.log(x, y);

function fn(a) {
    ++a;

    console.log("value of param a", a);
}

// value type
var x = 10;
fn(x);
console.log("x is ", x);