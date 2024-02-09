// rest/spread operator ...
var m1 = {
    width: 5,
    height: 7,
    color: 'Black',
    features: {
        camera: true,
        frontCamera: true
    }
};

var m2 = { ...m1, color: 'Red', width: 10 };

var m3 = { ...m2, color: 'Green' };
// m2.color = "Red";

console.log(m1.features === m2.features);

var arr = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

var arr3 = [...arr, ...arr2];
console.log(arr3);


function fn(a, b, c) {
    console.log(a, b, c);
}

const params = [10, 20, 30, 40];

fn(...params);