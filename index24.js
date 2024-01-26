// print n to 1
// print 1 to n
// function printRec(n) {
//     if (n === 0) return;

//     printRec(n - 1);
//     console.log(n);
// }

// printRec(10);

// given an array return the min element
function findMin(arr) {
    var minSoFar = Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minSoFar) {
            minSoFar = arr[i];
        }
    }

    return minSoFar;
}

var res = findMin([10, 1, -2, -3, 100, 1])
console.log(res);