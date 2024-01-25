// given a number return whether it's a prime
// input: number
// output: boolean
// prime: a number which has exactly factor
// n%x === 0
// 12: 1 2 3 4 6 12
// 17: 1 17
// 11: 1 11
// 9: 1 3 9
// refactoring
// edge case
function isPrime(n) {
    if (n === 1) return false;
    
    var upper = parseInt(Math.sqrt(n));
    for (var i = 2; i <= upper; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(isPrime(12));
console.log(isPrime(15));
console.log(isPrime(17));
console.log(isPrime(1));