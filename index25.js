// find min
// state management
// Linear

var minSoFar = Infinity;
var i = 0;
function findMinRec(arr) {
    if (i === arr.length) return;

    if (arr[i] < minSoFar) {
        minSoFar = arr[i];
    }

    i++;
    findMinRec(arr);
}

findMinRec([10, 20, -1, -5, 10, 4]);
console.log(minSoFar);