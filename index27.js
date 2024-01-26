function fact(n) {
    if (n === 1) return 1;

    return n * fact(n - 1);
}
// Divide and Conquer 
// merge 
// quick
// tree
// graph

var res = fact(4);

console.log(res);