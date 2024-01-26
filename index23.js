// Recursion
// iterative
// recursive
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1
// function f1() {
//     console.log('f1');

//     f1();
// }

// f1();
// iteratively 
function fact(n) {
    // base condition
    if (n === 1) return 1;

    return n * fact(n - 1);
}

var res = fact(10);
console.log(res);