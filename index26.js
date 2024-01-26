// local 
function findMinRec(arr, i, minSoFar) {
    if (i === arr.length) return minSoFar;

    if (arr[i] < minSoFar) {
        minSoFar = arr[i];
    }
    return findMinRec(arr, i + 1, minSoFar);
}

var res = findMinRec([10, 1, 2, -4, 100, 1], 0, Infinity);
console.log(res);