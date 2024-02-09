// array map, filter and reduce
var arr = [1, 2, 3, 4]; // 2,4,6,8
// transformation
// var res = [];
// for (var i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2);
// }

// console.log(arr, res);

function double(elem) {
    return elem * 2;
}

// implement your own map
// myMap
function triple(elem) {
    return elem * 3;
}

var res = arr.map(elem => elem * 2);

var evenArr = arr.filter(elem => elem % 2 === 0);

console.log(arr, evenArr);

const sum = arr.reduce((acc, curr) => acc + curr);

console.log(sum);